import * as React from 'react';
import Button from '@mui/material/Button';


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

        <img src={props.src} alt='passed from props'></img>

        {props.text}
        
        </Button>
        </div>
        );
}

export default MainButton;