import React, {useState} from 'react';
import { animated, useSpring } from '@react-spring/web';
import './button.css'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography} from '@mui/material';
import { fontSize } from '@mui/system';



function MainButton(props) {

    const [springs, api] = useSpring(() => ({
        from: { y: 0, rotate: 0 },
      }))

      const handleHover = () => {
        api.start({
            loop: { reverse: false },
            from: { y: 0, rotate: 0 },
            to: { y: 0, rotate: 360 },
            config: { duration: 800 }
        })
      }
    
    const [open, setOpen] = useState(false);



    return (
        <>
        <div>
          <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>
              <Typography sx={{fontFamily:'Delicious Handrawn', fontSize:50}}>
                {props.dialogTitleforTarget}
              </Typography>
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {props.dialogTextforTarget}
              </DialogContentText>
            </DialogContent>
              <DialogActions>
                <Button onClick={()=>setOpen(false)}>Close</Button>
                <Button href={props.href} onClick={()=>setOpen(false)}>Let's Go!</Button>
              </DialogActions>

          </Dialog>
        </div>
        <animated.button style={{...springs}} onMouseEnter={handleHover} className='mainbutton' onClick={()=>setOpen(true)}>
          <div>
            {props.icon}
          </div>
            {props.text}
        </animated.button>
        </>
)}

export default MainButton;