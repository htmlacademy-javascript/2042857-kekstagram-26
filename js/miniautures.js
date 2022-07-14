const pictures = document.querySelector ('.pictures');
const pictureTemplate = document.querySelector ('#picture')
  .content
  .querySelector('a');

const drawPicture = function (picture) {
  const newPicture = pictureTemplate.cloneNode(true);

  const pictureSrcElement = newPicture.querySelector('.picture__img');
  pictureSrcElement.textContent = picture.urlt;
  const pictureLikesElement = newPicture.querySelector('.picture__likes');
  pictureLikesElement.textContent = picture.likes;
  const pictureCommentsElement = newPicture.querySelector('.picture__comments');
  pictureCommentsElement.textContent = picture.comments.length;

  return newPicture;
};

const drawMiniatures = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach=(photo)=>{
    const pictureEl = drawPicture(photo);
    fragment.appendChild(pictureEl);
  }
  pictures.append(fragment);
};

export {drawMiniatures};
