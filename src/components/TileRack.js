import React from 'react';
import './TileRack.css';

function TileRack () {

    const letters = ['a', 'e', 'w', 'y', 'h', 'p', 'i'];

    const lettersArray = letters.map((letter, index) => {
        return <h2 className="tileracktile" key={index}>{letter}</h2>
    })
    
    return (
        
        <div className='tilerack'>{lettersArray}</div>
    )

}

export default TileRack;
