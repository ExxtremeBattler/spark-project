// PIXABAY API - images
// additional endpoints: &q={word} &safesearch=true

import React, { useState, useEffect } from 'react';

import setting from '../prompts/prompts-settings.json'
import subject from '../prompts/prompts-subjects.json'


function Pixabay() {
    const subj = subject[Math.floor(Math.random()*subject.length)]
    const sett = setting[Math.floor(Math.random()*setting.length)]

    const [pic, setPic] = useState(null)
    const [picTwo, setPicTwo] = useState(null);


    useEffect(() => {
        const setting = (selection)
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABEY_API_KEY}&safesearch=true&q=`+setting)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.hits[0].webformatURL);
            setPic(data.hits[0].webformatURL) //need to use math random to generate random index too maybe
        }).then()
        fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABEY_API_KEY}&safesearch=true&q=`+sett)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.hits[0].webformatURL); //need to use math random to generate random index too maybe
            setPicTwo(data.hits[0].webformatURL)
        });
    }, [])

    if (pic) {
            return (
            <>
                <img 
                    src={pic} 
                    alt="subject"
                    style={{maxWidth:300, maxHeight: 400}}
                />
                <img 
                    src={picTwo} 
                    alt="setting"
                    style={{maxWidth:300, maxHeight: 400}} 
                />
            </>) 
        } else {
            return <h1> finding the right images... </h1>
        };
}

export default Pixabay;
