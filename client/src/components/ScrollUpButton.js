import React, {useState} from 'react';
import {MdKeyboardArrowUp} from "react-icons/md"
import {IconButton,Tooltip} from "@mui/material"
import { IconContext } from "react-icons";

export default function ScrollUpButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
    const scrolled = window.document.documentElement.scrollTop;
    if (scrolled > 300){
        setVisible(true);
    } 
    else if (scrolled <= 300){
        setVisible(false);
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
        <>
            {visible && <div className="UpBottonDiv">
                <Tooltip title="Back to Top">
                    <IconButton onClick={scrollToTop} aria-label="Back To Top" >  
                        <IconContext.Provider value={{ className:'UpBotton'}}>
                            <MdKeyboardArrowUp  />
                        </IconContext.Provider>
                    </IconButton> 
                </Tooltip>
            </div>}
        </>
    );
}