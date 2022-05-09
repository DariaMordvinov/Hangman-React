import React from 'react';

const HangmanPicture = ({ errorLetters }) => {
    const color = "rgba(13, 110, 253)";

    return (

        <svg height="250" width="200">
            <line x1="60" y1="20" x2="140" y2="20" stroke={color} strokeWidth="4" />
            <line x1="140" y1="20" x2="140" y2="50" stroke={color} strokeWidth="4" />
            <line x1="60" y1="20" x2="60" y2="230" stroke={color} strokeWidth="4" />
            <line x1="20" y1="230" x2="100" y2="230" stroke={color} strokeWidth="4" />

            <circle className={errorLetters.size > 0 ? 'd-block' : 'd-none'} cx="140" cy="70" r="20" fill="none" stroke={color} strokeWidth="4" />

            <line className={errorLetters.size > 1 ? 'd-block' : 'd-none'} x1="140" y1="90" x2="140" y2="150" stroke={color} strokeWidth="4" />

            <line className={errorLetters.size > 2 ? 'd-block' : 'd-none'} x1="140" y1="120" x2="120" y2="100" stroke={color} strokeWidth="4" />
            <line className={errorLetters.size > 3 ? 'd-block' : 'd-none'} x1="140" y1="120" x2="160" y2="100" stroke={color} strokeWidth="4" />

            <line className={errorLetters.size > 4 ? 'd-block' : 'd-none'} x1="140" y1="150" x2="120" y2="180" stroke={color} strokeWidth="4" />
            <line className={errorLetters.size > 5 ? 'd-block' : 'd-none'} x1="140" y1="150" x2="160" y2="180" stroke={color} strokeWidth="4" />
        </svg>

    );
}

export default HangmanPicture;