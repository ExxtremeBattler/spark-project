import React from "react";
import Body from '../../components/art-page/Body/Body'
import Footer from '../../components/footer/footer';

import './Art.css'

function Art() {
    return ( 
        <div className='contentContainer'>
            <div className='footerSpacer'>
                <Body/>
                <Footer />
            </div>
        </div>
    );
}

export default Art;