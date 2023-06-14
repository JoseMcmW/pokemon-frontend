import React from "react";
import { Link } from "react-router-dom";
import videoBackgorund from "../../img/PGO_S11_LaunchTrailer_16x9_en.mp4"
import style from "./landing-page.module.css";

const LandingPage = () => {
  return (
    <div className={style.landingPageContainer}>
      <video autoPlay loop muted id="video">
				<source src={videoBackgorund} type="video/mp4"></source>
			</video>
      <Link to="/home">
        <button className={style.startButton}>START</button>
      </Link>
    </div>
  );
};

export default LandingPage;
