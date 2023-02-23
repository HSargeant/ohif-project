import { useEffect,useState } from "react"
import SearchableItem from '../medIndexs';
import { Link, useNavigate, useOutletContext, } from "react-router-dom";
import { API_BASE } from "../constants";

// list of all the exams
export default function Exams(){
  const { user,setUser, setMessages } = useOutletContext();
  const navigate = useNavigate() // will use for redirecting and protecting route
  const [exams,setExams] = useState([])
  const [loading,setLoading] = useState(true) // can use this state variable to load spinner while data is loading.


  useEffect(()=>{
      const getData= async()=>{
          const response = await fetch(API_BASE+ '/api/exams', { credentials: "include" })
          const data = await response.json()
          // console.log(data)
          setExams(data)
          setLoading(false)
      }
      getData()
  },[setExams])

  console.log("logged in: ",user)
  return(
        <div id = "shopping">
            {
              exams.map((exam) => {
                // var purchItem
                  return(
                  <div key={exam._id}>
                    <Link to={`/exams/${exam._id}`}><SearchableItem name ={exam.patientId} image = {exam.cloudinaryId ? exam.imageURL: ` https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`}></SearchableItem></Link>
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