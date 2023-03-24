//BEFORE - display when selecting time
//grid - two squares; left displays question mark (placeholder for prompts), right displays radio buttons

import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import './Body.css'
import RadioBtns from "./RadioBtns";

function Body() {
    return ( 
        <div div className="pagebody"> 
            <Grid className="gridcontainer" container spacing={1}>
                <Grid className="gridspace left" item xs={5.5}>
                    
                </Grid>
                <Grid className="gridspace right" item xs={5.5}>
                    <RadioBtns />
                </Grid>
            </Grid>
        </div>
    );
}

export default Body;