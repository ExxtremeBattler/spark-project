// Source: https://mui.com/material-ui/react-grid/
// Docs: https://mui.com/material-ui/api/grid/

import React from 'react';
import Grid from '@mui/material/Grid';
import WritingOptionCard from '../WritingOptionCard';
import './Gallery.css'

function Gallery() {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Genre" /></div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Location" /></div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Weather" /></div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Random Object" /></div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Era" /></div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace"><WritingOptionCard text="Country" /></div>
            </Grid>
        </Grid>
    );
}

export default Gallery;