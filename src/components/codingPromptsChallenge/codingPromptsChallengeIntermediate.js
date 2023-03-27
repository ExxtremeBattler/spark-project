import React from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

function getChallengeIntermediate() {
    let challenge = challenges.intermedChallenges[Math.floor(Math.random() * challenges.intermedChallenges.length)];

    return(
        <p> {challenge} </p>
    )
}

function CodingPromptsChallengeIntermediate() {
    return(
        <div className="CodingPromptsChallengeIntermediate">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Intermediate </h2>
            <p className="challengeDesc"> {getChallengeIntermediate()} </p>

            </div>

            <div className= "square2"> 
            <h2 className="challengeHeader"> Prev projects </h2>
            <p className="challengeDesc"> **local stor here** </p>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeIntermediate