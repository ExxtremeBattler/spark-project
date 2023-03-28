import React from 'react';
import Grid from '@mui/material/Grid';
import './mainGallery.css'
import MainButton from '../button/button';
import LogoButton from '../logobutton/logobutton';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import CodeIcon from '@mui/icons-material/Code';

import Gallery from '../writingPromptsGallery/Gallery';
import CodingPromptsDifficulty from "../codingPromptsDifficulty/codingPromptsDifficulty"
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"



function MainGallery() {
    return ( 
    <>

        <Grid>
            <Grid item xs={12}>
                
                <div className="gridspace">
                    <LogoButton />
                </div>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton href="Writing" text='Writing Prompts' icon=<HistoryEduIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="gridspace"><MainButton href= "Drawing" text='Drawing prompts' icon=<ColorLensIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
            <Grid item xs={12} md={4} >
                <div className="gridspace"><MainButton href= "Coding" text='Coding Prompts' icon=<CodeIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
        </Grid>

        <Routes>
        <Route path="Writing" element = {<Gallery/>} />
        {/* <Route path= "Drawing" element = {<ProjectGallery />} /> */}
        <Route path= "Coding" element = {<CodingPromptsDifficulty/>} />
      </Routes>
    </>
    );
}

export default MainGallery; 