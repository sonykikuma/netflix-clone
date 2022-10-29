import React, { useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  /*useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        //handleShow (true);
        //eslint
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);*/

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix-logo"
      />
    </div>
  );
};

export default Nav;
