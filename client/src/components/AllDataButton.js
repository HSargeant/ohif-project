import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate} from "react-router-dom";

const AllDataButton = () => {
    const navigate = useNavigate()
    const handleClick=()=>navigate("/exams")
    return (
        <div onClick={handleClick} style={{cursor:"pointer"}}>
            <div className="ButtonBundle">
                <a> Return to All Data </a>
            </div>
        </div >
    );
}
export default AllDataButton

// I added edits so that the whole return to all exams button is clickable. 
// left the a tag around return to all data becuase mucteba styled the tags to 
// be black and i didnt want to channge css file. we can clean up later.  - HS