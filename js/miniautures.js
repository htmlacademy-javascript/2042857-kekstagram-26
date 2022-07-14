import  {urlForExport, likesForExport, commentsForExport} from './data.js';

const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector ('#picture')
  .content
  .querySelector('a');

const drawPicture = function (photo) {
  const newPicture = pictureTemplate.cloneNode(true);

  const pictureSrcElement = newPicture.querySelector('src');
  pictureSrcElement.textContent = urlForExport;
  const pictureLikesElement = newPicture.querySelector('.picture__likes');
  pictureLikesElement.textContent = likesForExport;
  const pictureCommentsElement = newPicture.querySelector('.picture__comments');
  pictureCommentsElement.textContent = commentsForExport;

  return newPicture;
} 

export const drawMiniatures = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach(photo => {
    const pictureEl = drawPicture(photo);
    fragment.appendChild(pictureEl);
  });
  pictures.append(fragment);
} 






//Адрес изображения url подставьте как атрибут src изображения.
//Количество лайков likes выведите в блок .picture__likes.
//Количество комментариев comments выведите в блок .picture__comments.
//Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

