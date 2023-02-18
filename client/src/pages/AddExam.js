// page to add new exam

import { API_BASE } from "../constants";
import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

export default function AddExam() {
    // const { user, setMessages } = useOutletContext();
    const navigate = useNavigate()




    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            const form = event.currentTarget;
            const response = await fetch(API_BASE + form.getAttribute('action'), {
                method: form.method,
                body: new FormData(form),
                credentials: "include"
            });
            const data = await response.json();
        }catch(err){
            console.log("Error:" +err)
        }
		// if (data.messages) setMessages(data.messages);
        navigate(-1)
    };
    // console.log(message);
    return (
        <div className="ExamForm">
            <form action="/api/exams/new" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                <div className="formFunction">
                    <input type="reset" placeholder="RESET" />
                    <a href="/"> CANCEL </a>
                </div>

                <label> Patient ID</label>
                <input type="text" placeholder="Patient ID..." name="patientId"/>

                <label> Exam ID</label>
                <input type="text" placeholder="Exam ID..." name="examId"/>

                <div className="row2">
                    <label> Patient's Age</label>
                    <input type="number" placeholder="Age" min="0" max="112" name="age"/>


                    <label> Patient's Sex </label>
                    <select name="sex">
                        <option disabled selected>Male or Female</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                    <label> Patient's Weight</label>
                    <input type="text" placeholder="Weight" name="weight"/>

                    <label> icu </label>
                    <select name="icu">
                        <option disabled selected>Y/N</option>
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                    </select>
                    <label> icu admits </label>
                    <input type="text"  name="icuAdmits" />
                </div>

                <div className="row3">
                    <label> BMI</label>
                    <input type="text" placeholder="BBMI..." name="bmi"/>
                    <label> Brixia Score</label>
                    <input type="text" placeholder="Brixia Score..." name="brixiaScores"/>

                    <label> Patient's ZipCode </label>
                    <input type="text" placeholder="zip code" name="zipCode"/>
                    <label> mortality </label>
                    <select name="mortality">
                        <option disabled selected>Y/N</option>
                        <option value="Y">Y</option>
                        <option value="N">N</option>
                    </select>
                </div>

                <div className="row4">
                    <label> Key Findings </label>
                    <textarea placeholder="Please note any key findings" name="keyFindings"/>
                </div>

                <div className="row5">
                    <label> X-ray Image  </label>
                    <input accept="image/*" type="file" name="file"/>
                </div>

                <input type="submit" value="Create Exam" />
                {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
                {/* <div className="message">{console.log("hhhnnnnnnehe")}</div> */}
            </form>
        </div >
    )
}