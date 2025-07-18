export interface ISearch {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    genre_country?: string[],
    original_language: string,
    original_name?: string,
    overview: string,
    popularity: number,
    poster_path: string,
    first_air_date?: string,
    name?: string,
    vote_average: number,
    vote_count: number
    original_title: string,
    release_date?: string,
    title?: string,
    video?: boolean,
    media_type?: string
}
