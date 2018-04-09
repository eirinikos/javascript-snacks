const anagrams = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello" and "llohe" are anagrams of each other', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"blue cats" and "blue cat" are anagrams of each other', () => {
  expect(anagrams('blue cats', 'blue cat')).toBeTruthy();
});

test('"top" and "stop" are anagrams of each other', () => {
  expect(anagrams('top', 'stop')).toBeTruthy();
});

test('"top" and "STOP" are anagrams of each other', () => {
  expect(anagrams('top', 'STOP')).toBeTruthy();
});

test('"TOP" and "stop" are anagrams of each other', () => {
  expect(anagrams('TOP', 'stop')).toBeTruthy();
});

test('"rails" and "rail safety" are anagrams of each other', () => {
  expect(anagrams('rails', 'rail safety')).toBeTruthy();
});

test('"fairy tales" and "rail safety" are anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rail safety')).toBeTruthy();
});

test('"fairy tales" and "rails" are anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rails')).toBeTruthy();
});

test('"fairy tales" and "rails facts" are NOT anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rails facts')).toBeFalsy();
});