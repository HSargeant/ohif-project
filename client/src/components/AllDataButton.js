import { BiArrowBack } from "react-icons/bi"; 
import { Link, useNavigate} from "react-router-dom";

import { FontAwesome } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton, Tooltip} from "@mui/material";

const AllDataButton = () => {
    const navigate = useNavigate()
    const handleClick=()=>navigate("/exams")
    return (
        <Tooltip title="Back to All Datta" placement="right">
            <IconButton type="submit" onClick={handleClick}>  
                <IconContext.Provider value={{ className:"backButton"}}>
                    <BiArrowBack/>
                </IconContext.Provider>
            </IconButton>
        </Tooltip>
    );
}
export default AllDataButton