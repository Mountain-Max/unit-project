// Скрипт для поиска
const searchForm = document.querySelector('.search');
const searchButton = document.querySelector('.search__button');

searchForm.addEventListener('click', function (e) {
  if (!searchForm.classList.contains('search--visible')) {
    e.preventDefault();
    searchForm.classList.toggle('search--visible');
  }
});