import {Link,useNavigate} from "react-router-dom"

import { FontAwesome } from "react-icons/fa";
import {IconContext} from "react-icons";
import {IconButton} from "@mui/material";
import {PenToSquare} from "react-icons/fa";

export default function EditButton({examId}){

  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (
      // <div onClick={handleClick} className="EditButton" style={{cursor:"pointer"}}>
      //  Edit
      // </div>
      <IconButton type="submit" onClick={handleClick}>  
          <IconContext.Provider value={{ color: "black"}}>
            <PenToSquare/>
          </IconContext.Provider>
        </IconButton>
    );
 }