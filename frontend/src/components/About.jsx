import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quam
            perferendis deleniti commodi voluptatibus placeat neque excepturi!
            Dolores odit ullam porro ad dicta cum excepturi unde quas ut
            possimus, veritatis, assumenda consequatur quo quia veniam. Aliquam
            esse quod obcaecati, nisi, commodi maiores vero reprehenderit
            asperiores dignissimos molestiae quidem, voluptatum animi.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
