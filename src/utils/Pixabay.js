// PIXABAY API - images
// Source: 

// additional endpoints: &q={word} &safesearch=true

import React, { useState, useEffect } from 'react';

function Pixabay() {

    const [pic, setPic] = useState(null)
    
    const locations = ["desert", "forest", "city", "kitchen", "train", "garden", "shop"];
    const selection = locations[Math.floor(Math.random()*locations.length)]
    console.log(selection);

    useEffect(() => {
        const setting = (selection)
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABEY_API_KEY}&safesearch=true&q=`+setting)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.hits[0].webformatURL);
            setPic(data.hits[0].webformatURL) //need to use math random to generate random index too maybe
        });
    }, [])

    if (pic) {
            return (
            <>
                <img src={pic} alt="landscape" />
            </>) 
        } else {
            return <h1> finding the right image... </h1>
        };
}

export default Pixabay;
