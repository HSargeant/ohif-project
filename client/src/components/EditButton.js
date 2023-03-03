import {Link,useNavigate} from "react-router-dom"

import { FontAwesome } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton, Tooltip} from "@mui/material";
import {FaPenSquare} from "react-icons/fa";

export default function EditButton({examId}){

  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (
      <Tooltip title="Edit Exam">
        <IconButton type="submit" onClick={handleClick}>  
          <IconContext.Provider value={{className:"EditButton"}}>
            <FaPenSquare/>
          </IconContext.Provider>
        </IconButton>
      </Tooltip>
      
    );
 }