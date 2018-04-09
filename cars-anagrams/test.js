const anagrams = require('./index.js');

test('anagrams function exists', () => {
  expect(typeof anagrams).toEqual('function');
});

test('"hello" and "llohe" are exact anagrams of each other', () => {
  expect(anagrams('hello', 'llohe')).toBeTruthy();
});

test('"blue cats" and "blue cat" are partial anagrams of each other', () => {
  expect(anagrams('blue cats', 'blue cat')).toBeTruthy();
});

test('"top" and "stop" are partial anagrams of each other', () => {
  expect(anagrams('top', 'stop')).toBeTruthy();
});

test('"top" and "STOP" are partial anagrams of each other', () => {
  expect(anagrams('top', 'STOP')).toBeTruthy();
});

test('"TOP" and "stop" are partial anagrams of each other', () => {
  expect(anagrams('TOP', 'stop')).toBeTruthy();
});

test('"thicc" and "thickly" are NOT partial anagrams of each other', () => {
  expect(anagrams('thicc', 'thickly')).toBeFalsy();
});

test('"rain" and "rainy day" are partial anagrams of each other', () => {
  expect(anagrams('rain', 'rainy day')).toBeTruthy();
});

test('"lollipop" and "lallipop" are NOT exact anagrams of each other', () => {
  expect(anagrams('lollipop', 'lallipop')).toBeFalsy();
});

test('"rails" and "rail safety" are partial anagrams of each other', () => {
  expect(anagrams('rails', 'rail safety')).toBeTruthy();
});

test('"fairy tales" and "rail safety" are partial anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rail safety')).toBeTruthy();
});

test('"fairy tales" and "rails" are partial anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rails')).toBeTruthy();
});

test('"fairy tales" and "rails facts" are NOT exact anagrams of each other', () => {
  expect(anagrams('fairy tales', 'rails facts')).toBeFalsy();
});