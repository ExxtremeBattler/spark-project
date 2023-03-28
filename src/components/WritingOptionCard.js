import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import "./WritingOptionCard.css"


function WritingOptionCard(props) {
    const [prompt, setPrompt] = useState(false);
    
    const handlePrompt = (events) => {
        setPrompt(true);
    };
    
    if (prompt === false) {
    return ( 
        <>
            <Card className='prompt-option-card' sx={{ minWidth: 275 }}>
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
                <Card className='prompt-display-card' sx={{ minWidth: 275 }}>
                    <h3 className='prompt-display-label' size="medium">{props.text}</h3>
                    <h2 className="prompt-text">{props.prompt}</h2>
                </Card>
            </>
        )
    }
}

//<CardActions>             <CardContent></CardContent>
//</CardActions>
export default WritingOptionCard;