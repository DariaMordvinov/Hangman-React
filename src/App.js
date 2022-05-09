import React, { useReducer } from 'react';
import './App.css';
import HangmanPicture from './components/hangmanPicture';
import LetterButton from './components/letterButton';
import Word from './components/word';
import Header from './components/header';
import Mistakes from './components/mistakes';


// This array is used to make letter buttons
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Types of actions
export const actions = {
  letterChoice: 'letterChoice',
  play: 'play'
}

// Returns clean state (with a new word, empty set of errorLetters, etc.)
function getCleanState() {
  const randomWords = require('random-words');
  const word = randomWords();
  const lettersDict = {};
  for (let l of word) {
    if (!(l in lettersDict)) {
      lettersDict[l] = false;
    }
  }

  return {
    word,
    letters: lettersDict,
    errorLetters: new Set(),
    result: { classes: 'd-none', victory: false }
  }

}

function reducer(state, { type, payload }) {
  switch (type) {
    // If user clicked a letter button...
    case actions.letterChoice:

      // If user chose the correct letter
      if (payload.letter in state.letters) {
        let letters = state.letters;
        letters[payload.letter] = true;

        // If user guessed all the letters, app returns victory result
        if (!Object.values(letters).includes(false)) {
          return {
            ...state,
            result: { classes: 'd-inline', victory: true },
            letters
          }
        }

        // If there are more letters to be guessed, the app simply returns state with updated guessed letters
        return {
          ...state,
          letters
        }

      }

      // If user guessed wrong
      else {
        let errorLetters = state.errorLetters;
        errorLetters.add(payload.letter)

        // If 6 mistakes were made
        if (errorLetters.size == 6) return {
          ...state,
          errorLetters,
          result: { classes: 'd-inline', victory: false }
        }

        return {
          ...state,
          errorLetters
        }
      }

    // If user clicked 'play again' button
    case actions.play:
      return getCleanState();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, getCleanState());

  return (
    <div className="container">
      <Header />
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-5 hangmanPicture'>
          <HangmanPicture
            errorLetters={state.errorLetters}
          />
        </div>
        <div className='col-1'></div>
        <div className=' col-5 mistakes'>
          <Mistakes
            errorLetters={state.errorLetters}
          />
        </div>

      </div>
      <div className='row word-col'>
        <Word
          word={state.word}
          letters={state.letters}
          result={state.result}
        />
      </div>
      <div className='row keybord'>
        {alphabet.map(
          l =>
            <LetterButton
              key={l}
              dispatch={dispatch}
              letterName={l}
            />)}
      </div>
      <div className='row play'>
        <button
          className={
            (state.result.classes === 'd-inline') ? "btn btn-lg btn-primary" : "d-none"
          }
          onClick={() => dispatch({ type: actions.play })}
        >
          Play again
        </button>
      </div>
    </div>
  );
}

export default App;
