"use strict";

const numberOfFilms = +prompt('сколько фильмов вы уже посмотрели');

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},//пустой объект
    actors:{},
    genres:[],//пустой массив
    privat: false
};

const a = prompt('ОДин из последниех просмотренных фильмов', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Одн из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b; //запись свйств в объект
      personalMovieDB.movies[c] = d; //запись свйств в объект

      console.log(personalMovieDB);


