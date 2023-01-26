import { Link } from "react-router-dom";

export default function Index() {
	return <main className="container">
		<div className="row justify-content-around mt-5">
			<Link to="/login" className="col-3 btn btn-primary"> Login</Link>
			<Link to="/signup" className="col-3 btn btn-primary"> Signup</Link>
		</div>
	</main>
}