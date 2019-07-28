import React from 'react';


function Tile({ tiles }) {

    const allTiles = tiles.map((tile, index) => {
        return (
            <div className="tile"><div className="wrapper" ><h2 key={index} id="dragable_letter_fixed">{tile.letter}</h2><div className="mini_score">{tile.value}</div></div></div>
        )
    })

    return (
        <div className="tileHolder">
            {allTiles[0]}
        </div>
    )
}

export default Tile;


