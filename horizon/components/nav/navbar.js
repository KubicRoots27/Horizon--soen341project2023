import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

// import NavItem from "./navitem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Profile", href: "/profile" },
  { text: "Job Postings", href: "/jobpostings" },
];
const LOGO_SOURCE =
  "/logo.jpg";

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const handleItemClick = (idx) => {
    setActiveIdx(idx);
  };
  return (
    <header>
      <nav className={`nav`} style={{ display: "flex", alignItems: "center" }}>
        <div className="nav__left">
        <Image src={LOGO_SOURCE} alt="Logo" width={100} height={50} style={{height: "60px"}} />

        </div>
        <ul className="nav__right" style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
          {MENU_LIST.map((item, idx) => (
            <li className={`nav__item ${idx === activeIdx ? "nav__item--active" : ""}`} key={idx}>
              <Link href={item.href}>
                <div className="nav__link" onClick={() => handleItemClick(idx)}>
                  {item.text}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f1f1f1;
          height: 80px;
          padding: 0 1rem;
          border-bottom: 1px solid #ddd;
        }

        .nav__left {
          display: flex;
          align-items: center;
        }

        .nav__right {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
          justify-content: flex-end;
        }

        .nav__link {
          cursor: pointer;
          padding: 0.5rem;
        }
        .nav__item {
          margin-right: 20px;
        }

        .nav__item--active {
          background-color: #ddd;
        }
        
        .nav__right li {
          margin-left: 1rem;
        }
        
      `}</style>
    </header>
  );
};

export default Navbar;
