import xray from './test.jpeg';
const Image = () => {
    return (
        <div>
            <h2> Exam ID: {"Exam-2"} </h2>
            <img className='XRayImage' src={xray} alt='Patient Xray' width={200} height={500} />
            {/* <h4> Image url: {"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16424082_XR_CHEST_AP_PORTABLE_2.png"} </h4> */}
        </div>
    );
}

export default Image