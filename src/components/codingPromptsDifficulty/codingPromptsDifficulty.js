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
import Footer from '../../components/footer/footer'


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
            
            <h2 className="difficultyHeader"> Select a difficulty to receive a challenge! {difficulty} </h2>

            <Grid className="grid-container" container spacing={2}> 
            <Grid className="grid-item" item xs={12} md={4}>
            <div className="dot dot1"> 
                <div className="BeginnerButton"> 

                    <Button variant = "contained"
                    className="diff-button" 
                    size = "large" 
                    color="success" 
                    href= "Beginner"
                    onClick={() => setDifficulty("Beginner")}
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize:30, color: "black", backgroundColor: "green"}}
                    > Beginner 
                    </Button>

                </div>
            </div>
            </Grid>
            
            
            <Grid className="grid-item" item xs={12} md={4}>
            <div className="dot dot2"> 
                <div className="IntermediateButton">
                    <Button variant = "contained" 
                    className="diff-button"
                    href= "Intermediate"
                    size = "large" 
                    onClick={() => setDifficulty("Intermediate")}
                    style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize:30, color: "black", backgroundColor: "blue"}}
                    > Intermediate
                    </Button>
                </div>
            </div>
            </Grid>

            <Grid className="grid-item" item xs={12} md={4}>
            <div className="dot dot3"> 
            <div className="HardButton">

            <Button 
            className="diff-button"
            variant = "contained" 
            size = "large" 
            href= "Hard"
            onClick={() => setDifficulty("Hard")}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize:30, color: "black", backgroundColor: "red"}}
            > Hard 
            </Button>

            </div>
</div>
            </Grid>

            </Grid>

            {/* start button - could be used later.
            <Button variant = "contained" 
            size = "large" href={difficulty} 
            style={{ fontFamily: 'bradley hand, cursive', backgroundColor: "gray", borderRadius: 8}}
            className = "GoButton"> LET'S CODE! </Button> */}

            <Footer />

            <Routes> 
                <Route path="Beginner" element= {renderBeginner()}></Route>
                <Route path="Intermediate" element= {renderIntermediate()}></Route>
                <Route path="Hard" element= {renderHard()}></Route>

            </Routes>

        </div>
    )
}




export default CodingPromptsDifficulty