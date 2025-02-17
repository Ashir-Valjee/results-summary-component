var argumentsLength = function (...args) {
  console.log(args.length);
};

argumentsLength(1, 2);
var lengthOfLastWord = function (s) {};

var lengthOfLastWord = function (s) {
  const array1 = s.trim();
  const array2 = array1.split(" ");
  //   console.log(array2);
  const lastWord = array2[array2.length - 1];
  return lastWord.length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));

const str = "   fly me   to   the moon  ";
result = str.split(" ").join("");
console.log(result);

function replaceLetters(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyx";
  let resultArray = [];
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    let indivLetterIndex = alphabet.indexOf(letter);
    resultArray.push(indivLetterIndex + 1);
  }
  let stringResult = resultArray.join(" ");
  return stringResult;
}

console.log(replaceLetters("code war"));
