// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieListApi: 'https://api.themoviedb.org/3/discover/movie?',
  movieInfoApi: 'https://api.themoviedb.org/3/movie/',
  movieSearchApi: 'https://api.themoviedb.org/3/search/movie?',
  apiKey: '6ed12e064b90ae1290fa326ce9e790ff',
  imgURL: 'https://image.tmdb.org/t/p/w500'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
