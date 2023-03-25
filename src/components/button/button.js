import * as React from 'react';
import { animated, useSpring } from '@react-spring/web';


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
    

    return (
        
        <animated.button style={{...springs}} onMouseEnter={handleHover}>
            <img src={props.src} alt=''/>
            {props.text}
        </animated.button>


       
)}

export default MainButton;