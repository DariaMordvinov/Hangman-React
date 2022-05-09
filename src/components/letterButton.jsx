import React from 'react';
import { actions } from '../App';

const LetterButton = ({ dispatch, letterName }) => {
    return (
        <button
            onClick={() => dispatch({ type: actions.letterChoice, payload: { letter: letterName.toLowerCase() } })}
            className="btn btn-lg btn-outline-primary m-2">
            {letterName}
        </button>
    );
}

export default LetterButton;