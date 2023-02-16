import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { API_BASE } from "../constants";

export default function Root() {
    const [user,setUser]=useState(null)
  const [messages, setMessages] = useState({});

//   api call to get logged in user
// useEffect(() => {
//     fetch(API_BASE + '/api/user', { credentials: "include" })
//       .then(res => res.json())
//       .then(res => setUser(res.user));
//   }, []);


  return (
    <>
      Temporary header
      {/* temp header you can erase and enter the header/sidebar component */}
      <header> 
        <ul>
        <Link to="/admin">Admin</Link>
        <Link to="/exams">All Exams</Link>
        <Link to="/exams/new">Add New Exam</Link>
        <Link to="/register">Create an Account</Link>
        <Link to="/logout">Log Out</Link>
        </ul>
      </header>
      {/* Do not touch. Outlet context is used to render the child routes. we will use this to keep track of the logged in user across the application  */}
      {/* <Outlet  /> */}
      <Outlet context={{ user, setUser, setMessages }} /> 
      {/*  */}
    </>
  );
}
