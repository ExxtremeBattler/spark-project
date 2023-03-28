import React from "react";
import './contactgallery.css';
import Grid from '@mui/material/Grid';



function ContactGallery() {
    return (  

        <>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <div className="gridspace"></div>
        </Grid>
        <Grid item xs={12} md={4}>
            <div className="gridspace"></div>
        </Grid>
        <Grid item xs={12} md={4} >
            <div className="gridspace"></div>
        </Grid>
    </Grid>

    <Grid>
        <Grid item xs={12}>
        
            <div className="gridspace">
                
            </div>
        </Grid>
    </Grid>

</>

    );
}

export default ContactGallery;