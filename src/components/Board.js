import React, { Component } from 'react';
import './Board.css';

function Board () {

    return (
        <table id="board_table">
            <tr> 
                <td class="triple">TW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple">TW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple">TW</td>
            </tr>
            <tr> 
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"><h2 id="dragable_letter_fixed" draggable="false">B</h2></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"><h2 id="dragable_letter_fixed" draggable="false">E</h2></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="double_letter"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr> 
                <td class="triple">TW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"><h2 id="dragable_letter_fixed" draggable="false">H</h2></td>
                <td class="tile"><h2 id="dragable_letter_fixed" draggable="false">E</h2></td>
                <td class="double"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                <td class="tile"><h2 id="dragable_letter_fixed" draggable="false">L</h2></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple">TW</td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
            </tr>
            <tr>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
            </tr>
            <tr> 
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple_letter">TL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double">DW</td>
                <td class="tile"></td>
            </tr>
            <tr> 
                <td class="triple">TW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple">TW</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="double_letter">DL</td>
                <td class="tile"></td>
                <td class="tile"></td>
                <td class="triple">TW</td>
            </tr>
        </table>
    )
}

export default Board;
