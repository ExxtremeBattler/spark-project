import React, { useState } from 'react';
import Card from '@mui/material/Card';
import "./WritingOptionCard.css"


function WritingOptionCard(props) {
    const [prompt, setPrompt] = useState(false);
    
    const handlePrompt = () => {
        setPrompt(true);
    };
    
    if (prompt === false) {
    return ( 
        <>
            <Card className='prompt-option-card' sx={{ minWidth: 275, maxHeight: 250}}>
                <button 
                    className='prompt-option-btn' 
                    size="medium"
                    onClick={handlePrompt}
                >{props.text}</button>
            </Card>
        </> 
    )
    } else {
        return (
            <>
                <Card className='prompt-display-card' sx={{ minWidth: 275, maxHeight: 250 }}>
                    <h3 className='prompt-display-label' size="medium">{props.text}</h3>
                    <h2 className="prompt-text">{props.prompt}</h2>
                </Card>
            </>
        )
    }
}

export default WritingOptionCard;