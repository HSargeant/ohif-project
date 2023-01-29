import { useEffect, useState } from "react";
import RecordList from "../components/RecordList";
import { API_BASE } from "../constants";

export default function Feed() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		fetch(API_BASE + "/api/feed", { credentials: "include" })
			.then((res) => res.json())
			.then((data) => setRecords(data));
	}, []);
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h2 style={{ textAlign: 'center' }}>Feed</h2>
				<RecordList records={records} />
			</div>
		</div>
	)
}