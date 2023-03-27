// Radio buttons for Art promps page - placeholder for checkbaxes?
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';

function RadioBtns({ onSelection }) {

    function handleChange(event){
        onSelection(event.target.value);
    }



    return ( 
    <>
    <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Random"
            name="radio-buttons-group"
        >
            <FormControlLabel 
                value="1" 
                control={<Radio />} 
                label="1 Minute" 
                onChange={handleChange}
            />
            <FormControlLabel 
                value="5" 
                control={<Radio />} 
                label="5 Minutes" 
                onChange={handleChange}
            />
            <FormControlLabel 
                value="10" 
                control={<Radio />} 
                label="10 Minutes" 
                onChange={handleChange}
            />
            {/* <FormControlLabel 
                value="Random" 
                control={<Radio />} 
                label="Random" 
                // onchange={handleRadioClick}
            /> */}
        </RadioGroup>
    </FormControl>
    </> 
    );
}

export default RadioBtns;