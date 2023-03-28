import React from 'react';
import MainGallery from '../../components/mainGallery/mainGallery';
import Footer from '../../components/footer/footer';
import './Landing.css';




function Landing() {

    return ( 

        <div className='contentContainerlanding'>
            <div className='footerSpacer'>
                <MainGallery/>
                <Footer />
            </div>
        </div>
     );
}

export default Landing;