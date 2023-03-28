import React from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Gallery from '../../components/writingPromptsGallery/Gallery'
import './Writing.css'

function Writing() {
    return ( 
    <div className='contentContainer'>
        <div className='footerSpacer'>
            <Header />
            <Gallery/>
            <Footer />
        </div>
    </div> 
    );
}

export default Writing;