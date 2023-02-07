import './App.css';
import Header from './components/Header.js';
import PatientInfo from './components/PatientInfo.js';
import KeyFindings from './components/KeyFindings.js';
import AllDataButton from './components/AllDataButton.js';
import Image from './components/Image.js';
import { useState, useEffect } from 'react';
import { API_BASE } from "./constants";


import { useApi } from './hooks/use-api';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
