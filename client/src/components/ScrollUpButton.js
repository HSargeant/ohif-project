import React, {useState} from 'react';

export default function ScrollUpButton() {
    const [visible, setVisible] = useState(false)
  
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
            <button className="UpBotton" onClick={scrollToTop} style={{width:"50px",height:"30px"}}> up </button>
            {/* <IconButton type="submit">  
            <IconContext.Provider value={{ color: "black"}}>
                <FaTrash />
                </IconContext.Provider>
            </IconButton> */}
        </div>
  );
}

// <Button>
//  <FaArrowCircleUp onClick={scrollToTop} 
//  style={{display: visible ? 'inline' : 'none'}} />
// </Button>