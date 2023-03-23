import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';


function CodingPromptsDifficulty() {
    const [difficulty, setDifficulty] = useState("")


    return (
        <div className="CodingPromptsDifficulty">

            <h2> Difficulty : {difficulty} </h2>
            <Button variant = "outlined" onClick={() => setDifficulty("Beginner")}> Beginner </Button>
            <Button variant = "outlined" onClick={() => setDifficulty("Intermediate")}> Intermediate</Button>
            <Button variant = "outlined" onClick={() => setDifficulty("Hard")}> Hard </Button>


        </div>
    )
}

export default CodingPromptsDifficulty