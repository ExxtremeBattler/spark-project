import React, { useState } from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

let currentChallenge = ""


var pastHardChallenges = JSON.parse(localStorage.getItem('pastHardChallenges'))

pastHardChallenges ? console.log("Storage found") : pastHardChallenges = []


function getChallengeHard() {
        
    currentChallenge = challenges.hardChallenges[Math.floor(Math.random() * challenges.hardChallenges.length)];

    const index = pastHardChallenges.indexOf(currentChallenge);
    
    if (index > -1) {
        getChallengeHard()
        return
    }

    pastHardChallenges.unshift(currentChallenge)

    pastHardChallenges.length = 3
    console.log(pastHardChallenges);

    localStorage.setItem('pastHardChallenges', JSON.stringify(pastHardChallenges));

    return(
        <p> {currentChallenge} </p>
    )
}


getChallengeHard()


function CodingPromptsChallengeHard() {



    return(
        <div className="CodingPromptsChallenge">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Hard </h2>
            <p className="challengeDesc">{currentChallenge} </p>
            <p className= "refreshReminder"> Refresh for a new challenge!</p>

            </div>

            <div className= "square2"> 
            <h2 className="storageHeader"> Previous Projects </h2>
            <ul className="storageList">

            <li className="challenge1" >{pastHardChallenges[0]} </li>
            <li className="challenge2" >{pastHardChallenges[1]} </li>
            <li className="challenge3" >{pastHardChallenges[2]} </li>

            </ul>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeHard