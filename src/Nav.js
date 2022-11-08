import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function listener() {
      if (window.scrollY > 80) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    window.addEventListener("scroll", listener);

    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/archive/6/69/20220504140801%21Netflix_logo.svg"
          alt="Netflix logo"
          className="nav_logo"
        />
      </Link>
      <Link to="/profile">
        <button className="nav_button">
          <img
            src="https://vectorified.com/images/profile-pic-icon-6.png"
            className="nav_avatar"
          />
        </button>
      </Link>
    </div>
  );
}

export default Nav;
