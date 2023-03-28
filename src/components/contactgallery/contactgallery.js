import React from "react";
import './contactgallery.css'


function ContactGallery() {
    return (  

        <>
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

    <Grid>
        <Grid item xs={12}>
        
            <div className="gridspace">
                <LogoButton />
            </div>
        </Grid>
    </Grid>

</>

    );
}

export default ContactGallery;