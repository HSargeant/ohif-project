import { useEffect,useState } from "react"

import SearchableItem from '../medIndexs';
import purchase from "../purchase-data copy.json";


// list of all the exams
export default function Exams(){
    const [items, setItems] = useState(purchase)

    
// use this temporarily to get the test data from the givin link

const [exams,setExams] = useState([])
const [loading,setLoading] = useState(true)

useEffect(()=>{
    const getData= async()=>{
        const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        const data = await response.json()
        console.log(data.exams)
        setExams(data.exams)
        setLoading(false)
    }
    getData()
},[setExams])


    return(
        // <>
        //     <h1>All exams page</h1>
        //     {loading ? <p>Loading...</p> : <ul>
        //     {exams.map(exam=>{
        //         return(
        //             <li key={exam._id}>{exam.patientId}</li>

        //         )

        //     })}
        //     </ul> }
           
        // </>
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

    )
}