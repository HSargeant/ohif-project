import './App.css';
import Header from './components/Header.js';
import PatientInfo from './components/PatientInfo.js';
import KeyFindings from './components/KeyFindings.js';
import AllDataButton from './components/AllDataButton.js';
import Image from './components/Image.js';
import CreateExam from './pages/createExam';
import { useState, useEffect } from 'react';
import { API_BASE } from "./constants";
import { useApi } from './hooks/use-api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/createExam' element={<CreateExam />} />
        </Routes>
      </Router>
      {/* <Header />
      <AllDataButton />
      <div className="Body">
        <div className="LeftContent">
          <Image />
          <KeyFindings />
        </div>
        <div className="RightContent">
          <PatientInfo />
        </div>
      </div> */}
    </div>
  );
}

export default App;
