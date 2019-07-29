import React from 'react';
import './Tile.css';

function Tile({tile, index}) {

    return (
        <div key={index} className="wrapper" >
            <h2 className="tileletter">{tile.letter}</h2>
            <div className="mini_score">{tile.value}</div>
        </div>
    )
}

export default Tile;


