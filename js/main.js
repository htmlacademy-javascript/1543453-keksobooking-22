'use strict';

// Возвращает случайное целое число из переданного диапазона включительно
/* eslint-disable-next-line */
const getRandomInt = (min, max) => {
  // если min, max не число, взвращаем NaN
  if (!(typeof min === 'number') || !(typeof max === 'number')) {
    return NaN;
  }
  // если введены некорректные значения, возвращаем undefined
  if (min < 0 || max < 0 || (min === max) || min > max) {
    return undefined;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Возвращает случайное число с плавающей точкой из переданного диапазона включительно с указанным кол-вом знаков после запятой
/* eslint-disable-next-line */
const getRandomFloat = (min, max, level = 0) => {
  // если min, max, level не число, взвращаем NaN
  if (!(typeof min === 'number') || !(typeof max === 'number') || !(typeof level === 'number')) {
    return NaN;
  }
  // если введены некорректные значения или level не целое число, возвращаем undefined
  if (min < 0 || max < 0 || (min === max) || min > max || level < 0 || !(level % 1 === 0)) {
    return undefined;
  }
  min = Math.ceil(min * Math.pow(10, level));
  max = Math.floor(max * Math.pow(10, level));
  return +((Math.floor(Math.random() * (max - min + 1)) + min) * Math.pow(10, -level)).toFixed(level);
}