import React, { useRef } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

export default function Navbar() {


  function setActive(e) {
    removeActive()
    e.target.classList.add("active");
  }
  function removeActive(){
    document.querySelectorAll(".items").forEach((el) => {
      el.classList.remove("active");
    });
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg py-3 ${style.navbar}`}>
        <div className={`container ${style.navbar}`}>
          <Link onClick={removeActive} className={`h3 fw-bold text-uppercase ${style.logo}`} to="/">
            START REACT
          </Link>

          <button
            className={`navbar-toggler ${style.navbar_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered xx"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${style.navbarSupportedContent}`}
            id="navbarSupportedContent"
          >
            <ul
              className={`navbar-nav ms-auto mb-2 mb-lg-0 ${style.navbar_nav}`}
            >
              <li className={`${style.nav_item}`}>
                <Link onClick={setActive}
                  className={`${style.nav_link} h6 fw-bold items`}
                  to="/portfolio"
                >
                  portfolio
                </Link>
              </li>
              <li className={`${style.nav_item}`}>
                <Link onClick={setActive}
                  className={`${style.nav_link} h6 fw-bold items`}
                  to="/about"
                >
                  about
                </Link>
              </li>
              <li className={`${style.nav_item}`}>
                <Link onClick={setActive}
                  className={`${style.nav_link} h6 fw-bold items`}
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
