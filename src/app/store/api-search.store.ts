import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals'
import { effect, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiSearchService } from '../services/api-search.service';
import { ISearch } from '../interfaces/search';

let searchSub = new Subscription();

export const ApiSearchStore = signalStore(
    { providedIn: 'root' },
    withState({
        lang: "en-US",
        page: 1,
        query: "",
        type: "movie",
        searchRes: [] as ISearch[],
        searchTotalResults: 0
    }),
    withMethods((state) => ({
        setLanguage(lang: string) {
            patchState(state, { lang });
        },
        setQuery(query: string) {
            patchState(state, { query, page: 1 });
        },
        setPage(page: number) {
            patchState(state, { page });
        },
        setType(type: string) {
            patchState(state, { type, page: 1 });
        }
    })),
    withHooks({
        onInit(state) {
            const apiSearchService = inject(ApiSearchService);

            effect(() => {
                const { lang, page, query, type } = state;

                if (query().trim() === "") {
                    patchState(state, { searchRes: [], searchTotalResults: 0 });
                    return;
                }

                searchSub.unsubscribe();
                searchSub = apiSearchService.getSearch(lang(), query(), page(), type()).subscribe({
                    next: (data: any) => {
                        patchState(state, {
                            searchRes: data.results as ISearch[],
                            searchTotalResults: data.total_results
                        });
                    },
                    error: err => console.error('Failed to load search results', err)
                });
            });
        },
        onDestroy() {
            searchSub.unsubscribe();
        }
    })
);
