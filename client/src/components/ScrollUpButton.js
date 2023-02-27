import React, {useState} from 'react';

import { FontAwesome } from "react-icons/fa";
import {FaAngleUp} from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton} from "@mui/material";

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
        <div>
            <IconContext.Provider value={{ className:"UpBotton"}}>
            <div>
                <FaAngleUp/>
            </div>
            </IconContext.Provider>
        </div>
  );
}