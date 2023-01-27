
export default function RecordList ({ records }){
    return(
        <ul className="row list-unstyled">
	        {records.map(record=>{
                return(
                    <li key={record.patientId}>{record.patientId}</li>

                )
            })}
        </ul>

    )
}