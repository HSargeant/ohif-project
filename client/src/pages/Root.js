import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
import Header from "../components/Header";
export default function Root() {
  const [user, setUser] = useState();
  const [messages, setMessages] = useState({});

  // api call to get logged in user
  useEffect(() => {
    fetch(API_BASE + "/api/user", { credentials: "include" })
      .then((res) => res.json())
      .then((res) => setUser(res.user));
  }, []);
  return (
    <>
      {user ? <Header />:""}
      <Outlet context={{ user, setUser, setMessages }} />
      {/*  */}
    </>
  );
}
