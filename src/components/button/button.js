import * as React from 'react';
import Button from '@mui/material/Button';
import { width } from '@mui/system';


function MainButton(props) {
    return (
        <div className="App">

        <Button 
        variant='contained'
        onClick={() => console.log('click')}
        sx={{
            borderRadius: '40%',
            height:'130px',
            width:'130px'
            
            }}>

        <img src={props.src}></img>

        {props.text}
        
        </Button>
        </div>
        );
}

export default MainButton