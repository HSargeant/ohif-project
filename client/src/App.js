import './App.css';

import { useState } from "react";
import SearchableItem from './medIndexs';
import purchase from "./purchase-data copy.json";
// import { useApi } from './hooks/use-api';

function App() {
  // const { response } = useApi();
  const [items, setItems] = useState(purchase)


  return (
    
    <div className="App">
      <header className="App-header">

      <nav id = "topsec">
        {/* <img src="images/exaLog.png" class="logo"> */}
        <ul id = "sidemenu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Exams</a></li>
            <li><a href="#">Contact</a></li>           
        </ul>
    </nav>
        {/* <p>
          {response}
        </p> */}
        <div id = "shopping">
            {
              items.map((item) => {
                // var purchItem
                  return(
                  <div>
                    <SearchableItem name ={item.name} image = {item.image} price = {item.price} type = {item.type}></SearchableItem>
                    {/* <button id = "butt" onClick = {() => {itemCart(<PurchableItem name ={item.name} image = {item.image} price = {item.price} 
                    type = {item.type}></PurchableItem>);
                    totalSum(sum + item.price)}}>Add to Cart</button> */}
                  </div>
                  
                  )
              })
            }
          </div>
      </header>
    </div>
  );
}

export default App;
