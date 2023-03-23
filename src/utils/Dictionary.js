//Dictionart API - to receive word from Adjective.js or Noun.js for 'word of the day?

import React, { useState, useEffect } from 'react';
// import Adjective from './Adjective';


function Dictionary() {
    const [def, setDef] = useState(null)
    const word="placeholder"

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
        .then((res) => res.json())
        .then((data) => {
            setDef(data[0].meanings[0].definitions[0].definition);
        });
    }, [])

    if (def) {
            return (
            <>
                <h1> {word} </h1>
                <h2>{def}</h2>
            </>) 
        } else {
            return <h1> finding the definition... </h1>
        };
}

export default Dictionary;