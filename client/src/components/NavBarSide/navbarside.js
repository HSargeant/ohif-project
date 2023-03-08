import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarside.css";

export default function NavBarSide() {
  const [expansion, setExpansion] = useState(false);
  const [frozen, setFreeze] = useState(false);
  const menuItems = [
    {
      text: "Admin",
      icon: "#",
      link: "/admin",
      key:"1"
    },
    {
      text: "All Exams",
      icon: "#",
      link: "/exams",
      key:"2"
    },
    {
      text: "Add New Exam",
      icon: "#",
      link: "/exams/new",
      key:"3"
    },
    {
      text: "Create an Account",
      icon: "#",
      link: "/register",
      key:"4"
    },
    {
      text: "Log Out",
      icon: "#",
      link: "/logout",
      key:"5"
    },
  ];
  return (
    <div className={expansion ? "contain-side" : "contain-side-NX"}>
      <div className="nav-up">
        <div className="nav-head">
          {expansion && (
            <div className="comp-brand">
              <img src="#" alt=""></img>
              <h2>Hack Diversity</h2>
            </div>
          )}
            <button
            className={
              expansion ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpansion(!expansion)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
        </div>
        <div className="menu">
          {menuItems.map(({ text, icon, link,key }) => (
            <Link
              to={link}
              className={expansion ? "items-menu" : "items-menu items-menu-NX"}
              key={key}
            >
              <img src="#" alt="" srcSet="" />
              {expansion && <p>{text}</p>}
              {/* can we rename this? */}
              {!expansion && <div className="tooltip">{text}</div>} 

            </Link>
          ))}
        </div>
      </div>
      <div className="nav-foot">
        <div className="nav-det">
          <img src="uiviouqwbioe" alt="" srcSet="" />
          <div className="nav-foot-info">
            <p className="nav-foot"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
