import React from 'react';
import './TileRack.css';
import Tile from './Tile';

function TileRack({ players, turn }) {

    let currentPlayer = 1;

    if (turn === 1) {
        currentPlayer = 1;
    } else {
        currentPlayer = 2;
    }

    let letters = players[`player${currentPlayer}`].tiles;

    const lettersArray = letters.map((letter, index) => {
        return <Tile key={index} tile={letter} index={index} />
    })

    return (
        <div className='tilerack'>{lettersArray}</div>
    )

}

export default TileRack;