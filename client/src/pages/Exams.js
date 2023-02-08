import { useEffect,useState } from "react"


// list of all the exams
export default function Exams(){
    
// use this temporarily to get the test data from the givin link

const [exams,setExams] = useState([])

useEffect(()=>{
    const getData= async()=>{
        const response = await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams')
        const data = await response.json()
        console.log(data.exams)
        setExams(data.exams)
    }
    getData()
},[])


    return(
        <>
            <h1>All exams page</h1>
            <ul>
            {exams.map(exam=>{
                return(
                    <li key={exam._id}>{exam.patientId}</li>

                )

            })}
            </ul>
        </>

    )
}