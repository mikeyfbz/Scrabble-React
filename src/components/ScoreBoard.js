import React, { Component } from 'react';
import './ScoreBoard.css'

function ScoreBoard (props) {
    return (
        <div className="score_board">
            <h2>Scores:</h2>
            <h3 className="score">{props.playersDetails.player1.name} - {props.playersDetails.player1.score}</h3>
            <h3 className="score">{props.playersDetails.player2.name} - {props.playersDetails.player2.score}</h3>
        </div>
    )
}

export default ScoreBoard;
