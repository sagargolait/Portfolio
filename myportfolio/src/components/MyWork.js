import React from "react";
import "./MyWork.css";
import Portfolio1 from "../assets/img/portfolio-01.jpg";
import Portfolio2 from "../assets/img/portfolio-02.jpg";
import Portfolio3 from "../assets/img/portfolio-03.jpg";
import Portfolio4 from "../assets/img/portfolio-04.jpg";
import Portfolio5 from "../assets/img/portfolio-05.jpg";
import Portfolio6 from "../assets/img/portfolio-06.jpg";
import Portfolio7 from "../assets/img/portfolio-07.jpg";
import Portfolio8 from "../assets/img/portfolio-08.jpg";
import Portfolio9 from "../assets/img/portfolio-09.jpg";

function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>

      <div className="portfolio">
        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio1} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio2} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio3} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio4} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio5} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio6} alt="" className="portfolio__img" />
        </a>

        <a href="portfolio-item.html" className="portfolio__item">
          <img src={Portfolio7} alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src={Portfolio8} alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src={Portfolio9} alt="" className="portfolio__img" />
        </a>

        <a href="#" className="portfolio__item">
          <img src="img/portfolio-10.jpg" alt="" className="portfolio__img" />
        </a>
      </div>
    </section>
  );
}

export default MyWork;
