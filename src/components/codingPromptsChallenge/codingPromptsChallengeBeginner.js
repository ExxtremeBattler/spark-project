import React from "react";
import "./codingPromptsChallenge.css"

import challenges from "../../prompts/coding-prompts.json"




function CodingPromptsChallengeBeginner({storedProjects, setStoredProjects}) {

    function getChallengeBeginner() {
        let challenge = challenges.beginnerChallenges[Math.floor(Math.random() * challenges.beginnerChallenges.length)];

        storedProjects.unshift(challenge)

        return(
            <p> {challenge} </p>
        )
    }

    return(
        <div className="CodingPromptsChallengeBeginner">
            
            <div className="square"> 

            <h2 className="challengeHeader"> Beginner </h2>
            <p className="challengeDesc">{getChallengeBeginner()} </p>

            </div>

            <div className= "square2"> 
            <h2 className="storageHeader"> Previous Projects </h2>
            <ul className="storageList"> {storedProjects} </ul>
            </div>
            

        </div>
    )
}

export default CodingPromptsChallengeBeginner