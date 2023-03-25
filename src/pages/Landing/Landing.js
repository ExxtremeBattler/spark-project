import React from 'react';
import MainGallery from '../../components/mainGallery/mainGallery';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './Landing.css';



function Landing() {

    return ( 

        <div className='contentContainer'>
            <div className='footerSpacer'>
                <Header />
                <MainGallery/>
                <Footer />
            </div>
        </div>
     );
}

export default Landing;