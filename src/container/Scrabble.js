import React, { Component, Fragment } from 'react';
import Board from '../components/Board';
import TileRack from '../components/TileRack';
import ScoreBoard from '../components/ScoreBoard';
import PlayerOptions from '../components/PlayerOptions';
import './Scrabble.css'

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
            },
<<<<<<< HEAD
=======
            options: ["Play", "Pass", "Swap"], 
            turn: 1, 
>>>>>>> develop
            tiles: []
        }
    }

<<<<<<< HEAD
    componentDidMount() {
    fetch('http://localhost:3001/api/scrabble')
        .then(res => res.json())
        .then((data) => this.setState({ tiles: data }))
=======
    handleChangeTurn = () => {
        if(this.state.turn === 1) {
            this.setState({ turn: 2 })
        } else {
            this.setState({ turn: 1 })
        }
>>>>>>> develop
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/scrabble')
            .then(res => res.json())
            .then(data => this.setState({ tiles: data }))
    }

    render() {
        return (
            <Fragment>
                <h1>Scrabble-ish</h1>
                <ScoreBoard playersDetails={this.state.players} />
                <Board />
                <div className="player-stuff">
                <TileRack />
                <PlayerOptions options={this.state.options} turn={this.handleChangeTurn} />
                </div>
            </Fragment>
        )
    }

}

export default Scrabble;