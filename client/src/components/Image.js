import xray from './test.jpeg';
const Image = ({exam}) => {
    return (
        <div>
        <div className="exam-id">
            <h2> Exam ID: {exam.examId} </h2>
        </div>
            <a href={exam.cloudinaryId ? exam.imageURL: `https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`} target="_blank" rel="noreferrer"><img className='XRayImage' src={exam.cloudinaryId ? exam.imageURL: `https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/${exam.imageURL}`} alt='Patient Xray' width={200} height={500} /></a>
        </div>
    );
}

export default Image