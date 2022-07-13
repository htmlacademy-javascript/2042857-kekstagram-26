const pictures = document.querySelector ('.pictures');
const templateFragment = document.querySelector ('#picture').content;
const template = templateFragment.querySelector('a');

//Адрес изображения url подставьте как атрибут src изображения.
//Количество лайков likes выведите в блок .picture__likes.
//Количество комментариев comments выведите в блок .picture__comments.
//Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
const drawPicture = function (photo) {
  const newPhoto = template.cloneNode(true);
  
  newPhoto.img.src = photo.url ; 
  newPhoto.pictures__likes = photo.likes;
  newPhoto.pictures__comments = photo.comment;
  
  return newPhoto;
}

export const drawMiniatures = function (photos) {
  const fragment = document.createDocumentFragment();
  photos.forEach(photo => {
  const pictureEl = drawPicture(createPhoto);
  fragment.appendChild(pictureEl );
})
pictures.append(fragment);
}
