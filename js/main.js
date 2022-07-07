const PHOTO_URLS = [
    'photos/1.jpg','photos/2.jpg','photos/3.jpg','photos/4.jpg','photos/5.jpg','photos/6.jpg','photos/7.jpg','photos/8.jpg','photos/9.jpg','photos/10.jpg','photos/11.jpg','photos/12.jpg','photos/13.jpg','photos/14.jpg','photos/15.jpg','photos/16.jpg','photos/17.jpg','photos/18.jpg','photos/19.jpg','photos/20.jpg','photos/21.jpg','photos/22.jpg','photos/23.jpg','photos/24.jpg','photos/25.jpg'
];
const PHOTO_DESCRIPTIONS = [
    'Описание 1','Описание 2','Описание 3','Описание 4','Описание 5','Описание 6','Описание 7','Описание 8','Описание 9','Описание 10','Описание 11','Описание 12','Описание 13','Описание 14','Описание 15','Описание 16','Описание 17','Описание 18','Описание 19','Описание 20','Описание 21','Описание 22','Описание 23','Описание 24','Описание 25'
];
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

const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};
const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const COMMENTS = (id) => ({
    id,
    avatar: getRandomArrayElement(AVATAR_IMG),
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(COMMENTER_NAMES)
});

const newPhotoDescription = (id) => ({
    id,
    url:getRandomArrayElement(PHOTO_URLS),
    likes: getRandomPositiveInteger(15, 200),
    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
    comment: (COMMENTS())
});

const createDescriptions = (count) => {
    const photoID = [];
    for (let i=1; i<=count; i++){
        photoID.push(newPhotoDescription(i));
    }
    return photoID;
};

const MAX_DESCRIPTION_COUNT = 25;
const descriptions = createDescriptions(MAX_DESCRIPTION_COUNT);
console.log(descriptions);
