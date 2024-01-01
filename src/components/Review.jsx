import React from "react";

function Review() {
  return (
    <section className="advert bg-zinc-300 py-10 font-montserrat">
      <div className="container mx-auto w-4/5 flex items-center justify-around py-5">
        <div className="text-center py-5">
          <h2 className="text-3xl font-bold py-4">500+</h2>
          <p className="uppercase text-2xl">properties sold</p>
        </div>
        <div className="text-center py-5">
          <h2 className="text-3xl font-bold py-4">15</h2>
          <p className="uppercase text-2xl">awards</p>
        </div>
        <div className="text-center py-5">
          <h2 className="text-3xl font-bold py-4">98%</h2>
          <p className="uppercase text-2xl">Satisfied Clients</p>
        </div>
      </div>
    </section>
  );
}

export default Review;
