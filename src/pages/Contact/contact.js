import React from "react";
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ContactGallery from "../../components/contactgallery/contactgallery";
import './contact.css';

function Contact() {
    return (  

        <div className='contentContainerContact'>
            <div className='footerSpacer'>
                <ContactGallery />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;