import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Listings from "../components/Listings";

function Home() {
  return (
    <div className="font-montserrat">
      <Hero />
      <Featured action={"View"} />
      <Listings />
    </div>
  );
}

export default Home;
