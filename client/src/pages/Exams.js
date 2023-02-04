import { useEffect, useState } from "react";
import ExamList from "../components/ExamList";
import { API_BASE } from "../constants";

export default function Exams() {
	const [exams, setExams] = useState([]);
	const [examData,setExamData] = useState([])

	useEffect(()=>{
		const getData= async ()=>{
			const res1 = await fetch(API_BASE + "/api/exams", { credentials: "include" })
			const data1= await res1.json()
			// const res2= await fetch("https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams") //took ouu temporarily because links was down

			// const data2= await res2.json()
			setExams([...data1])
		}
		getData()
	},[])
	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<h2 style={{ textAlign: 'center' }}>Exams</h2>
				<ExamList exams={exams} />
				{/* <ExamList exams={examData} /> */}
			</div>
		</div>
	)
}