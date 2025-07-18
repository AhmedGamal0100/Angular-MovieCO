import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: definePreset(Lara, {
          semantic: {
            colorScheme: {
              light: {
                surface: {
                  50: '{zinc.50}',
                  100: '{zinc.100}',
                  200: '{zinc.200}',
                  300: '{zinc.300}',

                  color: '{slate.100}',
                  inverseColor: '#ffffff',
                  hoverColor: '{slate.100}',
                  activeColor: '{slate.950}',
                },
                primary: {
                  50: '{slate.50}',
                  100: '{slate.100}',
                  200: '{slate.200}',
                  300: '{slate.300}',
                  400: '{zinc.400}',
                  500: '{zinc.500}',
                  600: '{zinc.600}',
                  700: '{zinc.700}',
                  800: '{zinc.800}',
                  900: '{zinc.900}',
                  950: '{zinc.950}',
                  color: '{slate.700}',
                  inverseColor: '{slate.900}',
                  hoverColor: '{slate.900}',
                  activeColor: '{slate.100}',
                },
              }
            },
          },
        }), options: {
          darkModeSelector: '.my-add-dark'
        },
        // preset: definePreset(Aura, {
        //   semantic: {
        //     colorScheme: {
        //       light: {
        //         surface: {
        //           50: '{zinc.50}',
        //           100: '{zinc.100}',
        //           200: '{zinc.200}',
        //           300: '{zinc.300}',

        //           color: '{slate.100}',
        //           inverseColor: '#ffffff',
        //           hoverColor: '{slate.100}',
        //           activeColor: '{slate.950}',
        //         },
        //         primary: {
        //           50: '{slate.50}',
        //           100: '{slate.100}',
        //           200: '{slate.200}',
        //           300: '{slate.300}',
        //           400: '{zinc.400}',
        //           500: '{zinc.500}',
        //           600: '{zinc.600}',
        //           700: '{zinc.700}',
        //           800: '{zinc.800}',
        //           900: '{zinc.900}',
        //           950: '{zinc.950}',
        //           color: '{slate.700}',
        //           inverseColor: '{slate.900}',
        //           hoverColor: '{slate.900}',
        //           activeColor: '{slate.100}',
        //         },
        //         options: {
        //           darkModeSelector: '.my-add-dark'
        //         },
        //       }
        //     },
        //   }
        // })
      }
    })
  ]
};
