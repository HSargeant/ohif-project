import {Link} from "react-router-dom"

export default function ExamList ({ exams }){
    return(
        <ul className="row list-unstyled">
	        {exams.map(exam=> <Link to={`/exams/${exam._id}`}  state={{exam}}><li key={exam.patientId}>{exam.patientId}</li></Link>
            )}
        </ul>

    )
}