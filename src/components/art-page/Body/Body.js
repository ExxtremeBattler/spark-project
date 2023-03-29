
import React, { useState } from "react";
import Instructions from "./Instructions";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Placeholder from "./Placeholder";
import RadioBtns from "./RadioBtns";
import StartBtn from "./StartBtn";
import Timer from "./Timer";
import Pixabay from "../../../utils/Pixabay";
import PixabayCredit from "../../PixabayCredit/PixabayCredit";
import './Body.css'

function Body() {
    const [selection, setSelection] = useState();
    const [start, setStart] = useState(false);

    //conditional rendering of page display - displays timer choice or image promtps with countdown
    if (start === false){
        return ( 
            <div div className="pagebody">
                <Instructions />
                <Grid className="gridcontainer" container spacing={1}>
                    <Grid className="gridspace leftBefore" item xs={5.5}>
                        <Placeholder />
                    </Grid>
                    <Grid className="gridspace rightBefore" item xs={5.5}>
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
                    <Grid className="gridspace leftAfter" item xs={7}>
                        <div className="images-div">
                            <Pixabay />
                            <PixabayCredit />
                        </div>
                        
                    </Grid>
                    <Grid className="gridspace rightAfter" item xs={4}>
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