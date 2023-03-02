import "./App.css";
import Header from "./components/Header";
import PatientInfo from "./components/PatientInfo.js";
import KeyFindings from "./components/KeyFindings.js";
import AllDataButton from "./components/AllDataButton.js";
import Image from "./components/Image.js";
import { useState, useEffect } from "react";
import { API_BASE } from "./constants";

import SearchableItem from "./medIndexs";
// import purchase from "./purchase-data copy.json";
import ItemAndInfo from "./medIndexs";
import NavBarSide from "./NavBarSide/navbarside";
// import { useApi } from './hooks/use-api';

function App() {
  // const { response } = useApi();
  // const [items, setItems] = useState(purchase);
  // const [medQuery, setMedQuery] = useState("");

  // function filterMedItems() {
  //   let currDisplay = [...items];
  //   let changeDisplay = currDisplay.filter((eachInd) =>
  //     eachInd.nameCop.toLowerCase().includes(medQuery.toLowerCase())
  //   );

  // return changeDisplay;
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
      <header className="App-header">
        <nav id="topsec">
          {/* <img src="images/exaLog.png" className="logo"> */}
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
              <a href="#">Create an Account</a>
            </li>
            <li>
              <a href="#">Log out</a>
            </li>
          </ul>
        </nav>

        <label>Search: </label>
        <input
          type="text"
          // onChange={(e) => setMedQuery(e.target.value)}
        ></input>
        {/* <p>
          {response}
        </p> */}
        {/* <div id="shopping">
          {
            items.map((item) => {
              // var purchItem
              return (
                <div>
                  <SearchableItem name={item.name} image={item.image} price={item.price} type={item.type}></SearchableItem>
                </div>

              )
            })
          }
        </div> */}
      </header>

      <body id="holding">
        <NavBarSide id="sep" />
        {/* <div id="shopping">
          {filterMedItems().map((item) => {
            // var purchItem
            return (
              <div className="eachBox">
                <ItemAndInfo
                  nameCop={item.nameCop}
                  imageCop={item.imageCop}
                  priceCop={item.priceCop}
                  typeCop={item.type}
                ></ItemAndInfo>
              </div>
            );
          })}
        </div> */}
      </body>
    </div>
  );
}

export default App;
