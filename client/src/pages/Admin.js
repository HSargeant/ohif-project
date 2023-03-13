import { useEffect, useState } from "react";
import ItemAndInfo from "../components/medIndexs";
import {useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";
// import {FaSearch} from "react-icons/fa"
import ScrollUpButton from "../components/ScrollUpButton";
import CircularProgress from '@mui/material/CircularProgress';

// list of all the exams
export default function Admin() {
  const { user } = useOutletContext();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true); // can use this state variable to load spinner while data is loading.

// function to filter exams - HS
  function filterCards(e){ 
    let cards=window.document.querySelectorAll('.card')
    let filter = e.currentTarget.value.toUpperCase();
    let patientId = window.document.querySelectorAll('.specifInfo')
    let age = window.document.querySelectorAll('.specifInfo1')
    let sex = window.document.querySelectorAll('.specifInfo2')
    for (let i = 0; i < cards.length; i++) {
      let patientVal=patientId[i].innerText.toUpperCase().indexOf(filter)>-1
      let ageVal=age[i].innerText.toUpperCase().indexOf(filter)>-1
      let sexVal=sex[i].innerText.toUpperCase().indexOf(filter)>-1

      if (patientVal ||ageVal||sexVal) {
        cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
    }
  }

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_BASE + "/api/profile", {
        credentials: "include",
      });
      const data = await response.json();
      setExams(data);
      setLoading(false);
    };
    getData();
  }, [setExams]);




  return !loading ? !exams?.length ? (
    <div style={{
      margin:"200px 0 0",
      textAlign:"center",
    }}><p style={{fontSize:"1.5em"}}>You Have Not Added An Exam</p></div>

  ) : (
    <div>
      <div className="centerPage">
        {/* <NavBarSide /> */}
        <ScrollUpButton/>
        <div className="SearchBar">
          <input id="search" type="text"  placeholder="Filter Exams" className="Search" onKeyUp={filterCards}/>
        </div>
        <div id="shopping">
          {exams.map((exam) => {
            return (
              <div key={exam._id} className="card">
                  <ItemAndInfo
                    nameCop={exam.patientId}
                    ageCop={exam.age}
                    sexCop={exam.sex}
                    imageCop={
                      exam.cloudinaryId
                        ? exam.imageURL
                        : ` https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`
                    }
                    id={exam._id}
                    examUser={exam.user}
                    setExams={setExams}
                    exams={exams}
                    fromAdmin={true}
                  ></ItemAndInfo>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    ):(<CircularProgress style={{
      position: "absolute",
      top: "50%",
      left: "50%", 
    }} />)
}