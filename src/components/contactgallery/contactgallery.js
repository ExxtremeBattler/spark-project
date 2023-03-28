import React from "react";
import './contactgallery.css';
import Grid from '@mui/material/Grid';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';




function ContactGallery() {
    return (  

        <>
    <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
            <div className="contactgridspace">
                <div id="battler" className="profilepic"></div>
                <div className="githubdiv"> GitHub </div>
                <a className="githublink" href="https://github.com/ExxtremeBattler">ExxtremeBattler</a>
            </div>
        </Grid>
        <Grid item xs={12} md={4}>
            <div className="contactgridspace">
                <div id='jh871' className="profilepic"></div>
                <div className="name">Jenny Hull</div>
                <div className="githubdiv"> GitHub </div>
                <a className="githublink" href="https://github.com/jh871">JH871</a>
            </div>
        </Grid>
        <Grid item xs={12} md={4} >
            <div className="contactgridspace">
                <div id='ncstorey' className="profilepic"></div>
                <div className="name">Nathalie storey</div>
                <div className="githubdiv"> GitHub </div>
                <a className="githublink" href="https://github.com/NCStorey">NCStorey</a>
            </div>
        </Grid>
    </Grid>

    <Grid>
        <Grid item xs={12}>
        
            <div className="contactgridspace">
                <div className="profilepic" id='spark'>
                    <LightbulbOutlinedIcon sx={{fontSize: 150}}/>
                </div>
                    <a className="name" href="https://github.com/ExxtremeBattler/spark-project.git">Spark Repo</a>
                </div>
        </Grid>
    </Grid>

</>

    );
}

export default ContactGallery;

