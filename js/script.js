
let numberOfFilms;

function start() {
    
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {

        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() { 
    for (let i = 0; i < 2; i++) {

        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
        
    

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        alert('Вы классический зритель');
    } else if(personalMovieDB.count >= 30){
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка');
    }
}

// detectPersonalLevel();


function writeYourGenres() {
    for (let i = 1; i < 4; i++) {

        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

        if (genre != null && genre != '' && genre.length < 50){
            personalMovieDB.genres[i - 1] = genre;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('showMyDB not working');
    }
}

showMyDB();






