import React, {useState} from 'react';
import {MdKeyboardArrowUp} from "react-icons/md"
import {IconButton} from "@mui/material"
import { IconContext } from "react-icons";

export default function ScrollUpButton() {
    const [visible, setVisible] = useState(false);
  
    const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
        setVisible(true)
    } 
    else if (scrolled <= 300){
        setVisible(false)
    }
    };
  
    const scrollToTop = () =>{
    window.scrollTo({
        top: 0, 
        behavior: 'smooth' // or "auto"
    });
    };
  
    window.addEventListener('scroll', toggleVisible);
    return (
        <div className="UpBottonDiv">

            <IconButton onClick={scrollToTop} >  
                <IconContext.Provider value={{ color: "black",size: 40}}>
                    <MdKeyboardArrowUp  />
                </IconContext.Provider>
            </IconButton> 
        </div>
  );
}

// <Button>
//  <FaArrowCircleUp onClick={scrollToTop} 
//  style={{display: visible ? 'inline' : 'none'}} />
// </Button>