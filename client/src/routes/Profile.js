import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import RecordList from "../components/RecordList";
import { API_BASE } from "../constants";

export default function Profile() {
	const { user, setMessages } = useOutletContext();

	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetch(API_BASE + "/profile", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setRecords(data));
	}, []);

	if (!user) return null;

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
		if (data.record) {
			setRecords([...records, data.record]);
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
						<h2>Add a record</h2>
						<form action="/dashboard/createRecord" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
							<div className="mb-3">s
								<label htmlFor="title" className="form-label">Title</label>
								<input type="text" className="form-control" id="title" name="title" />
							</div>
							<div className="mb-3">
								<label htmlFor="caption" className="form-label">Caption</label>
								<textarea className="form-control" id="caption" name="caption"></textarea>
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
					<RecordList records={records} />
					<div className="row justify-content-center mt-5">
						<Link className="btn btn-primary" to="/feed">Return to Feed</Link>
					</div>
				</div>
			</div>
		</div>
	)
}