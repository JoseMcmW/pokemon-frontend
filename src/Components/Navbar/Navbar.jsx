import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import navBrand from "../../img/International_Pokémon_logo.svg.png";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <NavLink to="/home">
        <img src={navBrand} alt="title-nav"></img>
      </NavLink>
      <NavLink to="/home" className={styles.menu}>
        Home
      </NavLink>
      <NavLink to="/form" className={styles.menu}>
        Create Pokemon
      </NavLink>
      <NavLink to="/" className={styles.menu}>
        Exit
      </NavLink>
    </nav>
  );
};

export default Navbar;
