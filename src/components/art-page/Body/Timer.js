// use props to change timer on clock - pass in selection from radio buttons
// React Countdown is npm installation, zeroPad adds extra zero to clock.
import React from "react";
import Countdown, { zeroPad } from "react-countdown";

//props from time selection on radio buttons
function Timer(props) {
    const RenderTimer = ({ minutes, seconds, completed }) => {
    if(completed) {
        return (
            <h2>Time's up!</h2>
        )
    } else {
        return <span>{minutes}:{zeroPad(seconds)}</span>
    }
}   //time in ms - default radio set to 10mins so time(ms) defaults to 10 mins unless changed.
    let time = 600000;
    if (props.selection === "1") {
        time = 60000;
    } else if (props.selection === "5") {
        time = 300000;
    } else if (props.selection === "10") {
        time = 600000;
    };
    return ( 
        
        <div>
            <Countdown 
                date={Date.now() + time}
                renderer={RenderTimer}
            />
        </div>
    );
}

export default Timer;