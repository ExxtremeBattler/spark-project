import React, { useState } from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"

let currentChallenge = ""


var pastEasyChallenges = JSON.parse(localStorage.getItem('pastEasyChallenges'))

pastEasyChallenges ? console.log("Storage found") : pastEasyChallenges = []


function getChallengeBeginner() {
        
    currentChallenge = challenges.beginnerChallenges[Math.floor(Math.random() * challenges.beginnerChallenges.length)];

    const index = pastEasyChallenges.indexOf(currentChallenge);
    
    if (index > -1) {
        getChallengeBeginner()
        return
    }

    pastEasyChallenges.unshift(currentChallenge)

    pastEasyChallenges.length = 3
    console.log(pastEasyChallenges);

    localStorage.setItem('pastEasyChallenges', JSON.stringify(pastEasyChallenges));

    return(
        <p> {currentChallenge} </p>
    )
}


getChallengeBeginner()


function CodingPromptsChallengeBeginner() {



    return(
        <div className="CodingPromptsChallenge">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Beginner </h2>
            <p className="challengeDesc">{currentChallenge} </p>
            <p className= "refreshReminder"> Refresh for a new challenge!</p>

            </div>

            <div className= "square2"> 
            <h2 className="storageHeader"> Previous Projects </h2>
            <ul className="storageList">

            <li className="challenge1" >{pastEasyChallenges[0]} </li>
            <li className="challenge2" >{pastEasyChallenges[1]} </li>
            <li className="challenge3" >{pastEasyChallenges[2]} </li>

            </ul>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeBeginner