import xray from './test.jpeg';
const Image = (props) => {
    const {imageURL,examId} = props
    return (
        <div>
        <div className="exam-id">
            <h2> Exam ID: {examId} </h2>
        </div>
            <img className='XRayImage' src={imageURL} alt='Patient Xray' width={200} height={500} />
        </div>
    );
}

export default Image