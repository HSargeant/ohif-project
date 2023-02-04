import { useNavigate, useOutletContext } from "react-router-dom";
import { API_BASE } from "../constants";
import { redirect } from "react-router-dom";

export default function Login() {
// const loader = async () => {
//   const user = await getUser();
//   if (user) {
//     return redirect("/profile");
//   }
// };
	const { user,setUser, setMessages } = useOutletContext();
	console.log(user)
	const navigate = useNavigate();
	if(user) {
		 navigate("/profile")
		 return
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const response = await fetch(API_BASE + form.getAttribute('action'), {
			method: form.method,
			body: new URLSearchParams(new FormData(form)),
			credentials: "include"
		});
		const data = await response.json();
		if (data.messages) setMessages(data.messages);
		if (data.user) {
			setUser(data.user);
			navigate("/profile");
		}
	};
	return (
		<main className="container">
			<div className="row justify-content-center">
				<section className="col-6 mt-5">
					<form action="/login" method="POST" onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								name="email"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">Password</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								name="password"
							/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</section>
			</div>
		</main>
	);
}