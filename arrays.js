// funkcja znajdująca najdłuższy wyraz z dowolnego stringa

function findLongestWord(string) {
  let longestWord = "";
  let arrayOfWords = string.split(" ");
  console.log(arrayOfWords);

  for (const word of arrayOfWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  console.log(longestWord);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
