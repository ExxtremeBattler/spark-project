// Source: https://mui.com/material-ui/react-grid/
// Docs: https://mui.com/material-ui/api/grid/

import React from 'react';
import Grid from '@mui/material/Grid';
import './Gallery.css'

function Gallery() {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">Card goes here</div>
            </Grid>
        </Grid>
     );
}

export default Gallery;