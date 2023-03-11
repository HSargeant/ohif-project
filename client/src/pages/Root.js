import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
import Header from "../components/Header";
import Navbarside from "../components/NavBarSide/navbarside";
export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState();
  // api call to get logged in user
  useEffect(() => {
    fetch(API_BASE + "/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);
  return (
    <>
      {user ? <Header />:""}
      <div className="sidebar1">
        {user ? <Navbarside />:""}
      </div>
      <Outlet context={{ user, setUser, setMessages,messages }} />
      {/*  */}
    </>
  );
}