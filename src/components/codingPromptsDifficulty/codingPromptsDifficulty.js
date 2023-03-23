import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import "./codingPromptsDifficulty.css"
import Grid from '@mui/material/Grid';


function CodingPromptsDifficulty() {
    const [difficulty, setDifficulty] = useState("")


    return (
        <div className="CodingPromptsDifficulty">

            <Grid container spacing={2} columns={3}> 

            <h2> Difficulty : {difficulty} </h2>

            <Grid item xs={4}>
            <div className="BeginnerButton"> 
            <Button variant = "outlined" size = "large" color="success" onClick={() => setDifficulty("Beginner")}> Beginner </Button>
            </div>
            </Grid>

            <Grid item xs={4}>
            <div className="IntermediateButton">
            <Button variant = "outlined" size = "large" onClick={() => setDifficulty("Intermediate")}> Intermediate</Button>
            </div>
            </Grid>

            <Grid item xs={4}>
            <div className="HardButton">
            <Button variant = "outlined" size = "large" color = "error" onClick={() => setDifficulty("Hard")}> Hard </Button>
            </div>
            </Grid>

            </Grid>

        </div>
    )
}

export default CodingPromptsDifficulty