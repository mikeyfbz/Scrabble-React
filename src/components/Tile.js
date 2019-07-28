import React from 'react';

function Tile(tile, index) {

    return (
        <div className="tile">
            <div className="wrapper" >
                <h2 key={index} id="tileracktile">{tile.letter}</h2>
                <div className="mini_score">{tile.value}</div>
            </div>
        </div>
    )
}

export default Tile;


