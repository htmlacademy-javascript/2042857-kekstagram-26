const getRandomPositiveInteger = (a, b) => {
    const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
    const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};
const getRandomArrayElement = (elements) => {
    return elements[getRandomPositiveInteger(0, elements.length - 1)];
};
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

let photo_urls = [];
let photo_descriptions = [];
let ids_for_comments = [];
let commentsArray = [];
const MAX_COMMENTS_COUNT = 10;
const MAX_DESCRIPTION_COUNT = 25;

for (let i=1; i<=25; i++){
    photo_urls.push('photos/'+[i]+'.jpg');
};
let photoUrl = function () {
    let a;
    for (let i=1; i<=25; i++) {
        return a = photo_urls.shift();
    }
};
for (let i=1; i<=25; i++){
    photo_descriptions.push('Описание'+[i]);
};
let photoDescription = function () {
    let a;
    for (let i=1; i<=25; i++) {
        return a = photo_descriptions.shift();
    }
};
for (let i=1; i<=1000; i++){
    ids_for_comments.push([i]);
};
let idComment = function () {
    let a;
    for (let i=1; i<1000; i++) {
        return a = ids_for_comments.shift();
    }
};

let newComment = () => ({
    id: (idComment()),
    avatar: getRandomArrayElement(AVATAR_IMG),
    message: getRandomArrayElement(COMMENT_MESSAGES),
    name: getRandomArrayElement(COMMENTER_NAMES)
});
for (let i=1; i<=MAX_COMMENTS_COUNT; i++){
    commentsArray.push(newComment());
};

let newPhoto = (id) => ({
    id,
    url:(photoUrl()),
    likes: getRandomPositiveInteger(15, 200),
    description: (photoDescription()),
    comment: commentsArray
});

let createDescriptions = (count) => {
    const photoID = [];
    for (let i=1; i<=count; i++){
        photoID.push(newPhoto(i));
    }
    return photoID;
};

const description = createDescriptions(MAX_DESCRIPTION_COUNT);