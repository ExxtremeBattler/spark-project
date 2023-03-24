import React from "react";
import { Typography } from "@mui/material";
import './footer.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Footer (){

    return (
        <div className="footer">

            <Typography align='center' sx={{marginTop:'5px'}}>
                Made with < FavoriteBorderIcon sx={{marginTop:'5px'}}/>
            </Typography>
            

            <Typography variant='h6' align='center'>
            
            ExxtremeBattler & jh871 & NCStorey 
            
            </Typography>
            
            </div>
    )
}

export default Footer