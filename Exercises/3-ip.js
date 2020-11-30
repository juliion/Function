'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const arr = ip.split('.')
    .map(e => parseInt(e))
    .reduce((ac, v) => (ac << 8) + v, 0);
  return arr;
};

module.exports = { ipToInt };
