
import React from 'react'

import './Hero.scss'
import HeroImg from '../../assets/imgs/desktop/image-hero.jpg'
const Hero = (props) => {

    return (
        <section className="hero flex container">
            <div className="hero-description flex column space-between">
                <h1>Branding & website design agency</h1>
                <span>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</span>
                <button className="learn-more flex center-center">
                    Learn More
                </button>
            </div>
            <img src={HeroImg} alt="Branding" />
        </section>
    )


}

export default Hero
