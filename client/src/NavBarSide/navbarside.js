import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarside.css";

export default function NavBarSide() {
  const [expansion, setExpansion] = useState(false);
  const [frozen, setFreeze] = useState(false);
  const menuItems = [
    {
      text: "Home",
      icon: "#",
      link: "/admin",
    },
    {
      text: "All Exams",
      icon: "#",
      link: "/exams",
    },
    {
      text: "Add New Exam",
      icon: "#",
      link: "/exams/new",
    },
    {
      text: "Create and Account",
      icon: "#",
      link: "/register",
    },
    {
      text: "Log Out",
      icon: "#",
      link: "/logout",
    },
  ];
  return (
    <div class={expansion ? "contain-side" : "contain-side-NX"}>
      <div class="nav-up">
        <div class="nav-head">
          {expansion && (
            <div class="comp-brand">
              <img src="#" alt=""></img>
              <h2>Hack Diversity</h2>
            </div>
          )}
          <button
            class={
              expansion ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpansion(!expansion)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="menu">
          {menuItems.map(({ text, icon, link }) => (
            <Link
              to={link}
              className={expansion ? "items-menu" : "items-menu items-menu-NX"}
            >
              <img src="#" alt="" srcSet="" />
              {expansion && <p>{text}</p>}
              {!expansion && <div class="tooltip">{text}</div>}
            </Link>
          ))}
        </div>
      </div>
      <div class="nav-foot">
        <div class="nav-det">
          <img src="uiviouqwbioe" alt="" srcSet="" />
          <div class="nav-foot-info">
            <p class="nav-foot"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
