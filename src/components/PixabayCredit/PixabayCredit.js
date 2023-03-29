//credit badge under pixabay images on art prompts page
import React from "react";
import './PixabayCredit.css'

function PixabayCredit() {
    const src = "./Pixabay-logo.svg.png"
    return ( 
        <div className="credit-container">
            <a classname="link-text" href="https://pixabay.com/">
                free images from Pixabay
                <img className="pixabay-logo" src={process.env.PUBLIC_URL + src} alt="pixabay logo"/>
            </a>
        </div>
    );
}

export default PixabayCredit;