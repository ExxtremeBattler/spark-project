import React from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Lightbulb from "../../components/lightbulb/lightbulb";
import './contact.css';

function Contact() {
    return (  

        <div className='contentContainer'>
            <div className='footerSpacer'>
                <Header />
                <Lightbulb />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;