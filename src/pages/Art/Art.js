import React from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Body from '../../components/art-page/Body/Body'
import './Art.css'

function Art() {
    return ( 
        <div className='contentContainer'>
            <div className='footerSpacer'>
                <Body/>
            </div>
        </div>
    );
}

export default Art;