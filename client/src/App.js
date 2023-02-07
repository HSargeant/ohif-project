import Header from './components/Header.js';
import PatientInfo from './components/PatientInfo.js';
import KeyFindings from './components/KeyFindings.js';
import AllDataButton from './components/AllDataButton.js';
import Image from './components/Image.js';
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
<<<<<<< Updated upstream
  const [data, setData] = useState("")
  // const { response } = useApi();

  useEffect(() => {
    console.log("call api")
    fetch("http://localhost:8000/api")
      .then(res => res.json())
      .then(data1 => {
        setData(data1)
      })
      .catch(err => console.log(err))

  }, [])




  return (
    <div className="App">
      <header className="App-header">
        <p>
          {data}
        </p>
      </header>
=======
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
>>>>>>> Stashed changes
    </div>
  );
}


export default App;
