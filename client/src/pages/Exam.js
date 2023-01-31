import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Exam() {
	const { user } = useOutletContext();
	console.log(user)
	const examId = useParams().id;
	const navigate = useNavigate();
	const [exam, setExam] = useState({});
	async function getData(){
		const res1 = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
		const data1= await res1.json()
		setExam(data1)
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
						{exam.user === user._id ? (
							<form
								action={`/api/exams/deleteExam/${exam._id}?_method=DELETE`}
								method="POST"
								className="col-3"
								onSubmit={handleDelete}
							>
								<button className="btn btn-primary fa fa-trash" type="submit"></button>
							</form>
						):""}
					</div>
				</div>
				<div className="col-6 mt-5">
					<Link className="btn btn-primary" to="/profile">Return to Profile</Link>
					<Link className="btn btn-primary" to="/exams">Return to Feed</Link>
				</div>
			</div>
		</div>
	)
}