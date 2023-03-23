//BEFORE - display when selecting time
//grid - two squares; left displays question mark (placeholder for prompts), right displays radio buttons

import React from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import './Body.css'
import RadioBtns from "./RadioBtns";

function Body() {
    return ( 
        <Grid className="gridcontainer" container spacing={2}>
            <Grid className="gridspace left" item xs={6}>
                
            </Grid>
            <Grid className="gridspace right" item xs={6}>
                <RadioBtns />
            </Grid>
        </Grid>
    );
}

export default Body;