import React from 'react';
import './TileRack.css';

function TileRack ({players, turn}) {



    let currentPlayer = 1;

    if (turn === 1) {
        currentPlayer = 1;
    } else {
        currentPlayer = 2;
    }

    let letters = players[`player${currentPlayer}`].tiles;

    const lettersArray = letters.map((letter, index) => {
        return <div className="wrapper" ><h2 className="tileracktile" key={index}>{letter.letter}</h2><div className="mini_score">{letter.value}</div></div>
    })
    
    return (
        <div className='tilerack'>{lettersArray}</div>
    )

}

export default TileRack;