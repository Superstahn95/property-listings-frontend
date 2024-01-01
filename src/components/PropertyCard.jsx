import React from "react";

function PropertyCard({ listing }) {
  return (
    <div class="card">
      <div class="img">
        <img src={listing.coverImage} alt="" />
      </div>
      <div class="card-details bg-slate-200 py-2">
        <p class="py-2">{listing.state}</p>
        <p class="py-3">{listing.address}</p>
        <hr class="border-1 border-solid border-black" />
        <p class="py-2">${listing.price}</p>
      </div>
    </div>
  );
}

export default PropertyCard;
