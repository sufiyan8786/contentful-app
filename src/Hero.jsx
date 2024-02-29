import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby listicle post-ironic pinterest poke. Salvia DIY actually
            messenger bag. Offal art party cornhole plaid direct trade tilde
            blackbird spyplane poke. Tonx lyft pug +1 echo park wayfarers tacos
            air plant pabst DSA yes plz aesthetic hashtag brunch.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Women and Browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
