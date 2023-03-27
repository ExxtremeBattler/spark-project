import React, { useState } from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

let currentChallenge = ""


var pastIntermediateChallenges = JSON.parse(localStorage.getItem('pastIntermediateChallenges'))

pastIntermediateChallenges ? console.log("Storage found") : pastIntermediateChallenges = []


function getChallengeIntermediate() {
        
    currentChallenge = challenges.intermedChallenges[Math.floor(Math.random() * challenges.intermedChallenges.length)];

    const index = pastIntermediateChallenges.indexOf(currentChallenge);
    
    if (index > -1) {
        getChallengeIntermediate()
        return
    }

    pastIntermediateChallenges.unshift(currentChallenge)

    pastIntermediateChallenges.length = 3
    console.log(pastIntermediateChallenges);

    localStorage.setItem('pastIntermediateChallenges', JSON.stringify(pastIntermediateChallenges));

    return(
        <p> {currentChallenge} </p>
    )
}


getChallengeIntermediate()


function CodingPromptsChallengeIntermediate() {



    return(
        <div className="CodingPromptsChallengeHard">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Intermediate </h2>
            <p className="challengeDesc">{currentChallenge} </p>

            </div>

            <div className= "square2"> 
            <h2 className="storageHeader"> Previous Projects </h2>
            <ul className="storageList">

            <li className="challenge1" >{pastIntermediateChallenges[0]} </li>
            <li className="challenge2" >{pastIntermediateChallenges[1]} </li>
            <li className="challenge3" >{pastIntermediateChallenges[2]} </li>

            </ul>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeIntermediate