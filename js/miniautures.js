const pictures = document.querySelector ('.pictures');
const templateFragment = document.querySelector ('#picture').content;
const template = templateFragment.querySelector('a');
const fragment = document.createDocumentFragment();

for (let i = 0; i < /*???*/; i++) {
    const newPhoto = template.cloneNode(true); // Клонируем элемент со всеми "внутренностями"
    newPhoto.img.src = import { getPhotoUrl } from "./data";
    newPhoto.pictures__likes = import { getNewPhoto.likes } from "./data";
    newPhoto.pictures__comments = import MAX_COMMENTS_COUNT;
    fragment.appendChild(newPhoto);
}

pictures.append(fragment);

//Адрес изображения url подставьте как атрибут src изображения.
//Количество лайков likes выведите в блок .picture__likes.
//Количество комментариев comments выведите в блок .picture__comments.
//Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

/*
<template id="picture">
    <a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
      </p>
    </a>
  </template>
*/