const randomNumber = function (min, max){
  if (max<=min) {
    document.write ('Вы что-то перепутали.');
  }
  return Math.floor(Math.random()*(max-min));
};

randomNumber(0, 1000);
