// page to display one exam
import '../App.css';
import '../Exams.css'
import PatientInfo from '../components/PatientInfo';
import KeyFindings from '../components/KeyFindings';
import AllDataButton from '../components/AllDataButton';
import ToAdminButton from '../components/ToAdminButton';
import Image from '../components/Image.js';
import { useState, useEffect } from 'react';
import { API_BASE } from "../constants";
import EditButton from "../components/EditButton";
import {useOutletContext, useParams,useLocation} from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

export default function Exam(){
  const { user } = useOutletContext(); // we will use this to when we set up auth to check for which user is logged in
  const location = useLocation()
  const  [exam,setExam] = useState({})
  const examId = useParams().id // used to grab the id of the exam ---- /exams/:id
  useEffect(()=>{ 
    // fetch data from api endpoint in the useEffect hook and storing result in exam variable
    const getData = async ()=>{ 
      const res = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
      const data = await res.json()
      setExam(data)
    }
		getData()
  },[])
  useEffect(()=>{  // always start at the top of the page
    window.scrollTo(0, 0); 
  },[])

  return(
    <>
      <div className="manipulateDataRow">
        <div className="gridItem"> {location.state?.fromAdmin ? <ToAdminButton/> : <AllDataButton />} </div>
        <div className="gridItem"> <h2 className='patient-id' style={{marginTop:'10px', marginBottom:'10px'}}> Patient ID: {exam.patientId} </h2> </div>
        <div className="gridItem"> {user?._id===exam?.user&&<EditButton examId={examId}/>} </div>
        <div className="gridItem"> {user?._id===exam?.user&&<DeleteButton examId={examId}/>} </div>
        <div className="gridItem"> </div>
      </div>
      
      <div className="Body">
        <div className="LeftContent">
          <Image exam={exam}/>
        </div>

        <div className="RightContent">
        <div className='gridItem2'> <PatientInfo exam={exam}/> </div>
        <div className='gridItem2'> </div><KeyFindings keyFindings={exam.keyFindings||"No releveant findings"} /> </div>
     
      </div>
    </>
  )
}
// I moved the image route logic into the image component -hs