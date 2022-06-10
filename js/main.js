
//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//Функция возвращающая случайное число
function getRandom(min, max) {
  if (min >= max) {
    throw new Error('Минимальное значение больше или равно максимального');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  //Функция может не гарантировать верный результат, если в переданном диапазоне нет ни одного подходящего числа???

function checkMaxStringLength(string, maxLength) {
  if (maxLength >= string.length) {
    return true
  }
  return false
}
