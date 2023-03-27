import React from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

function getChallengeBeginner() {
    let challenge = challenges.beginnerChallenges[Math.floor(Math.random() * challenges.beginnerChallenges.length)];

    return(
        <p> {challenge} </p>
    )
}

function CodingPromptsChallengeBeginner() {
    return(
        <div className="CodingPromptsChallengeBeginner">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Beginner </h2>
            <p className="challengeDesc">{getChallengeBeginner()} </p>

            </div>

            <div className= "square2"> 
            <h2 className="challengeHeader"> Prev projects </h2>
            <p className="challengeDesc"> **local stor here** </p>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeBeginner