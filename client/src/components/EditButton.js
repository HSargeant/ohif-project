import {useNavigate} from "react-router-dom"
import {IconContext} from "react-icons";
import {IconButton, Tooltip} from "@mui/material";
import {FaPenSquare} from "react-icons/fa";

export default function EditButton({examId,fromExamsPage}){
  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (fromExamsPage ? (
      <Tooltip title="Edit Data" placement="bottom">
        <IconButton disableElevation
      disableRipple
      size="small"
      sx={{
        ml: 1,
        "&.MuiButtonBase-root:hover": {
          bgcolor: "transparent"
        }
      }}
      style={{width:"30%"}} >  
          <IconContext.Provider value={{className:"EditButton"}}>
            <FaPenSquare type="submit" onClick={handleClick} style={{cursor:"pointer"}} />
          </IconContext.Provider>
        </IconButton>
      </Tooltip>
      
    ) : (
      <Tooltip title="Edit Data" placement="bottom">
        <IconButton type="submit" onClick={handleClick} style={{cursor:"pointer"}} >  
          <IconContext.Provider value={{className:"EditButton"}}>
            <FaPenSquare/>
          </IconContext.Provider>
        </IconButton>
      </Tooltip>
    )

    )
 }