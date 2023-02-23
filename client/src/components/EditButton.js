import {Link,useNavigate} from "react-router-dom"

export default function EditButton({examId}){

  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (
     <div>
      <div onClick={handleClick} className="EditButton" style={{cursor:"pointer"}}>
       {/* <button type="button"> Edit exam</button> */}
       Edit
       {/* instead   */}
       </div>
     </div>
    );
 }