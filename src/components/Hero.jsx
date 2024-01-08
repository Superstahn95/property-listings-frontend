import React from "react";
import heroImg from "../assets/images/hero.jpg";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="hero mt-14 md:mt-10 md:p-6">
      <div className="container mx-auto w-4/5 flex flex-col-reverse  md:flex-row py-4">
        <div className="flex flex-col  items-start justify-center  md:w-2/5">
          <h1 className="text-3xl md:text-5xl font-bold md:py-2">Modern &</h1>
          <h1 className="text-3xl md:text-5xl font-bold md:py-2">
            Contemporary.
          </h1>
          <p className="py-4 pr-3">
            A good home is a solid foundation to exploring potentials and we
            bring your luxury homes closer to you
          </p>
          <NavLink to={"/buy"} className="bg-black text-white uppercase p-3">
            view properties
          </NavLink>
        </div>
        <div className="mb-5 md:mb-0 md:w-3/5">
          <img src={heroImg} alt="" className="grayscale saturate-150" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
