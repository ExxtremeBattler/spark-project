// use props to change timer on clock - pass in selection from radio buttons
// React Countdown is npm installation, zeroPad adds extra zero to clock.
import React from "react";
import Countdown, { zeroPad } from "react-countdown";


function Timer(props) {
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
                date={props.time}
                renderer={RenderTimer}
            />
        </div>
    );
}

export default Timer;