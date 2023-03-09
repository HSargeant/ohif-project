const PatientInfo = (props) => {
    const {exam} = props
    return (
        <div className="PatientInfo">
            <p> Exam ID: {exam.examId}</p>
            <p> Brixia Score (separated by comma): {exam.brixiaScores} </p>
            <p>Age: {exam.age}</p>
            <p> Sex: {exam.sex} </p>
            {/* <div style={{display:"grid",gridTemplateColumns:"45% 45%"}}>
                <p>Age: {exam.age}</p>
                <p> Sex: {exam.sex} </p>
            </div> */}
            {/* <p> Age: {exam.age} Sex: {exam.sex} </p>  */}
            <p> Weight: {exam.weight} </p>
            <p> BMI: {exam.bmi} </p>
            <p> Mortality: {exam.mortality}</p>
            <p> ICU: {exam.icu} </p>
             <p> ICU Admits: {exam.icuAdmits}</p>
            {/* <div style={{display:"grid",gridTemplateColumns:"45% 45%"}}>
                 <p> ICU: {exam.icu} </p>
                 <p> ICU Admits: {exam.icuAdmits}</p>
                 </div> */}
            {/* <p> ICU: {exam.icu} ICU Admits: {exam.icuAdmits}</p> */}
            <p> Zip Code: {exam.zipCode}</p>
        </div>
    );
}

export default PatientInfo