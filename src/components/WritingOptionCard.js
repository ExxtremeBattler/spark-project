import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import "./WritingOptionCard.css"


function WritingOptionCard(props) {
    return ( 
    <>
        <Card className='prompt-option-card' sx={{ minWidth: 275 }}>
            <button className='prompt-option-btn' size="medium">{props.text}</button>
        </Card>
    </> 
    );
}

//<CardActions>             <CardContent></CardContent>
//</CardActions>
export default WritingOptionCard;