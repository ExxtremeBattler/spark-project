//Activities - using boredAPI to give an action prompt for writer or artist
// https://www.boredapi.com/documentation#endpoints-type

import React, { useState, useEffect } from 'react';

function Activity() {

    const [activity, setActivity] = useState(null)

    useEffect(() => {
        fetch('http://www.boredapi.com/api/activity/')
        .then((res) => res.json())
        .then((data) => {
            setActivity(data.activity);
        });
    }, [])

    if (activity) {
            return (
            <>
                <h1> Your character will... </h1>
                <h2>{activity}</h2>
            </>) 
        } else {
            return <h1> finding the right activity... </h1>
        };
}

export default Activity;
