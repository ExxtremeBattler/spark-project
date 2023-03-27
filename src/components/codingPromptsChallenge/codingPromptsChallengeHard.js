import React from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

function getChallengeHard() {
    let challenge = challenges.hardChallenges[Math.floor(Math.random() * challenges.hardChallenges.length)];

    return(
        <p> {challenge} </p>
    )
}

function CodingPromptsChallengeHard() {
    return(
        <div className="CodingPromptsChallengeHard">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Hard </h2>
            <p className="challengeDesc"> {getChallengeHard()} </p>

            </div>

            <div className= "square2"> 
            <h2 className="challengeHeader"> Prev projects </h2>
            <p className="challengeDesc"> **local stor here** </p>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeHard