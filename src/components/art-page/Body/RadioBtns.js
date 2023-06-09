// Radio buttons for Art promps page - placeholder for checkbaxes?
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

function RadioBtns({ onSelection }) {

    function handleChange(event){
        onSelection(event.target.value);
    }

    return ( 
    <>
    <FormControl>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="10"
            name="radio-buttons-group"
            className='radioBtns'
        >
            <FormControlLabel 
                value="1" 
                control={
                <Radio 
                    size="large"
                    sx={{
                        '&, &.Mui-checked': {
                        color: 'magenta',
                        },
                    }}
                />}
                label="1 Minute" 
                onChange={handleChange}
            />
            <FormControlLabel 
                value="5" 
                control={
                <Radio 
                    size="large"
                    sx={{
                        '&, &.Mui-checked': {
                        color: 'magenta',
                        },
                    }}
                />}
                label="5 Minutes" 
                onChange={handleChange}
            />
            <FormControlLabel 
                value="10" 
                control={
                <Radio 
                    size="large"
                    sx={{
                        '&, &.Mui-checked': {
                        color: 'magenta',
                        },
                    }}
                />} 
                label="10 Minutes" 
                onChange={handleChange}
            />
        </RadioGroup>
    </FormControl>
    </> 
    );
}

export default RadioBtns;