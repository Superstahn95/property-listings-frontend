import React from "react";
import heroImg from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section class="hero p-6">
      <div class="container mx-auto w-4/5 flex flex-col md:flex-row py-4">
        <div class="flex flex-col items-start justify-center w-2/5">
          <h1 class="text-5xl font-bold py-2">Modern &</h1>
          <h1 class="text-5xl font-bold py-2">Contemporary.</h1>
          <p class="py-4 pr-3">
            A good home is a solid foundation to exploring potentials and we
            bring your luxury homes closer to you
          </p>
          <a href="#" class="bg-black text-white uppercase p-3">
            view properties
          </a>
        </div>
        <div class="w-3/5">
          <img src={heroImg} alt="" class="grayscale saturate-150" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
