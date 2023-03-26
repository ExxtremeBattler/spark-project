// Source: https://mui.com/material-ui/react-grid/
// Docs: https://mui.com/material-ui/api/grid/

import React from 'react';
import Grid from '@mui/material/Grid';
import WritingOptionCard from '../WritingOptionCard';
import './Gallery.css'
//importing prompts from JSONs
import genres from '../../prompts/writing-prompts-genres.json'
import locations from '../../prompts/writing-prompts-locations.json'
import weather from '../../prompts/writing-prompts-weather.json'
import objects from '../../prompts/writing-prompt-objects.json'
import era from '../../prompts/writing-prompts-era.json'
import country from '../../prompts/writing-prompts-country.json'



function Gallery() {
    //extracting random prompts
    const genrePrompt = genres[Math.floor(Math.random()*genres.length)]
    const locationPrompt = locations[Math.floor(Math.random()*locations.length)]
    const weatherPrompt = weather[Math.floor(Math.random()*weather.length)]
    const objectPrompt = objects[Math.floor(Math.random()*objects.length)]
    const eraPrompt = era[Math.floor(Math.random()*era.length)]
    const countryPrompt = country[Math.floor(Math.random()*country.length)]

    return ( 
        <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                        text="Genre"
                        prompt={genrePrompt}
                    />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                    text="Location" 
                    prompt={locationPrompt}
                    />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                    text="Weather" 
                    prompt={weatherPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                    text="Random Object" 
                    prompt={objectPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                    text="Era" 
                    prompt={eraPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={4} md={4}>
                <div className="gridspace">
                    <WritingOptionCard 
                    text="Country"
                    prompt={countryPrompt} 
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default Gallery;