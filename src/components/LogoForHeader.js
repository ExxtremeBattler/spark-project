import React, { useState } from "react";
import './LogoForHeader.css'

//logo images are in public folder

function LogoForHeader() {
    //default to plain white logo, change to glowing on hover:
    const [src, setSRC] = useState("./Spark_white_clear.png")
    
    function handleMouseEnter() {
    setSRC("./Spark_white_highlight.png")
    }
    function handleMouseLeave() {
    setSRC("./Spark_white_clear.png")
    }

    return ( 
        <div 
        className='logo-header-div'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        >
            <img className="header-logo" src={process.env.PUBLIC_URL + src} alt="spark logo" >
            </img>
        </div>
    );
}

export default LogoForHeader;

