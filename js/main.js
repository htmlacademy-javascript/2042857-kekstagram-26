const randomNumber = function (min, max){
  if (max<=min) {
    return 'Сначала введите меньшее число, а потом - большее!';
  } else {
    return Math.floor(Math.random()*(max-min));
  }
};

randomNumber(0, 1000);

let commentText = document.querySelector('.text__description');

let checkLength = function (){
  if (commentText.value<=140) {
    return true;
  } else {
    return false;
  }
};

checkLength ();
