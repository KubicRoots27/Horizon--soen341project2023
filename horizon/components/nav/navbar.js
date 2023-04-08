import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/logo.svg";

import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Profile", href: "/profile" },
  { text: "Job Postings", href: "/jobpostings" },
];
const Navbar = (props) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [darkMode, setDarkMode] = useState(false);

  props.theme(darkMode ? "dark" : "light");

  return (
    <header>
      <nav className={`nav ${darkMode ? "nav_dark" : ""}`}>
        <Link href={"/"}>
          <Image src={logo} alt="Horizon Logo" width={100} height={100} />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${navActive ? "active" : ""} nav__menu-list ${
            darkMode ? "nav_dark" : ""
          }`}
        >
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
        <div className="rounded-md px-2 py-1 bg-slate-400 hover:outline outline-2">
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              document.body.classList.toggle("dark");
            }}
          >
            Enable {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
