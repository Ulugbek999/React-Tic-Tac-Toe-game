import { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function Player({name, symbol, isActive}){

    const [ isEditing, setIsEditing] = useState(false);
    const [ playerName, setPlayerName] = useState(name);

    function handleEditClick(){
        // if(isEditing){
        //     setIsEditing(false);
        // }else{
        //     setIsEditing(true);
        // }
        // console.log(isEditing);
        // setIsEditing(!isEditing);
        setIsEditing(() => !isEditing);

    }

    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    let buttonName = "Edit";
    
    if(isEditing){
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        buttonName = "Save";
    }



    return(

          <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonName}</button>

          </li>

    );
}