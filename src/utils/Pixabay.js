// PIXABAY API - images
// additional endpoints: &q={query} &safesearch=true
import React, { useState, useEffect } from 'react';

//random simgle-word arrays classified as setting or subject to ensure two different pictures
import setting from '../prompts/prompts-settings.json'
import subject from '../prompts/prompts-subjects.json'


function Pixabay() {
    //had put API key in env file for safe keeping but it wasn't set up to render on netlify without it so Nirmeet said I could put it here:
    const REACT_APP_PIXABAY_API_KEY= "34641504-ede8faf3281ff4dfa2566efc0";

    //getting random word from each array
    //these variables bring up 'useEffect missing dependencies' error in console but it is harmless - do NOT add these to dependency array.
    const subj = subject[Math.floor(Math.random()*subject.length)]
    const sett = setting[Math.floor(Math.random()*setting.length)]

    // will set the pictures from the API responses
    const [pic, setPic] = useState(null)
    const [picTwo, setPicTwo] = useState(null);

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&safesearch=true&q=${subj}`)
        .then((res) => res.json())
        .then((data) => {
            setPic(data.hits[0].webformatURL)
        }).then()
        fetch(`https://pixabay.com/api/?key=${REACT_APP_PIXABAY_API_KEY}&safesearch=true&q=${sett}`)
        .then((res) => res.json())
        .then((data) => {
            setPicTwo(data.hits[0].webformatURL)
        });
    }, [])

    //if we get pictures from API, return images:
    if (pic) {
            return (
            <>
                <img 
                    src={pic} 
                    alt="subject"
                    style={{maxWidth:350, maxHeight: 350}}
                    className='api-image'
                />
                <img 
                    src={picTwo} 
                    alt="setting"
                    style={{maxWidth:350, maxHeight: 350}} 
                    className='api-image'
                />
            </>) 
        } else {
            return <h1> finding the right images... </h1>
        };
}

export default Pixabay;
