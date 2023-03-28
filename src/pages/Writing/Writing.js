import React from "react";
import Gallery from '../../components/writingPromptsGallery/Gallery'
import Footer from '../../components/footer/footer';
import './Writing.css'

function Writing() {
    return ( 
    <div className='contentContainer'>
        <div className='footerSpacer'>
            <Gallery/>
            <Footer />
        </div>
    </div> 
    );
}

export default Writing;