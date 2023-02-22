import { useEffect, useState } from "react";
import ItemAndInfo from "../medIndexs";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";

// list of all the exams
export default function Exams() {
  const { user, setUser, setMessages } = useOutletContext();
  console.log(user);
  const navigate = useNavigate(); // will use for redirecting and protecting route
  const [exams, setExams] = useState([]);
  const [examName, examNames] = useState("");
  const [loading, setLoading] = useState(true); // can use this state variable to load spinner while data is loading.

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(API_BASE + "/api/exams", {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      setExams(data);
      setLoading(false);
    };
    getData();
  }, [setExams]);

  console.log("logged in: ", user);
  return (
    <div>
      {/* <header className="App-header"> */}
      <nav id="topsec">
        {/* <img src="images/exaLog.png" class="logo"> */}
        <ul id="sidemenu">
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <a href="#">All Exams</a>
          </li>
          <li>
            <a href="#">Add New Exam</a>
          </li>
          <li>
            <a href="#">Create and Account</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </nav>
      <label>Search: </label>
      <input type="text" onChange={(e) => examNames(e.target.value)}></input>
      {/* </header> */}
      <div id="shopping">
        {exams.map((exam) => {
          // var purchItem
          return (
            <div key={exam._id}>
              <Link to={`/exams/${exam._id}`}>
                <ItemAndInfo
                  nameCop={exam.patientId}
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
      );
    </div>
  );
}
