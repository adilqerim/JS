
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {

    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
    // if (a === '' || a === null || a.length > 50){
    //     i--;
    // }   else if (b === '' || b === null || b.length > 50){
    //     i--;
    // }   else {
    //         personalMovieDB.movies[a] = b;
    // } 

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;
// while(i < 2) {

//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a === '' || a === null || a.length > 50){
//         i = 0;
//     }   else if (b === '' || b === null || b.length > 50){
//         i = 0;
//     }   else {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
// }


// let i = 0;
// do {

//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = prompt('На сколько оцените его?', '');

//     if (a === '' || a === null || a.length > 50){
//         i = 0;
//     }   else if (b === '' || b === null || b.length > 50){
//         i = 0;
//     }   else {
//         personalMovieDB.movies[a] = b;
//         i++;
//     }
// }
// while( i < 2);

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    alert('Вы классический зритель');
} else if(personalMovieDB.count >= 30){
    alert('Вы киноман!');
} else {
    alert('Произошла ошибка');
}


console.log(personalMovieDB);
