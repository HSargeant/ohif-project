import { useEffect, useState } from "react";
import ItemAndInfo from "../medIndexs";
import NavBarSide from "/Users/kristopheyen/Desktop/Hack Proj/client/src/NavBarSide/navbarside.js";
import Header from "/Users/kristopheyen/Desktop/Hack Proj/client/src/components/Header.js";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";

// list of all the exams
export default function Exams() {
  const { user, setUser, setMessages } = useOutletContext();
  console.log(user);
  const navigate = useNavigate(); // will use for redirecting and protecting route
  const [exams, setExams] = useState([]);
  const [examName, examNames] = useState("");
  const [inputs, setInputs] = useState("");
  const [loading, setLoading] = useState(true); // can use this state variable to load spinner while data is loading.

  // function filterData() {
  //   const examSample = { ...exams };
  //   const filteredExams = examSample.filter((exam) =>
  //     exam.nameCop.toLowerCase().includes(inputs.toLowerCase())
  //   );
  //   setExams(filteredExams);
  //   console.log(filteredExams);
  // }

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
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <form className="example" action="action_page.php">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={((e) => setInputs(e.target.value), console.log(inputs))}
          />
          <button type="submit" onClick={filterData()}>
            <i className="fa fa-search" />
          </button>
        </form>
      </div>

      <div className="centerPage">
        <NavBarSide />
        <div id="shopping">
          {exams.map((exam) => {
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
    </div>
  );
}
