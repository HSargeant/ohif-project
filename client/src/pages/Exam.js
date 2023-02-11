// page to display one exam
import '../App.css';
import Header from '../components/Header';
import PatientInfo from '../components/PatientInfo';
import KeyFindings from '../components/KeyFindings';
import AllDataButton from '../components/AllDataButton';
import Image from '../components/Image.js';
import { useState, useEffect } from 'react';
import { API_BASE } from "../constants";


export default function Exam(){
    return(
        <>
        <Header />
        <AllDataButton />
        <div className="Body">
            <div className="LeftContent">
            <Image />
            <KeyFindings />
            </div>
            <div className="RightContent">
            <PatientInfo />
            </div>
        </div>
      </>
    )
}