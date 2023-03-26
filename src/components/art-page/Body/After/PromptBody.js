//AFTER - display when showing prompts and countdown
//grid - two squares; left displays prompts, right displays timer

import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import DrawPrompts from '../../../../prompts/drawing-prompts.json'
import Timer from "./Timer";
import './PromptBody.css'

function PromptBody() {
    //if/else for setting time from radio btns - might be clearer as a switch case later;
    let time = null;
    let selection= "5min"; //get from radio btn selection
    if (selection === "5min") {
        time = 300000;
    } else if (selection === "1min") {
        time = 60000;
    }



    const promptList = DrawPrompts;
    // console.log(promptList);
    const artPrompt = promptList[Math.floor(Math.random()*promptList.length)];
    // console.log(artPrompt);
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

export default PromptBody;