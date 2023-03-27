// Radio buttons for Art promps page - placeholder for checkbaxes?
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';

function RadioBtns() {
    return ( 
    <>
    <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Random"
            name="radio-buttons-group"
        >
            <FormControlLabel value="1min" control={<Radio />} label="1 Minute" />
            <FormControlLabel value="5min" control={<Radio />} label="5 Minutes" />
            <FormControlLabel value="10min" control={<Radio />} label="10 Minutes" />
            <FormControlLabel value="Random" control={<Radio />} label="Random" />
        </RadioGroup>
    </FormControl>
    
    </> 
    );
}

export default RadioBtns;