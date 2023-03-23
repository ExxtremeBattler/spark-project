import * as React from 'react';
import Button from '@mui/material/Button';


function MainButton() {
    return (
        <div className="App">

        <Button 
        variant='contained'
        onClick={() => console.log('click')}
        >first mui buttons </Button>


        </div>
        );
}

export default MainButton;