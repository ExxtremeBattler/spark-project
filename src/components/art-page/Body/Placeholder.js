import React from "react";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

function Placeholder() {
    return ( 
    <div className="placeholder-div">
        <QuestionMarkIcon 
            sx={{
                bgcolor: "black",
                color: "white",
                fontSize: 300,
            }}
        />
    </div>
    );
}

export default Placeholder;