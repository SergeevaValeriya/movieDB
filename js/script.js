/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Акотт Пилигрим против..."
    ]
};

const advertisement = document.querySelectorAll('.promo__adv img'),
      promoBackground = document.querySelector('.promo__bg'),
      genre = promoBackground.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

advertisement.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

promoBackground.style.cssText = 'background-image: url("../img/bg.jpg")';

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
// let movieList = document.getElementsByClassName('promo__interactive-item');
// movieList[0] = movieDB;