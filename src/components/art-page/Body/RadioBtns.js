// Radio buttons for Art promps page - placeholder for checkbaxes?
import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';

function RadioBtns() {
    const [timeChoice, setTimeChoice] = useState('Random');


    function handleChange(event){
        setTimeChoice(event.target.value);
    }
    function showData() {
        console.log(timeChoice);
    }



    return ( 
    <>
    <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Random"
            name="radio-buttons-group"
            onChange={handleChange}
        >
            <FormControlLabel 
                value="1min" 
                control={<Radio />} 
                label="1 Minute" 
                
            />
            <FormControlLabel 
                value="5min" 
                control={<Radio />} 
                label="5 Minutes" 
                // onchange={handleRadioClick}
            />
            <FormControlLabel 
                value="10min" 
                control={<Radio />} 
                label="10 Minutes" 
                // onchange={handleRadioClick}
            />
            <FormControlLabel 
                value="Random" 
                control={<Radio />} 
                label="Random" 
                // onchange={handleRadioClick}
            />
        </RadioGroup>
    </FormControl>
    <button onClick={showData}>Generate Prompts</button>
    </> 
    );
}

export default RadioBtns;