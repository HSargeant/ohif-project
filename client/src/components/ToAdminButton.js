import { BiArrowBack } from "react-icons/bi"; 
import {useNavigate} from "react-router-dom";

import {IconContext} from "react-icons";
import {IconButton, Tooltip} from "@mui/material";

const ToAdminButton = () => {
    const navigate = useNavigate()
    const handleClick=()=>navigate("/admin")
    return (
        <Tooltip title="Back to Admin" placement="right">
            <IconButton type="submit" onClick={handleClick}>  
                <IconContext.Provider value={{ className:"backButton"}}>
                    <BiArrowBack/>
                </IconContext.Provider>
            </IconButton>
        </Tooltip>
    );
}
export default ToAdminButton