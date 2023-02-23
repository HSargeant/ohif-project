// page to display one exam
import '../App.css';
import '../Exams.css'
import Header from '../components/Header';
import PatientInfo from '../components/PatientInfo';
import KeyFindings from '../components/KeyFindings';
import AllDataButton from '../components/AllDataButton';
import Image from '../components/Image.js';
import { useState, useEffect } from 'react';
import { API_BASE } from "../constants";
import EditButton from "../components/EditButton";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

export default function Exam(){
  // const { user } = useOutletContext(); // we will use this to when we set up auth to check for which user is logged in
  const  [exam,setExam] = useState({})
  const examId = useParams().id // used to grab the id of the exam ---- /exams/:id
	const navigate = useNavigate();
  useEffect(()=>{ // fetch data from api endpoint in the useEffect hook and storing result in exam variable
    const getData = async ()=>{ 
      const res = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
      const data = await res.json()
      setExam(data)
    }
		getData()
  },[])

  return(
    <>
      <Header />
      <AllDataButton /> 
      <EditButton examId={examId}/>
      <DeleteButton examId={examId}/>
      <div className="Body">
        <div className="LeftContent">
        <Image exam={exam}/>
        <KeyFindings keyFindings={exam.keyFindings} />
        </div>
        <div className="RightContent">
        <PatientInfo exam={exam}/>
        </div>
      </div>
    </>
  )
}
// I moved the image route logic into the image component -hs