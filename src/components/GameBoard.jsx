




export default function GameBoard(  {onSelectSquare, board}){



    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     //calling the function that swaps the state of the player 'X' or 'O', basically a turn. 
    //     //This function is received from the ancestor component which is App.jsx in this case
    //     onSelectSquare();
    // }

    return (
            <ol id="game-board">
                {board.map((row, rowIndex) => <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                            
                            disabled={playerSymbol !== null}>
                                
                                {playerSymbol}

                            </button></li>
                        )}
                    </ol>
                </li>)}
            </ol>
     
    );
}