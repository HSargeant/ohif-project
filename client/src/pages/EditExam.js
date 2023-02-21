// page to edit
import { API_BASE } from "../constants";
import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext,useParams } from "react-router-dom";


export default function EditExam(){
    // const { user, setMessages } = useOutletContext();
    // const navigate = useNavigate()
    // const examId = useParams().id
    // const [bmi,setBmi] = useState("")
    // const [age,setAge] = useState("")
    // const [sex,setSex] = useState("")
    // const [id,setId] = useState("")
    // const [patientId,setPatientId] = useState("")
    // const [brixiaScores,setBrixiaScores] = useState("")
    // const [weight,setWeight] = useState("")
    // const [icu,setIcu] = useState("")
    // const [icuAdmits,setIcuadmits] = useState("")
    // const [zipCode,setZipcode] = useState("")
    // const [mortality,setMortality] = useState("")
    // const [keyFindings,setKeyfindings] = useState("")

    // useEffect(()=>{
    //     const getData = async ()=>{ 
    //         const res = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
    //         const data = await res.json()
    //         setKeyfindings(data.keyFindings)
    //         setAge(data.age)
    //         setBmi(data.bmi)
    //         setMortality(data.mortality)
    //         setZipcode(data.zipCode)
    //         setIcu(data.icu)
    //         setIcuadmits(data.icuAdmits)
    //         setBrixiaScores(data.brixiaScores)
    //         setWeight(data.weight)
    //         setId(data.examId)
    //         setPatientId(data.patientId)
    //         setSex(data.sex)

    //     }
	// 	getData()
        
    // },[])
    // let handleSubmit = async (event) => {
    //     try{
    //         event.preventDefault();
    //         const form = event.currentTarget;
    //         const response = await fetch(API_BASE + form.getAttribute('action'), {
    //             method: form.method            });
    //         const record = await response.json();
    //         console.log(record)
    //     }catch(err){
    //         console.log("Error:" ,err)
    //     }
	// 	// if (data.messages) setMessages(data.messages);
    //     // navigate(-1)
    // };
    return (
        <></>
        // <div className="ExamForm">
        //     <form action={`/api/exams/edit/${examId}?_method=PUT`} method="POST" onSubmit={handleSubmit}>
        //         <div className="formFunction">
        //             <input type="reset" placeholder="RESET" />
        //             <a href="/"> CANCEL </a>
        //         </div>

        //         <label> Patient ID</label>
        //         <input type="text" defaultValue={patientId} name="patientId"/>

        //         <label> Exam ID</label>
        //         <input type="text" defaultValue={id} name="examId"/>

        //         <div className="row2">
        //             <label> Patient's Age</label>
        //             <input type="number" defaultValue={age} min="0" max="112" name="age"/>


        //             <label> Patient's Sex </label>
        //             <select value={sex} name="sex">
        //                 <option value="F">M</option>
        //                 <option  value="F">F</option>
        //             </select>
        //             <label> Patient's Weight</label>
        //             <input type="text" defaultValue={weight} name="weight"/>

        //             <label> icu </label>
        //             <select value={icu} name="icu">
        //                 <option value="Y">Y</option>
        //                 <option value="N">N</option>
        //             </select>
        //             <label> icu admits </label>
        //             <input type="text" defaultValue={icuAdmits} name="icuAdmits" />
        //         </div>

        //         <div className="row3">
        //             <label> BMI</label>
        //             <input type="text" defaultValue={bmi} name="bmi"/>
        //             <label> Brixia Score</label>
        //             <input type="text" defaultValue={brixiaScores} name="brixiaScores"/>

        //             <label> Patient's ZipCode </label>
        //             <input type="text" defaultValue={zipCode} name="zipCode"/>
        //             <label> mortality </label>
        //             <select value={mortality} name="mortality">
        //                 <option selected value="Y">Y</option>
        //                 <option value="N">N</option>
        //             </select>
        //         </div>

        //         <div className="row4">
        //             <label> Key Findings </label>
        //             <textarea defaultValue={keyFindings} name="keyFindings"/>
        //         </div>

        //         <div className="row5">
        //             <label> X-ray Image  </label>
        //             <input accept="image/*" type="file" name="file"/>
        //         </div>

        //         <input type="submit" value="Update Exam" />
        //         {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
        //         {/* <div className="message">{console.log("hhhnnnnnnehe")}</div> */}
        //     </form>
        // </div >
    )
}