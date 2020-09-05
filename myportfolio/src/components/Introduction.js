import React from "react";
import IntroImage from "../assets/img/dev-jane-01.jpg";
import "./Introduction.css";

function Introduction() {
  return (
    <div>
      <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Sagar Golait</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          front-end dev
        </p>
        <img
          src={IntroImage}
          alt="a picture of Jane Smith smiling"
          className="intro__img"
        />
      </section>
    </div>
  );
}

export default Introduction;
