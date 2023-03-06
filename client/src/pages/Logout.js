import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Logout() {
	const { setUser } = useOutletContext();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(API_BASE + "/logout", { credentials: "include" })
			.then(() => {
				setUser(null);
				navigate("/");
			});
	}, [setUser, navigate]);

	return <main className="container">
		<div style={{
			marginTop: "15%",
			display:"flex",
			alignItems:"center",
			alignContent:"center",
			justifyContent:"center"
		}} >
			<p>Logged out...</p>
		</div>
	</main>
}