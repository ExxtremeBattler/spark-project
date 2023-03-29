import React, { useState } from "react";
import './LogoForHeader.css'



function LogoForHeader() {
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
            <img src={process.env.PUBLIC_URL + src} alt="spark logo" >
            </img>
        </div>
    );
}

export default LogoForHeader;

