import { BiArrowBack } from "react-icons/bi";
import { Link, useNavigate} from "react-router-dom";

const AllDataButton = () => {
    return (
        <div className="ButtonRow">
            <div className="ButtonBundle">
                <BiArrowBack />
                <Link to="/exams"> Return to All Data </Link>
            </div>
            {/* <button className="btn"> Return to All Data </button> */}
            {/* <h2> wssjj</h2> */}
        </div >
    );
}
export default AllDataButton