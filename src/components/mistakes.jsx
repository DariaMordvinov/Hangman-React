import React from 'react';

const Mistakes = ({ errorLetters }) => {
    const errors = Array.from(errorLetters);
    return (
        <div className='mistakes'>
            <h3>Mistakes:</h3>
            {errors.map(l => <h5 key={l} className='d-inline'> {l.toUpperCase()} </h5>)}
        </div>
    );
}

export default Mistakes;