//BEFORE - display when selecting time
//grid - two squares; left displays question mark (placeholder for prompts), right displays radio buttons
//AFTER - display when showing prompts and countdown
//grid - two squares; left displays prompts, right displays timer


import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Placeholder from "./Placeholder";
import RadioBtns from "./RadioBtns";
import DrawPrompts from '../../../prompts/drawing-prompts.json'
import StartBtn from "./StartBtn";
import Timer from "./Timer";
import './Body.css'

function Body() {
    // let selection = "Random"; //default
    //handling random time selection;
    // const timeChoice = ['1min', '5min', '10min'];
    // let randomTime = timeChoice[Math.floor(Math.random() * timeChoice.length)];
    // if (selection === "Random") {
    //     selection = randomTime;
    // };
    const [selection, setSelection] = useState();
    const [start, setStart] = useState(false);


    //art prompt random selection
    const promptList = DrawPrompts;
    // console.log(promptList);
    const artPrompt = promptList[Math.floor(Math.random()*promptList.length)];
    // console.log(artPrompt);

    //conditional rendering of page display

    if (start === false){
        return ( 
            <div div className="pagebody"> 
                <Grid className="gridcontainer" container spacing={1}>
                    <Grid className="gridspace left" item xs={5.5}>
                        <Placeholder />
                    </Grid>
                    <Grid className="gridspace right" item xs={5.5}>
                        <RadioBtns onSelection={setSelection}/>
                        <StartBtn onClick={setStart} />
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
                            <h2 className='timeLabel'>You have {selection} minute{"(s)"}</h2>
                            <h2 className="countdown">
                                <Timer selection={selection}/>
                            </h2>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Body;