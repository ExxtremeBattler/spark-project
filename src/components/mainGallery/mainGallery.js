import React from 'react';
import Grid from '@mui/material/Grid';
import './mainGallery.css'
import MainButton from '../button/button';


function MainGallery() {
    return ( 
    <>

        <Grid>
            <Grid item xs={12}>
                
                <div className="gridspace"><MainButton text='' /></div>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton text='Writing Prompts' /></div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton text='Drawing prompts' /></div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton text='Coding Prompts' /></div>
            </Grid>
        </Grid>
    </>
    );
}

export default MainGallery; 