import React from "react";

function PropertyCard({ listing }) {
  return (
    <div class="card rounded-md   bg-slate-100 font-montserrat">
      <div class="img">
        <img
          src={listing.coverImage}
          alt=""
          className="h-[250px] object-cover rounded-t-md"
        />
      </div>
      <div class="card-details  p-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold">Zen Mansions</span>
            <span>{listing.state}</span>
          </div>
          <span>{listing.price}</span>
        </div>
        <div className=" mt-3">
          <span className="text-xs">4 Bedroom</span>
        </div>
        {/* <p class="py-3">{listing.address}</p> */}
        <div className="flex items-center justify-center">
          <button className="px-3 py-1 bg-black text-white rounded-md">
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
