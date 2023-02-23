import {FaTrash} from "react-icons/fa"
import { API_BASE } from "../constants";
import { useNavigate } from "react-router-dom";

export default function DeleteButton({examId}){
const navigate = useNavigate()
  const handleDelete = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			credentials: "include"
		});
		navigate(-1);
	};

    return (
      <form
        action={`/api/exams/deleteExam/${examId}?_method=DELETE`}
        method="POST"
        className="col-3"
        onSubmit={handleDelete}
      >
        <FaTrash type="submit"/>
      </form>
    );
 }