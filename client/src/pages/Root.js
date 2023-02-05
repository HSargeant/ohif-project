import { useEffect, useState } from "react";
import { Link, Outlet,useNavigate } from "react-router-dom";

import Messages from '../components/Messages';
import { API_BASE } from "../constants";

export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});
  useEffect(() => {
    fetch(API_BASE + "/api/user",{ credentials: "include" })
      .then(res=>res.json())
      .then(data=>{
          console.log(data.user)
          setUser(data.user)  
      })
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMessages({});
      }
    }
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      <header className="container">
        <div className="text-center">
          <h1 className=""><Link to={user ? '/profile' : '/'}>Exam Viewer</Link></h1>
          <span></span>
        </div>
      </header>
			<Messages messages={messages} />
      <Outlet context={{ user, setUser, setMessages }} />
    </>
  );
}
