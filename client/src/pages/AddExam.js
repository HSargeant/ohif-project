// page to add new exam

import { API_BASE } from "../constants";
import { useState } from "react";
import { Link, useNavigate, useOutletContext,useLocation} from "react-router-dom";
import NavBarSide from "../NavBarSide/navbarside";
export default function AddExam() {
  const { user, setMessages } = useOutletContext();
  const navigate = useNavigate();
  const location =useLocation()

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const form = event.currentTarget;
      console.log(new FormData(form));

      const response = await fetch(API_BASE + form.getAttribute("action"), {
        method: form.method,
        body: new FormData(form),
        credentials: "include",
      });
      const data = await response.json();
    } catch (err) {
      console.log("Error:" + err);
    }
    // if (data.messages) setMessages(data.messages);
    navigate(-1);
  };
  // console.log(message);
  return (
    <div>
      <NavBarSide />
      <h1 style={{ textAlign: "center", marginTop: "3%" }}>
        {" "}
        Create a New Exam{" "}
      </h1>
      <div className="ExamForm">
        <form
          className="csForm"
          action="/api/exams/new"
          encType="multipart/form-data"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div className="formFunction">
            <input type="reset" placeholder="RESET" />
            {location.key !== "default" && (
    <button onClick={() => navigate(-1)} type="button">Back</button>
  )}
          </div>

          <div className="row1">
            {/* <div id="rowCell"> */}
            <label> Patient ID</label>
            <input type="text" placeholder="Patient ID..." name="patientId" />
            {/* </div> */}
            {/* <div id="rowCell"> */}
            <label> Exam ID</label>
            <input type="text" placeholder="Exam ID..." name="examId" />
            {/* </div> */}
          </div>

          <div className="row2">
            <div id="rowCell">
              <label> Patient's Age</label>
              <input
                type="number"
                placeholder="Age"
                min="0"
                max="112"
                name="age"
              />

              <label> Patient's Sex </label>
              <select name="sex">
                <option disabled selected>
                  Male or Female
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
            </div>

            <div id="rowCell">
              <label> Patient's ZipCode </label>
              <input type="text" placeholder="zip code" name="zipCode" />
            </div>
          </div>

          <div className="row3">
            <label> Patient's Weight</label>
            <input type="text" placeholder="Weight" name="weight" />

            <label> BMI</label>
            <input type="text" placeholder="BMI..." name="bmi" />
            <label> Brixia Score</label>
            <input
              type="text"
              placeholder="Brixia Score..."
              name="brixiaScores"
            />
          </div>

          <div>
            <label> icu </label>
            <select name="icu">
              <option disabled selected>
                Y/N
              </option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>

            <label> icu admits </label>
            <input type="text" name="icuAdmits" />

            <label> mortality </label>
            <select name="mortality">
              <option disabled selected>
                Y/N
              </option>
              <option value="Y">Y</option>
              <option value="N">N</option>
            </select>
          </div>

          <div className="row4">
            <label> Key Findings </label>
            <textarea
              placeholder="Please note any key findings"
              name="keyFindings"
            />
          </div>

          <div className="row5">
            <label> X-ray Image </label>
            <input accept="image/*" type="file" name="file" />
          </div>

          <input id="createButt" type="submit" value="Create Exam" />
        </form>
      </div>
    </div>
  );
}
