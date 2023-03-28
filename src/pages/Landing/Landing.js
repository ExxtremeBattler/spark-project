import React from 'react';
import MainGallery from '../../components/mainGallery/mainGallery';
import Footer from '../../components/footer/footer';
import './Landing.css';



function Landing() {

    return ( 

        <div className='contentContainer'>
            <div className='footerSpacer'>
                <MainGallery/>
            </div>
        </div>
     );
}

export default Landing;