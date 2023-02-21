import {Link} from "react-router-dom"

export default function EditButton({examId}){
    return (
     <div>
      <div className="EditButton">
      <Link to ={`/exams/edit/${examId}`}>
       <button type="button"> Edit exam</button>
       </Link>
       </div>
     </div>
    );
 }