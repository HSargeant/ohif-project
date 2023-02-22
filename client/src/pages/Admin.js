import { useState } from "react";


// user page where they will see all of their created exams
export default function Admin() {
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

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {

            let res = await fetch("https://httpbin.org/post", {
                method: "POST",
                body: JSON.stringify({
                    patientId: patientId,
                    exam: ExamID,
                    age: age,
                    bmi: BMI,
                    brixiaScores: brixiaScores,
                    imageURL: imageURL,
                    keyFindings: keyFindings,
                    sex: sex,
                    zipCode: zipCode,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                //setPatientId("");
                setExam("");

                // setEmail("");
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="ExamForm">
            <form action="/api/exams/createExam" encType="multipart/form-data" method="POST" onSubmit={handleSubmit}>
                <div className="formFunction">
                    <input type="reset" placeholder="RESET" />
                    {/* <input onclick="google.com" type="reset" value="CANCEL" /> */}
                    <a href="/"> CANCEL </a>
                </div>


                {/* value={patientId} */}

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
            </form>
        </div >
    )
}

// function handleSubmit() {

//     alert("hi");
//     // on sucess let user know that exam was submited right
// } 

