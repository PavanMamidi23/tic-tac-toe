import { useState } from "react";
export default function Player({initialName , symbol ,isActive , onChangeName}){
    const [playerName,setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit(){
        setIsEditing((isEditing) => !isEditing);

        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleName(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className ="player-name">{playerName}</span>;
    if(isEditing){
        editablePlayerName = <input type="text" value ={playerName} onChange={handleName}required />;
    }
    return (
        <li className = {isActive ? 'active' :undefined}>
             <span className ="player">
                {editablePlayerName }
                <span className = "player-symbol">{symbol}</span>
             </span>
             <button onClick={handleEdit}>{isEditing ? 'Save' :'Edit'}</button>
        </li>
    );
}