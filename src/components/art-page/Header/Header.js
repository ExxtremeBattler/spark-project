import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './Header.css'


function Header() {
    return ( 
    <>
        <div className="headerBar">
            <p className="instructions">Please select your drawing time (if you don't select one we choose one for you). 
            <br /> When your ready click 'generate prompt'. a set of two images to combine will appear and the countdown begins! 
            </p>
            <button className="placeholder"><LightbulbIcon /></button>
        </div>
    </> 
    );
}

export default Header;