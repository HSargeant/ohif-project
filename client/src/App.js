import "./App.css";

import { useState } from "react";
import SearchableItem from "./medIndexs";
import purchase from "./purchase-data copy.json";
import NavBarSide from "./NavBarSide/navbarside";
// import { useApi } from './hooks/use-api';

function App() {
  // const { response } = useApi();
  const [items, setItems] = useState(purchase);
  const [medQuery, setMedQuery] = useState("");

  function filterMedItems() {
    let currDisplay = [...items];
    let changeDisplay = currDisplay.filter((eachInd) =>
      eachInd.name.includes(medQuery)
    );

    return changeDisplay;
  }

  return (
    <div className="App">
      <header className="App-header">
        <label>Search: </label>
        <input
          type="text"
          onChange={(e) => setMedQuery(e.target.value)}
        ></input>
      </header>

      <body id="holding">
        <NavBarSide id="sep" />
        <div id="shopping">
          {filterMedItems().map((item) => {
            // var purchItem
            return (
              <div>
                <SearchableItem
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  type={item.type}
                ></SearchableItem>
              </div>
            );
          })}
        </div>
      </body>
    </div>
  );
}

export default App;
