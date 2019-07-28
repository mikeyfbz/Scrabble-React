import React, { Component, Fragment } from 'react';
import Board from '../components/Board';
import TileRack from '../components/TileRack';
import ScoreBoard from '../components/ScoreBoard';
import PlayerOptions from '../components/PlayerOptions';
import './Scrabble.css'
import Tile from '../components/Tile';

class Scrabble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: {
                player1: {
                    name: "ru",
                    score: 500,
                    tiles: []
                },
                player2: {
                    name: "Mikey",
                    score: 1,
                    tiles: []
                }
            },
            options: ["Play", "Pass", "Swap"],
            turn: 1,
            tiles: [],
        }
    }

    handleChangeTurn = () => {
        if (this.state.turn === 1) {
            this.setState({ turn: 2 })
        } else {
            this.setState({ turn: 1 })
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/scrabble')
            .then(res => res.json())
            .then(data => this.setState({ tiles: data },
                () => this.randomise()))
    }

    randomise = () => {
        const unsortedTiles = this.state.tiles;
        let counter = unsortedTiles.length, temp, index;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = unsortedTiles[counter];
            unsortedTiles[counter] = unsortedTiles[index];
            unsortedTiles[index] = temp;
        }
        this.setState((prevState) => {
            return ({ tiles: unsortedTiles})
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Scrabble-ish</h1>
                <ScoreBoard playersDetails={this.state.players} />
                <Board />
                <div className="player-stuff">
                    <TileRack players={this.state.players} turn={this.state.turn} />
                    <PlayerOptions options={this.state.options} turn={this.handleChangeTurn} />
                </div>
                <Tile tiles={this.state.tiles} />
            </Fragment>
        )
    }

}

export default Scrabble;