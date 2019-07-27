import React from 'react';
import './PlayerOptions.css'

function PlayerOptions({options, turn}) {

    const allOptions = options.map((option, index) => {
        return <h1 key={index} onClick={() => handleClick(index)} className="individual-option">{option}</h1>
    })

    function handleClick(event) {
        if (event === 0) {
            turn();
            handlePlay();
        } else if (event === 1) {
            turn();
        } else {
            turn();
            handleSwap();
        }
    }

    function handlePlay() {
        console.log("Play");
    }

    function handleSwap() {
        console.log("Swap");
    }

    return (
        <div className="player-options">
            {allOptions}
        </div>
    )
}

export default PlayerOptions;
