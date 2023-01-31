import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams,useLocation } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Exam() {
	const location = useLocation();
	const { user } = useOutletContext();
	const examId = useParams().id;
	console.log(examId,"examid")
	const navigate = useNavigate();
	const [exam, setExam] = useState();

	async function getData(){
		const res1 = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
		const data1= await res1.json()
		const res2= await fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams")
		const data2= await res2.json()
		const data2Exam = await data2.exams.find(elem=>elem._id==examId)
		// console.log(data1,"data from db")
		// console.log(data2Exam, "data from api",!data2Exam)
		setExam(data1 || data2Exam)
	}
	useEffect(() => {
		getData()
	}, [examId,setExam]);
	console.log(exam)
	if (exam === undefined) return null;
	//  if (!exam) return <h2>Loading...</h2>;
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
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-6">
					<h2>{exam.patientId}</h2>
					<img className="img-fluid" src={exam.imageURL}/>
					<table>
						<th>
							<tr>
								<td>{exam.age}</td>
							</tr>
						</th>
					</table>
					<div className="row justify-content-between">
						{exam.user === user._id && (
							<form
								action={`/api/exams/deleteExam/${exam._id}?_method=DELETE`}
								method="POST"
								className="col-3"
								onSubmit={handleDelete}
							>
								<button className="btn btn-primary fa fa-trash" type="submit"></button>
							</form>
						)}
					</div>
				</div>
				<div className="col-6 mt-5">
					<Link className="btn btn-primary" to="/profile">Return to Profile</Link>
					<Link className="btn btn-primary" to="/feed">Return to Feed</Link>
				</div>
			</div>
		</div>
	)
}