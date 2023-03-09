import {FaTrash} from "react-icons/fa"
import { API_BASE } from "../constants";
import { useNavigate } from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material"
import { IconContext } from "react-icons";

export default function DeleteButton({examId,fromExamsPage,setExams,exams}){

const navigate = useNavigate()

  const handleDelete = async (event) => {
		event.preventDefault();
    const confirm = window.confirm("Are you sure you want to delete this record?")
		if(confirm){
      try{
        const form = event.currentTarget;
        await fetch(form.getAttribute('action'), {
          method: form.method,
          credentials: "include"
        });
        if(fromExamsPage){
          // navigate(0)
          setExams(exams.filter(exam=>exam._id!==examId))
        }else navigate("/exams")

      }catch(err){
        console.log(err)
        if(fromExamsPage){
          navigate(0)
        }else navigate("/exams")
      }
    }else return

	};

    return (
      <form
        action={API_BASE+`/api/exams/deleteExam/${examId}?_method=DELETE`}
        method="POST"
        className="col-3"
        onSubmit={handleDelete}
      >
        {fromExamsPage?(
        <Tooltip title="Delete Data" placement="bottom">
          <IconButton type="submit" 
          disableElevation
              disableRipple
              size="small"
              sx={{
                ml: 1,
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "transparent"
                }
              }}
              style={{width:"55%"}}
          >  
            <IconContext.Provider value={{ className:"DeleteButton"}}>
              <FaTrash />
            </IconContext.Provider>
          </IconButton>
        </Tooltip>
        ):(
          <Tooltip title="Delete Data" placement="bottom">
            <IconButton type="submit">  
              <IconContext.Provider value={{ className:"DeleteButton"}}>
                <FaTrash />
              </IconContext.Provider>
            </IconButton>
          </Tooltip>
        )}
        {/* above i used react icons to put in a trash can and wrapped it in the material ui iconButton wrapper to give it a button functionality. for style and postitioning you can wrap the form in a div give it a class and position as needed. and pass in size changes to the IconContext.provider wrapper to change color and size */}
      </form>
    );
 }