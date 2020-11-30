'use strict';

const random = (min, max) => {
  const randnum = Math.random();
  const result = min + randnum * (max - min);
  return Math.floor(result);
};

module.exports = { random };
