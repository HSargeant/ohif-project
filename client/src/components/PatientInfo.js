const PatientInfo = (props) => {
    const {exam} = props
    console.log("patient info: ",exam)
    return (
        <div className="PatientInfo">
            <h2> Patient ID: {exam.patientId}</h2>
            <h2> Brixia Score (separated by comma): {exam.brixiaScores} </h2>
            <h2> Age: {exam.age}</h2>
            <h2> Sex: {exam.sex}</h2>
            <h2> BMI: {exam.bmi} </h2>
            <h2> Zip Code: {exam.zipCode}</h2>
        </div>
    );
}

export default PatientInfo