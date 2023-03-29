//NOUNS - random noun - could be used in writing or art prompt
// Source: https://random-word-form.herokuapp.com/

import React, { useState, useEffect } from 'react';

function Noun() {

    const [word, setWord] = useState(null)

    useEffect(() => {
        fetch('https://random-word-form.herokuapp.com/random/Noun')
        .then((res) => res.json())
        .then((data) => {
            setWord(data[0]);
        });
    }, [])

    if (word) {
            return (
            <>
                <h1> Also, there was a... </h1>
                <h2>{word}</h2>
            </>) 
        } else {
            return <h1> finding the right word... </h1>
        };
}

export default Noun;
