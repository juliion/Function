'use strict';

const generateKey = (length, possible) => {
  let key = '';
  while (key.length < length) {
    const index = Math.floor(Math.random() * (possible.length - 1));
    key += possible.slice(index, index + 1);
  }
  return key;
};

module.exports = { generateKey };
