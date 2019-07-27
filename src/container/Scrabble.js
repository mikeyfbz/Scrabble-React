import React, { Component, Fragment } from 'react';
import Board from '../components/Board';
import TileRack from '../components/TileRack';

class Scrabble extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    

    render() {

        return (
            <Fragment>
                <h1>Scrabble-ish</h1>
                <Board />
                <TileRack />
            </Fragment>
        )
    }


}

export default Scrabble;