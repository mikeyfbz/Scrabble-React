import React from 'react';
import './App.css';
import Scrabble from './container/Scrabble';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function App() {
  return (
    <Scrabble />
  );
}

export default DragDropContext(HTML5Backend)(App);
