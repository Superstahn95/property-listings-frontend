import React from "react";
import Featured from "../components/Featured";
import heroImg from "../assets/images/hero.jpg";
import Review from "../components/Review";
import Team from "../components/Team";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <Featured action={"About"} />
      {/* herolike section */}
      <section className="hero md:p-6 font-montserrat">
        <div className="container  mx-auto w-4/5 flex flex-col md:flex-row py-4">
          <div className="flex flex-col items-start justify-center md:w-2/4 mb-5 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold md:py-2">Peace &</h1>
            <h1 className="text-3xl md:text-5xl font-bold md:py-2">
              Luxury Redefined
            </h1>
            <p className="py-4 pr-3 leading-loose">
              With our main office in Port Harcourt, we list new properties over
              Nigeria for sale after physically confirming the authenticity and
              availability of that property to avoid legal issues
            </p>
            <NavLink to={"/sell"} className="bg-black text-white uppercase p-3">
              List a property
            </NavLink>
          </div>
          <div className="md:w-2/4  md:ml-4">
            <img src={heroImg} alt="" className="grayscale saturate-150" />
          </div>
        </div>
      </section>
      {/* herolike section end */}
      <Review />
      <Team />
    </>
  );
}

export default About;
