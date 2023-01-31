import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ExamList from "../components/ExamList";
import { API_BASE } from "../constants";

export default function Profile() {
	const { user, setMessages } = useOutletContext();

	const [exams, setExams] = useState([]);

	useEffect(() => {
		fetch(API_BASE + "/api/profile", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setExams(data));
	}, []);

	if (!user) return null; //use navigate or redirect to send to login page

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new FormData(form),
			credentials: "include"
		});
		const data = await response.json();
		if (data.messages) setMessages(data.messages);
		if (data.exam) {
			setExams([...exams, data.exam]);
			form.reset();
		}
	};
	return (
		<div className="container">
			<div className="row mt-5">
				<div className="col-6">
					<div>
						<p><strong>User Name</strong>: {user.userName}</p>
						<p><strong>Email</strong>: {user.email}</p>
						<Link to="/logout" className="col-3 btn btn-primary">Logout</Link>
					</div>
					<div className="mt-5">
						<h2>Add a exam</h2>
						<form action="/api/exams/createExam" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="title" className="form-label">Patient ID</label>
								<input type="text" className="form-control" id="patientId" name="patientId" />
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Age</label>
								<input type="text" className="form-control" id="age" name="age"/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">ZIP Code</label>
								<input type="text" className="form-control" id="zipCode" name="zipCode"/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Sex</label>
								<input type="text" className="form-control" id="sex" name="sex"/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">BMI</label>
								<input type="text" className="form-control" id="bmi" name="bmi"/>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Key Findings</label>
								<textarea className="form-control" id="keyFindings" name="keyFindings"></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Brixia Scores</label>
								<textarea className="form-control" id="brixiaScores" name="brixiaScores"></textarea>
							</div>
							<div className="mb-3">
								<label htmlFor="imgUpload" className="form-label">Image</label>
								<input type="file" className="form-control" id="imageUpload" name="file" />
							</div>
							<button type="submit" className="btn btn-primary" value="Upload">Submit</button>
						</form>
					</div>
				</div>
				<div className="col-6">
					<ExamList exams={exams} />
					<div className="row justify-content-center mt-5">
						<Link className="btn btn-primary" to="/exams">Return to Feed</Link>
					</div>
				</div>
			</div>
		</div>
	)
}