import React, { useState } from "react";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import navBrand from "../../img/International_Pokémon_logo.svg.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_logo}>
        <NavLink to="/home">
          <img src={navBrand} alt="title-nav"></img>
        </NavLink>
      </div>
      <div className={`${styles.nav_items} ${isOpen && styles.open}`}>
        <NavLink to="/home" className={styles.menu}>
          Home
        </NavLink>
        <NavLink to="/form" className={styles.menu}>
          Create Pokemon
        </NavLink>
        <NavLink to="/" className={styles.menu}>
          Exit
        </NavLink>
      </div>
      <div
        className={`${styles.nav_toggle} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
