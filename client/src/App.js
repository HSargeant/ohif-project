// import './App.css';
// import Header from './components/Header.js';
// import PatientInfo from './components/PatientInfo.js';
// import KeyFindings from './components/KeyFindings.js';
// import AllDataButton from './components/AllDataButton.js';
// import Image from './components/Image.js';
// import { useState, useEffect } from 'react';
// import { API_BASE } from "./constants";


// import SearchableItem from './medIndexs';
// import purchase from "./purchase-data copy.json";
// // import { useApi } from './hooks/use-api';

// function App() {
//   // const { response } = useApi();
//   const [items, setItems] = useState(purchase)


//   return (
    
//     <div className="App">
//       <Header />
//       <AllDataButton />
//       <div className="Body">
//         <div className="LeftContent">
//           <Image />
//           <KeyFindings />
//         </div>
//         <div className="RightContent">
//           <PatientInfo />
//         </div>
//       </div>
//       <header className="App-header">

//       <nav id = "topsec">
//         {/* <img src="images/exaLog.png" class="logo"> */}
//         <ul id = "sidemenu">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Exams</a></li>
//             <li><a href="#">Contact</a></li>           
//         </ul>
//     </nav>
//         {/* <p>
//           {response}
//         </p> */}
//         <div id = "shopping">
//             {
//               items.map((item) => {
//                 // var purchItem
//                   return(
//                   <div>
//                     <SearchableItem name ={item.name} image = {item.image} price = {item.price} type = {item.type}></SearchableItem>
//                     {/* <button id = "butt" onClick = {() => {itemCart(<PurchableItem name ={item.name} image = {item.image} price = {item.price} 
//                     type = {item.type}></PurchableItem>);
//                     totalSum(sum + item.price)}}>Add to Cart</button> */}
//                   </div>
                  
//                   )
//               })
//             }
//           </div>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <main className="container">
      <div className="row justify-content-around mt-5">
        <a href="/login" className="col-3 btn btn-primary"> Login</a>
        <a href="/signup" className="col-3 btn btn-primary"> Signup</a>
      </div>
    </main>
  );
}


export default App;
