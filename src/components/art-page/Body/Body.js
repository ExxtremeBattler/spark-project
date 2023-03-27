//BEFORE - display when selecting time
//grid - two squares; left displays question mark (placeholder for prompts), right displays radio buttons
//AFTER - display when showing prompts and countdown
//grid - two squares; left displays prompts, right displays timer


import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";

import RadioBtns from "./RadioBtns";
import DrawPrompts from '../../../prompts/drawing-prompts.json'
import Timer from "./Timer";
import './Body.css'

function Body() {
    //if/else for setting time from radio btns - might be clearer as a switch case later;
    let time = null;
    let selection= "Random"; //default

    //handling random time selection;
    const timeChoice = ['1min', '5min', '10min'];
    let randomTime = timeChoice[Math.floor(Math.random() * timeChoice.length)];
    if (selection === "Random") {
        selection = randomTime;
    };

     //get from radio btn selection
    if (selection === "1min") {
        time = 60000;
    } else if (selection === "5min") {
        time = 300000;
    } else if (selection === "10min") {
        time = 600000;
    };

    //art prompt random selection
    const promptList = DrawPrompts;
    // console.log(promptList);
    const artPrompt = promptList[Math.floor(Math.random()*promptList.length)];
    // console.log(artPrompt);

    //conditional rendering of page display
    let prompts = "hidden";
    if (prompts === "hidden"){
        return ( 
            <div div className="pagebody"> 
                <Grid className="gridcontainer" container spacing={1}>
                    <Grid className="gridspace left" item xs={5.5}>

                    </Grid>
                    <Grid className="gridspace right" item xs={5.5}>
                        <RadioBtns selection={selection}/>
                    </Grid>
                </Grid>
            </div>
        );
    } else {
        return ( 
            <div className="pagebody">
                <Grid className="gridcontainer" container spacing={1}>
                    <Grid className="gridspace left" item xs={7}>
                        <div>
                            <h2 className="prompt-text">{artPrompt}</h2>
                        </div>
                    </Grid>
                    <Grid className="gridspace right" item xs={4}>
                        <div className="timeDisplay">
                            <h3 className="timelimit">
                                X Minutes {/* time from selection */}
                            </h3>
                            <h2 className="countdown">
                                <Timer time={Date.now() + time} />
                            </h2>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Body;