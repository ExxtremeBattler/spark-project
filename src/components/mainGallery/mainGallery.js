import React from 'react';
import Grid from '@mui/material/Grid';
import './mainGallery.css'
import MainButton from '../button/button';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';


function MainGallery() {
    return ( 
    <>

        <Grid>
            <Grid item xs={12}>
                
                <div className="gridspace"><MainButton text='' icon=<LightbulbOutlinedIcon sx={{ fontSize: 150 }}/> /></div>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton text='Writing Prompts' icon=<HistoryEduIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton text='Drawing prompts' icon=<ColorLensIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
            <Grid item xs={12} md={4} >
                <div className="gridspace"><MainButton text='Coding Prompts' icon=<CodeIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
        </Grid>
    </>
    );
}

export default MainGallery; 