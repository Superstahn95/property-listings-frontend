import React from "react";
import Featured from "../components/Featured";
import heroImg from "../assets/images/hero.jpg";
import Review from "../components/Review";
import Team from "../components/Team";

function About() {
  return (
    <>
      <Featured action={"About"} />
      {/* herolike section */}
      <section className="hero p-6 font-montserrat">
        <div class="container mx-auto w-4/5 flex flex-col md:flex-row py-4">
          <div class="flex flex-col items-start justify-center w-2/4">
            <h1 class="text-5xl font-bold py-2">Peace &</h1>
            <h1 class="text-5xl font-bold py-2">Luxury Redefined</h1>
            <p class="py-4 pr-3 leading-loose">
              With our main office in Port Harcourt, we list new properties over
              Nigeria for sale after physically confirming the authenticity and
              availability of that property to avoid legal issues
            </p>
            <a href="/sell.html" class="bg-black text-white uppercase p-3">
              List a property
            </a>
          </div>
          <div class="w-2/4 ml-4">
            <img src={heroImg} alt="" class="grayscale saturate-150" />
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
