//ADJECTIVES - could be using in writing prompt?
//source: https://random-word-form.herokuapp.com/
//possibly run through dictionary API to show definition: https://dictionaryapi.dev/

import React, { useState, useEffect } from 'react';
// import Dictionary from './Dictionary';

function Adjective() {
    const [adj, setAdj] = useState(null)
    useEffect(() => {
        fetch('https://random-word-form.herokuapp.com/random/adjective')
        .then((res) => res.json())
        .then((data) => {
            setAdj(data[0]);
        });
    }, [])
    if (word) {
            return (
            <>
                <h2>{word}</h2>
            </>) 
        } else {
            return <h1> finding the right word... </h1>
        };
}

export default Adjective;