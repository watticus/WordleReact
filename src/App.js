import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

function App() {
  const [word, setWord] = useState(null);

  useEffect(() => {
    const getWord = async () => {
      const response = await fetch('https://localhost:7157/wordle?test=false',)
      if (response.status === 200) 
      {
        const returnedWord = await response.text();
        setWord(returnedWord);
      }
      else
      {
        throw new Error('Unable to retrieve word')
      }
    }
      getWord();
  }, [setWord]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      {word && <Wordle word={word} />}
    </div>
  );
}

export default App