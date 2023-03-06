const PatientInfo = (props) => {
    const {exam} = props
    return (
        <div className="PatientInfo">
            <p> Patient ID: {exam.patientId}</p>
            <p> Brixia Score (separated by comma): {exam.brixiaScores} </p>
            <p> Age: {exam.age}</p>
            <p> Sex: {exam.sex}</p>
            <p> BMI: {exam.bmi} </p>
            <p> Zip Code: {exam.zipCode}</p>
        </div>
    );
}

export default PatientInfo