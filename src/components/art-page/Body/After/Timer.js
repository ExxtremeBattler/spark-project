// use props to change timer on clock - pass in selection from radio buttons
// React Countdown is npm installation, zeroPad adds extra zero to clock.
import React, { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";


function Timer() {
    const [timeLimit, setTimeLimit] = useState(11000);


    const RenderTimer = ({ minutes, seconds, completed }) => {
    if(completed) {
        return (
            <h2>Time's up!</h2>
        )
    } else {
        return <span>{minutes}:{zeroPad(seconds)}</span>
    }
}

    return ( 
        <div>
            <Countdown 
                date={Date.now() + timeLimit}
                renderer={RenderTimer}
            />
        </div>
    );
}

export default Timer;