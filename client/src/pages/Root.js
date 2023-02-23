import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { API_BASE } from "../constants";
import Header from "/Users/kristopheyen/Desktop/Hack Proj/client/src/components/Header.js";
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
      {/* temp header you can erase and enter the header/sidebar component */}
      <Header />
      {/* Do not touch. Outlet context is used to render the child routes. we will use this to keep track of the logged in user across the application  */}
      {/* <Outlet  /> */}
      <Outlet context={{ user, setUser, setMessages }} />
      {/*  */}
    </>
  );
}
