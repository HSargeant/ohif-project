import {Link,useNavigate} from "react-router-dom"

export default function EditButton({examId}){

  const navigate=useNavigate()
  const handleClick=()=>navigate(`/exams/edit/${examId}`)
    return (
      <div onClick={handleClick} className="EditButton" style={{cursor:"pointer"}}>
       Edit
      </div>
      // <IconButton type="submit">  
      //     <IconContext.Provider value={{ color: "black"}}>
      //       <FaTrash />
      //     </IconContext.Provider>
      //   </IconButton>
    );
 }