const alphabetToBrille = {
  a: "O.....", // ⠁
  b: "O.O...", // ⠃
  c: "OO....", // ⠉
  d: "OO.O..", // ⠙
  e: "O..O..", // ⠑
  f: "OOO...", // ⠋
  g: "OOOO..", // ⠛
  h: "O.OO..", // ⠓
  i: ".OO...", // ⠊
  j: ".OOO..", // ⠚
  k: "O...O.", // ⠅
  l: "O.O.O.", // ⠇
  m: "OO..O.", // ⠍
  n: "OO.OO.", // ⠝
  o: "O..OO.", // ⠕
  p: "OOO.O.", // ⠏
  q: "OOOOO.", // ⠟
  r: "O.OOO.", // ⠗
  s: ".OO.O.", // ⠎
  t: ".OOOO.", // ⠞
  u: "O...OO", // ⠥
  v: "O.O.OO", // ⠧
  w: ".OOO.O", // ⠺
  x: "OO..OO", // ⠭
  y: "OO.OOO", // ⠽
  z: "O..OOO", // ⠵
  " ": "......", // ⠀ (space)
  capital: ".....O", // ⠠ (Capital indicator)
  number: ".O.OOO", // ⠼ (Number indicator)
};

const numberToBrille = {
  1: "O.....", // ⠁
  2: "O.O...", // ⠃
  3: "OO....", // ⠉
  4: "OO.O..", // ⠙
  5: "O..O..", // ⠑
  6: "OOO...", // ⠋
  7: "OOOO..", // ⠛
  8: "O.OO..", // ⠓
  9: ".OO...", // ⠊
  0: ".OOO..", // ⠚
  " ": "......", // ⠀ (space)
};

const brilleToAlphabet = {};
const brilleToNumber = {};

// creating brilletoNumber and Albhabet
for (let key in alphabetToBrille) {
  brilleToAlphabet[alphabetToBrille[key]] = key;
}
for (let key in numberToBrille) {
  brilleToNumber[numberToBrille[key]] = key;
}

// translator from alphabet to brille

function AlpbahetToBrille(text) {
  let brilleForm = "";
  let numberMode = false;
  for (i in text) {
    char = text[i];

    if (char === " ") {
      brilleForm += alphabetToBrille[" "];
      numberMode = false;
    } else if (numberMode) {
      brilleForm += numberToBrille[char];
    } else if (!isNaN(char)) {
      numberMode = true;
      brilleForm += alphabetToBrille["number"] + numberToBrille[char];
    } else if (char == char.toUpperCase()) {
      brilleForm +=
        alphabetToBrille["capital"] + "" + alphabetToBrille[char.toLowerCase()];
    } else {
      brilleForm += alphabetToBrille[char];
    }
  }
  return brilleForm;
}

function Translator(text) {}

console.log(AlpbahetToBrille("Abc 123"));
console.log(".....OO.....O.O...OO...........O.OOOO.....O.O...OO....");
