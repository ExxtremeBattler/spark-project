import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import "./codingPromptsDifficulty.css"
import Grid from '@mui/material/Grid';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import CodingPromptsChallengeBeginner from "../codingPromptsChallenge/codingPromptsChallengeBeginner"
import CodingPromptsChallengeIntermediate from "../codingPromptsChallenge/codingPromptsChallengeIntermediate"
import CodingPromptsChallengeHard from "../codingPromptsChallenge/codingPromptsChallengeHard"


function renderBeginner() {
    return(<CodingPromptsChallengeBeginner/>
    )
}

function renderIntermediate() {
    return(<CodingPromptsChallengeIntermediate/>
    )
}

function renderHard() {
    return(<CodingPromptsChallengeHard/>
    )
}

function routeToChallenge(selectedDifficulty){
    if (selectedDifficulty === "Beginner"){

    }
}


function CodingPromptsDifficulty() {
    const [difficulty, setDifficulty] = useState("")
    let selectedDifficulty = difficulty


    return (
        <div className="CodingPromptsDifficulty">
            
            <h2> Difficulty : {difficulty} </h2>

            <Grid container spacing={2} columns={3}> 
            
            <div className="dot"> </div>
            <div className="dot"> </div>
            <div className="dot"> </div>


            <Grid item xs={4}>
            <div className="BeginnerButton"> 
            <Button variant = "contained" size = "large" color="success" onClick={() => setDifficulty("Beginner")}> Beginner </Button>
            </div>
            </Grid>

            <Grid item xs={4}>
            <div className="IntermediateButton">
            <Button variant = "contained" size = "large" onClick={() => setDifficulty("Intermediate")}> Intermediate</Button>
            </div>
            </Grid>

            <Grid item xs={4}>
            <div className="HardButton">
            <Button variant = "contained" size = "large" color = "error" onClick={() => setDifficulty("Hard")}> Hard </Button>
            </div>
            </Grid>

            </Grid>

            <Button variant = "outlined" size = "large" href={difficulty}> LET'S CODE! </Button>

            <Routes> 
                <Route path="Beginner" element= {renderBeginner()}></Route>
                <Route path="Intermediate" element= {renderIntermediate()}></Route>
                <Route path="Hard" element= {renderHard()}></Route>

            </Routes>

        </div>
    )
}

export default CodingPromptsDifficulty