import React, {useState, useEffect} from "react";
import Square from "./square";

const Board = () => {
    return (
        <div className="board-container">
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}
export default Board;