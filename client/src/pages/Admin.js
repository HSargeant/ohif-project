import { useEffect, useState,lazy } from "react";
import ItemAndInfo from "../medIndexs";

import NavBarSide from "../NavBarSide/navbarside";
// import Header from "../components/Header";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";
// import {FaSearch} from "react-icons/fa"
import ScrollUpButton from "../components/ScrollUpButton";

// list of all the exams
export default function Admin() {
  const { user, setUser, setMessages } = useOutletContext();
  const navigate = useNavigate(); // will use for redirecting and protecting route
  const [exams, setExams] = useState([]);
  const [examName, examNames] = useState("");
  const [inputs, setInputs] = useState("");
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
      console.log(data);
      setExams(data);
      setLoading(false);
    };
    getData();
  }, [setExams]);

  console.log(exams)

  console.log("logged in: ", user);
  return (
    // theres some issue on this page with the api sending "TypeError: Cannot read properties of undefined (reading 'id')"
    <div>
      <div className="centerPage">
        <NavBarSide />
         <ScrollUpButton/>
      <div className="SearchBar">
        <input id="search" className="Search" type="text"  placeholder="filter Exams" onKeyUp={filterCards}/>

      </div>
        <div id="shopping">
          {exams.map((exam) => {
            return (
              <div key={exam._id} className="card">
                <Link to={`/exams/${exam._id}`}>
                  <ItemAndInfo
                    nameCop={exam.patientId}
                    ageCop={exam.age}
                    sexCop={exam.sex}
                    imageCop={
                      exam.cloudinaryId
                        ? exam.imageURL
                        : ` https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`
                    }
                  ></ItemAndInfo>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}