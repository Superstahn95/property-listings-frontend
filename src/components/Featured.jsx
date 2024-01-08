import { NavLink } from "react-router-dom";
import featuredImg from "../assets/images/featured.jpg";
import axios from "../config/axios";
import { useState, useEffect } from "react";

function Featured({ action }) {
  const [listing, setListing] = useState(null);
  //we should fetch a featured listing here
  const getListing = async () => {
    try {
      const response = await axios.get("/listing/featured");
      console.log(response.data);
      setListing(response.data.listing);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListing();
  }, []);
  return (
    <section className="mb-7 mt-14 md:mt-24 font-montserrat  ">
      <div className="relative h-96">
        <img
          src={listing?.coverPhoto.url}
          alt=""
          className="h-full min-w-full object-cover"
        />

        <div className="absolute  w-full left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 flex flex-col items-center z-40">
          <h2 className="text-white text-xl md:text-3xl uppercase font-bold p-3">
            featured property
          </h2>
          <p className="p-3 text-white font-bold text-2xl uppercase">
            {listing?.name}
          </p>
          <p className="p-3 text-white font-bold text-2xl">{listing?.state}</p>
          <NavLink
            to={`/listing/${listing?._id}`}
            className="uppercase bg-white text-dark p-3 rounded-md"
          >
            View Featured Listing
          </NavLink>
        </div>
        <div className="absolute bg-black/50 text-white top-0 left-0 bottom-0 right-0"></div>
      </div>
    </section>
  );
}

export default Featured;
