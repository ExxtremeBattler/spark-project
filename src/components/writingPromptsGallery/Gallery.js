// Source: https://mui.com/material-ui/react-grid/
// Docs: https://mui.com/material-ui/api/grid/

import React from 'react';
import Instructions from './Instructions';
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
import Footer from '../../components/footer/footer'



function Gallery() {
    //extracting random prompts
    const genrePrompt = genres[Math.floor(Math.random()*genres.length)]
    const locationPrompt = locations[Math.floor(Math.random()*locations.length)]
    const weatherPrompt = weather[Math.floor(Math.random()*weather.length)]
    const objectPrompt = objects[Math.floor(Math.random()*objects.length)]
    const eraPrompt = era[Math.floor(Math.random()*era.length)]
    const countryPrompt = country[Math.floor(Math.random()*country.length)]


    //each grid square contains the card that holds the prompt
    return ( 
        <>
        <body className='writing-body'>
        <Instructions />
        <Grid className="gallery-gridcontainer" container spacing={1}>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                        text="GENRE"
                        prompt={genrePrompt}
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                    text="LOCATION" 
                    prompt={locationPrompt}
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                    text="WEATHER" 
                    prompt={weatherPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                    text="RANDOM OBJECT" 
                    prompt={objectPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                    text="ERA" 
                    prompt={eraPrompt} 
                    />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <div className="gallery-gridspace">
                    <WritingOptionCard 
                    text="COUNTRY"
                    prompt={countryPrompt} 
                    />
                </div>
            </Grid>
        </Grid>
    </body>

    <Footer />

    </>
    );
}

export default Gallery;