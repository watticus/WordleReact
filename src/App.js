import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";
import queryString from 'query-string';

function App() {
  const [word, setWord] = useState(null);
  const queryParams = queryString.parse(window.location.search);
  const testWord = queryParams.test;

  useEffect(() => {
    if (testWord) {
      setWord(testWord);
    } else {
      const wordList = {words: [
        { id: 0, word: "ninja" },
        { id: 1, word: "shine" },
        { id: 2, word: "adult" },
        { id: 3, word: "block" },
        { id: 4, word: "chain" },
        { id: 5, word: "dance" },
        { id: 6, word: "earth" },
        { id: 7, word: "faith" },
        { id: 8, word: "guide" },
        { id: 9, word: "horse" },
        { id: 10, word: "image" },
        { id: 11, word: "judge" },
        { id: 12, word: "knife" },
        { id: 13, word: "light" },
        { id: 14, word: "money" },
        { id: 15, word: "noise" },
        { id: 16, word: "order" },
        { id: 17, word: "phase" },
        { id: 18, word: "ralph" },
        { id: 19, word: "shirt" },
        { id: 20, word: "train" },
        { id: 21, word: "uncle" },
        { id: 22, word: "video" },
        { id: 23, word: "water" },
        { id: 24, word: "youth" },
        { id: 25, word: "zebra" },
        { id: 26, word: "quiet" },
        { id: 25, word: "xerus" }
      ]};
      const randomWord = wordList.words[Math.floor(Math.random() * wordList.words.length)]
      setWord(randomWord.word)
    };
  }, [setWord, testWord]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {word && <Wordle word={word} />}
    </div>
  );
}

export default App