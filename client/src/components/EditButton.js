import {Link,useNavigate} from "react-router-dom"

import { FontAwesome } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton} from "@mui/material";
import {FaPenSquare} from "react-icons/fa";

export default function EditButton({examId}){

  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (
      <IconButton type="submit" onClick={handleClick} style={{cursor:"pointer"}}>  
          <IconContext.Provider value={{className:"EditButton"}}>
            <FaPenSquare/>
          </IconContext.Provider>
        </IconButton>
    );
 }