

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
    
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
    
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() { 
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            alert('Вы классический зритель');
        } else if(personalMovieDB.count >= 30){
            alert('Вы киноман!');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if(hidden !== false) {
            console.log(personalMovieDB);
        } else {
            console.log('showMyDB is hidden');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {

            // const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            // if (genre != null && genre != ''){
            //     personalMovieDB.genres[i - 1] = genre;
            // } else {
            //     console.log('Не правильно ввели данные');
            //     i--;
            // }  
            let genres = prompt('Введите любимые жанры через запятую');
            
            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или вовсе не ввели');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }


        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр под #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};










