import React from 'react';

const Word = ({ word, letters, result }) => {
    const array = []
    for (let item of word) {
        let value = letters[item] ? ` ${item} ` : ` ___ `;
        array.push({ value });
    }

    return (
        <div className='word'>
            {result.victory ?
                <div className={result.classes}>&#x1F389;&#x1F389;&#x1F389;</div> :
                <div className={result.classes}>&#x1F480;&#x1F480;&#x1F480;</div>
            }
            {array.map(l => l.value.toUpperCase())}
            {result.victory ?
                <div className={result.classes}>&#x1F389;&#x1F389;&#x1F389;</div> :
                <div className={result.classes}>&#x1F480;&#x1F480;&#x1F480;</div>
            }
            <div className={result.classes} style={{ color: result.victory ? '#E8C842' : 'black' }}>
                {result.victory ? <h2>Congratulations! You won!</h2> : <h3>Oh no, you lost!<br></br> The word is "{word}"</h3>}
            </div>
        </div >

    );
}

export default Word;