import {FaTrash} from "react-icons/fa"
import { API_BASE } from "../constants";
import { useNavigate } from "react-router-dom";
import {IconButton} from "@mui/material"
import { IconContext } from "react-icons";

export default function DeleteButton({examId}){

const navigate = useNavigate()

  const handleDelete = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		await fetch(form.getAttribute('action'), {
			method: form.method,
			credentials: "include"
		});
		navigate(-1);
	};

    return (
      <form
        action={API_BASE+`/api/exams/deleteExam/${examId}?_method=DELETE`}
        method="POST"
        className="col-3"
        onSubmit={handleDelete}
      >
        <IconButton type="submit">  
          <IconContext.Provider value={{ className:"DeleteButton"}}>
            <FaTrash />
          </IconContext.Provider>
        </IconButton>
        {/* above i used react icons to put in a trash can and wrapped it in the material ui iconButton wrapper to give it a button functionality. for style and postitioning you can wrap the form in a div give it a class and position as needed. and pass in size changes to the IconContext.provider wrapper to change color and size */}
      </form>
    );
 }