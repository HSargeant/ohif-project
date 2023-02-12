// page to display one exam
import '../App.css';
import Header from '../components/Header';
import PatientInfo from '../components/PatientInfo';
import KeyFindings from '../components/KeyFindings';
import AllDataButton from '../components/AllDataButton';
import Image from '../components/Image.js';
import { useState, useEffect } from 'react';
import { API_BASE } from "../constants";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";



export default function Exam(){
    // const { user } = useOutletContext(); // we will use this to when we set up auth to check for which user is logged in
    const  [exam,setExam] = useState({})
    const examId = useParams().id // used to grab the id of the exam ---- /exams/:id
	const navigate = useNavigate();
    useEffect(()=>{
        const getData = async()=>{
            const res = await fetch(API_BASE + `/api/exams/${examId}`, { credentials: "include" })
            const data = await res.json()
			console.log(data)
            setExam(data)
        }
		getData()
    },[])


    return(
        <>
        <Header />
        <AllDataButton />
        <div className="Body">
            <div className="LeftContent">
            <Image imageURL={exam.cloudinaryId ? exam.imageURL: ` https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`}/>
            <KeyFindings keyFindings={exam.keyFindings} />
            </div>
            <div className="RightContent">
            <PatientInfo exam={exam}/>
            </div>
        </div>
      </>
    )
}