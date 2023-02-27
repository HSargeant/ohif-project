import { BiArrowBack } from "react-icons/bi"; 
import { Link, useNavigate} from "react-router-dom";

import { FontAwesome } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton} from "@mui/material";

const AllDataButton = () => {
    const navigate = useNavigate()
    const handleClick=()=>navigate("/exams")
    return (
        <div onClick={handleClick} style={{cursor:"pointer"}}>
            <IconContext.Provider value={{ className:"backButton"}}>
            <div>
                <BiArrowBack/>
            </div>
            </IconContext.Provider>
        </div>
    );
}
export default AllDataButton