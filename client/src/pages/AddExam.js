// page to add new exam

import { API_BASE } from "../constants";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function AddExam() {
    const [patientId, setPatientId] = useState("");
    const [ExamID, setExam] = useState("");
    const [age, setAge] = useState("");
    const [BMI, setBMI] = useState("");
    const [brixiaScores, setBrixiaScores] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [keyFindings, setKeyFindings] = useState("");
    const [sex, setSex] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (event) => {
        event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new FormData(form),
			credentials: "include"
		});
		const json = await response.json();
		if (json.messages) setMessages(json.messages);
		if (json.post) {
			setPosts([...posts, json.post]);
			form.reset();
		}
    };
    console.log(message);
    return (
        <div className="ExamForm">
            <form action="/api/exams/new" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                <div className="formFunction">
                    <input type="reset" placeholder="RESET" />
                    <a href="/"> CANCEL </a>
                </div>

                <label> Patient ID</label>
                <input type="text" placeholder="Patient ID..." />

                <label> Exam ID</label>
                <input type="text" placeholder="Exam ID..." />

                <div className="row2">
                    <label> Patient's Age</label>
                    <input type="number" placeholder="Age" min="0" max="112" />


                    <label> Patient's Sex </label>
                    <input type="select" placeholder="Sex" />

                    <label> Date </label>
                    <input type="date" placeholder="Date of Exam" />
                </div>

                <div className="row3">
                    <label> Brixia Score</label>
                    <input type="text" placeholder="Brixia Score..." />

                    <label> Patient's ZipCode </label>
                    <input type="text" placeholder="zip code" />
                </div>

                <div className="row4">
                    <label> Key Finding </label>
                    <textarea placeholder="Please note any key findings" />
                </div>

                <div className="row5">
                    <label> X-ray Image  </label>
                    <input accept="image/*" type="file" />
                </div>

                <input type="submit" value="Create Exam" />
                <div className="message">{message ? <p>{message}</p> : null}</div>
                {/* <div className="message">{console.log("hhhnnnnnnehe")}</div> */}
            </form>
        </div >
    )
}