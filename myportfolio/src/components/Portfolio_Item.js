import React from 'react'

function Portfolio_Item() {
    return (
        <div>
             <header>
            <div class="logo">
                <img src="img/devjane.png" alt="">
            </div>
            <button class="nav-toggle" aria-label="toggle navigation">
                <span class="hamburger"></span>
            </button>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item"><a href="index.html" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="index.html#services" class="nav__link">My Services</a></li>
                    <li class="nav__item"><a href="index.html#about" class="nav__link">About me</a></li>
                    <li class="nav__item"><a href="index.html#work" class="nav__link">My Work</a></li>
                </ul>
            </nav>
        </header>
        

        <section class="intro">
            <h1 class="section__title section__title--intro">
                The title <strong>of my project</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">A short subtitle</p>
            <img src="img/portfolio-01.jpg" alt="" class="intro__img">
        </section>
        
        <div class="portfolio-item-individual">
            <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
            <img src="img/portfolio-details.jpg" alt="">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe et amet tenetur! Fugit sequi optio corrupti fugiat ducimus consequatur incidunt?</p>
            <p>Voluptatibus, soluta blanditiis! Incidunt ea unde itaque illo molestiae eligendi sint culpa nobis voluptas sapiente voluptate, magnam ipsum eius earum?</p>
        </div>
        
        
        <!-- Footer -->
        <footer class="footer">
            <!-- replace with your own email address -->
            <a href="mailto:hello@jane.dev" class="footer__link">hello@jane.dev</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="http://dribbble.com">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
        </div>
    )
}

export default Portfolio_Item
