//AFTER - display when showing prompts and countdown
//grid - two squares; left displays prompts, right displays timer

import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import './PromptBody.css'

function PromptBody() {
    // grab random drawing-prompt from json and display below
    return ( 
        <div className="pagebody">
            <Grid className="gridcontainer" container spacing={1}>
                <Grid className="gridspace left" item xs={7}>
                    <div>
                        {/* drawing prompt text */}
                    </div>
                </Grid>
                <Grid className="gridspace right" item xs={4}>
                    <div className="timeDisplay"><h3 className="timelimit">X minutes</h3>
                    <h2 className="countdown">0:59</h2></div>

                    
                    {/* selected time,
                    Countdown clock*/}
                </Grid>
            </Grid>
        </div>
    );
}

export default PromptBody;