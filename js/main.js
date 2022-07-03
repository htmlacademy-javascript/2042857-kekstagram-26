const randomNumber = function (min, max){
  if (max<=min) {
    return 'Сначала введите меньшее число, а потом - большее!';
  } else {
    return Math.floor(Math.random()*(max-min));
  }
};

randomNumber(0, 1000);

function checkLength(testString, maxLength) {
  return testString.length <= maxLength
};

checkLength ('Проверочный комментарий', 140);
