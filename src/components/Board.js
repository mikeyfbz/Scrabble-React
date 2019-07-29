import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './Board.css';

function Board() {

    return (
        <DndProvider backend={HTML5Backend}>
            <table id="board_table">
                <tbody>
                    <tr>
                        <td className="triple">TW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple">TW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple">TW</td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"><div className="wrapper"><h2 id="dragable_letter_fixed" draggable="false">B</h2><div className="mini_score">3</div></div></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"><h2 id="dragable_letter_fixed" draggable="false">E</h2></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="double_letter"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="triple">TW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"><h2 id="dragable_letter_fixed" draggable="false">H</h2></td>
                        <td className="tile"><h2 id="dragable_letter_fixed" draggable="false">E</h2></td>
                        <td className="double"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                        <td className="tile"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple">TW</td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple_letter">TL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double">DW</td>
                        <td className="tile"></td>
                    </tr>
                    <tr>
                        <td className="triple">TW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple">TW</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="double_letter">DL</td>
                        <td className="tile"></td>
                        <td className="tile"></td>
                        <td className="triple">TW</td>
                    </tr>
                </tbody>
            </table>
        </DndProvider>
    )
}

export default Board;
