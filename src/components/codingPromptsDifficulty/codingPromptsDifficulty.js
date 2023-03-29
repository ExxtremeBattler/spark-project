import React from "react";
import { useState, useEffect} from "react";
import Button from '@mui/material/Button';
import "./codingPromptsDifficulty.css"
import Grid from '@mui/material/Grid';
import challenges from "../../prompts/coding-prompts.json"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import CodingPromptsChallengeBeginner from "../codingPromptsChallenge/codingPromptsChallengeBeginner"
import CodingPromptsChallengeIntermediate from "../codingPromptsChallenge/codingPromptsChallengeIntermediate"
import CodingPromptsChallengeHard from "../codingPromptsChallenge/codingPromptsChallengeHard"



function CodingPromptsDifficulty() {
    const [difficulty, setDifficulty] = useState("")
    let selectedDifficulty = difficulty

    function renderBeginner() {
        return(<CodingPromptsChallengeBeginner />
        )
    }
    
    function renderIntermediate() {
        return(<CodingPromptsChallengeIntermediate />
        )
    }
    
    function renderHard() {
        return(<CodingPromptsChallengeHard />
        )
    }

    return (
        <div className="CodingPromptsDifficulty">
            
            <h2 className="difficultyHeader"> Difficulty : {difficulty} </h2>

            <Grid container spacing={2} columns={3}> 
            
            <div className="dot"> </div>
            <div className="dot"> </div>
            <div className="dot"> </div>


            <Grid item xs={4}>

            <div className="BeginnerButton"> 

            <Button variant = "contained" 
            size = "large" 
            color="success" 
            href= "Beginner"
            onClick={() => setDifficulty("Beginner")}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: "rgba(4, 1, 1, 0.944)", color: "green", width: "230px", borderRadius: 8  }}
            > Beginner 
            </Button>

            </div>

            </Grid>

            <Grid item xs={4}>
            <div className="IntermediateButton">
            <Button variant = "contained" 
            href= "Intermediate"
            size = "large" 
            onClick={() => setDifficulty("Intermediate")}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: "rgba(4, 1, 1, 0.944)", color: "blue", width: "230px",  borderRadius: 8}}
            > Intermediate
            
            </Button>
            
            </div>
            </Grid>

            <Grid item xs={4}>

            <div className="HardButton">

            <Button 
            variant = "contained" 
            size = "large" 
            href= "Hard"
            onClick={() => setDifficulty("Hard")}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', backgroundColor: "rgba(4, 1, 1, 0.944)", color: "red", width: "230px",  borderRadius: 8}}> Hard 
            </Button>

            </div>

            </Grid>

            </Grid>

            {/* <Button variant = "contained" 
            size = "large" href={difficulty} 
            style={{ fontFamily: 'bradley hand, cursive', backgroundColor: "gray", borderRadius: 8}}
            className = "GoButton"> LET'S CODE! </Button> */}



            <Routes> 
                <Route path="Beginner" element= {renderBeginner()}></Route>
                <Route path="Intermediate" element= {renderIntermediate()}></Route>
                <Route path="Hard" element= {renderHard()}></Route>

            </Routes>

        </div>
    )
}



export default CodingPromptsDifficulty