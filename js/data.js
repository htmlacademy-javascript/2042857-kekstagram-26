import { getRandomPositiveInteger } from './util';
import { getRandomArrayElement } from './util';

const AVATAR_IMG = [
  'img/avatar-1','img/avatar-2','img/avatar-3','img/avatar-4','img/avatar-5','img/avatar-6'
];
const COMMENTER_NAMES = [
  'Имя1','Имя2','Имя3','Имя4','Имя5','Имя6','Имя7','Имя8','Имя9','Имя10'
];
const COMMENT_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const photoUrls = [];
const photoDescriptions = [];
const idsForComments = [];
const MAX_COMMENTS_COUNT = 10;
const MAX_DESCRIPTION_COUNT = 25;

for (let i=1; i<=MAX_DESCRIPTION_COUNT; i++){
  photoUrls.push(`photos/${i}.jpg`);
}

const getPhotoUrl = function () {
  return photoUrls.shift();
};

for (let i=1; i<=MAX_DESCRIPTION_COUNT; i++){
  photoDescriptions.push(`Описание${i}`);
}
const getPhotoDescription = function () {
  return photoDescriptions.shift();
};

for (let i=1; i<=MAX_COMMENTS_COUNT*MAX_DESCRIPTION_COUNT; i++){
  idsForComments.push(i);
}
const getIdComment = function () {
  return idsForComments.shift();
};

const getNewComment = () => ({
  id: (getIdComment()),
  avatar: getRandomArrayElement(AVATAR_IMG),
  message: getRandomArrayElement(COMMENT_MESSAGES),
  name: getRandomArrayElement(COMMENTER_NAMES)
});

const getComments = function (count) {
  const commentsArray = [];
  for (let i=1; i<=count; i++){
    commentsArray.push(getNewComment());
  }
  return commentsArray;
};

const getNewPhoto = (id) => ({
  id,
  url:(getPhotoUrl()),
  likes: getRandomPositiveInteger(15, 200),
  description: (getPhotoDescription()),
  comments: getComments(getRandomPositiveInteger(2, MAX_COMMENTS_COUNT))
});

const createPhoto = (count) => {
  const photoID = [];
  for (let i=1; i<=count; i++){
    photoID.push(getNewPhoto(i));
  }
  return photoID;
};

export {createPhoto}; 
export const urlForExport = getNewPhoto.url;
export const likesForExport = getNewPhoto.likes;
export const commentsForExport = getNewPhoto.comments;
