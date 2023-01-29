import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Record() {
	const { user } = useOutletContext();
	const recordId = useParams().id;
	const navigate = useNavigate();

	const [record, setRecord] = useState();

	useEffect(() => {
		fetch(API_BASE + `/api/record/${recordId}`, { credentials: "include" })
			.then((res) => res.json())
			.then(({ record }) => {
				setRecord(record);
			});
	}, [setRecord, recordId]);

	if (record === undefined) return null;
	else if (record === null) return <h2>Record not found</h2>;

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
					<h2>{record.patientId}</h2>
					<img className="img-fluid" src={record.imageURL}/>
					<div className="row justify-content-between">
						{record.user === user._id && (
							<form
								action={`/dashboard/deleteRecord/${record._id}?_method=DELETE`}
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