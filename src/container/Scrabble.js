import React, { Component, Fragment } from 'react';
import Board from '../components/Board';
import TileRack from '../components/TileRack';
import ScoreBoard from '../components/ScoreBoard';

class Scrabble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: {
                player1: {
                    name: "ru",
                    score: 500
                },
                player2: {
                    name: "Mikey",
                    score: 1
                }
            }
        }
    }


    render() {

        return (
            <Fragment>
                <h1>Scrabble-ish</h1>
                <ScoreBoard playersDetails={this.state.players} />
                <Board />
                <TileRack />
            </Fragment>
        )
    }

}

export default Scrabble;