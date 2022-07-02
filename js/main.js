const randomNumber = function (min, max){
  if (max<=min) {
    document.write ('Сначала введите меньшее число, а потом - большее!');
    return;
  } else {
  return Math.floor(Math.random()*(max-min));
  }
};

randomNumber(0, 1000);
