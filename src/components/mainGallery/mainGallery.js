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
                
                <div className="maingridspace" id='sparklogodiv'>
                    <LogoButton />
                </div>
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <div className="maingridspace">
                    <MainButton 
                        href="Writing" 
                        text='Writing Prompts' dialogTitleforTarget='Writing Prompts'
                        dialogTextforTarget='Create a short story using up to seven prompts. Click on the prompts of your choosing and then start writing!'
                        icon=<HistoryEduIcon sx={{ fontSize: 80 }} /> />
                </div>
            </Grid>
            <Grid item xs={12} md={4}>
                <div className="maingridspace">
                    <MainButton 
                    href= "Drawing" 
                    text='Drawing prompts' 
                    dialogTitleforTarget='Drawing Prompts'
                    dialogTextforTarget='You have a choice of 3 time periods. Two random pictures will show up on the screen - your job is to combine the two before the counter reaches 0. Good luck!'
                    icon=<ColorLensIcon sx={{ fontSize: 80 }}/> /></div>
            </Grid>
            <Grid item xs={12} md={4} >
                <div className="maingridspace">
                    <MainButton 
                    href= "Coding" 
                    text='Coding Prompts' 
                    dialogTitleforTarget='Coding Prompts'
                    dialogTextforTarget='Do you find yourself wanting to code but not knowing what to create? The go to our coding prompts section to be given project ideas based on your experiance level'
                    icon=<CodeIcon sx={{ fontSize: 80 }}/> /></div>
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