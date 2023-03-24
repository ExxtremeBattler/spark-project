//AFTER - display when showing prompts and countdown
//grid - two squares; left displays prompts, right displays timer

import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import './PromptBody.css'

function PromptBody() {
    return ( 
        <div className="pagebody">
            <Grid className="gridcontainer" container spacing={1}>
                <Grid className="gridspace left" item xs={7}>
                    {/* Image one Image 2 */}
                </Grid>
                <Grid className="gridspace right" item xs={4}>
                    {/* selected time,
                    Countdown clock*/}
                </Grid>
            </Grid>
        </div>
    );
}

export default PromptBody;