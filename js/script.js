const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const   lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
        rateLastWatchedMovie = prompt('На сколько оцените его?', ''),
        lastWatchedMovie2 = prompt('Один из последних просмотренных фильмов?', ''),
        rateLastWatchedMovie2 = prompt('На сколько оцените его?', '');

// personalMovieDB.movies = {
//     lastWatchedMovie: rateLastWatchedMovie,
//     lastWatchedMovie2: rateLastWatchedMovie2
// };

// personalMovieDB.movies.lastWatchedMovie = rateLastWatchedMovie;
// personalMovieDB.movies.lastWatchedMovie2 = rateLastWatchedMovie2;

personalMovieDB.movies[lastWatchedMovie] = rateLastWatchedMovie;
personalMovieDB.movies[lastWatchedMovie2] = rateLastWatchedMovie2;

console.log(personalMovieDB);
