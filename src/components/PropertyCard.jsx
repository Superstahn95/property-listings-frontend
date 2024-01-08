import { Link } from "react-router-dom";

function PropertyCard({ listing }) {
  return (
    <Link
      to={`/listing/${listing._id}`}
      className="card rounded-md   bg-slate-100 font-montserrat relative"
    >
      <div
        className={`rounded-xl text-xs py-1 px-1 absolute top-2 right-2 min-w-[100px] text-white flex items-center justify-center ${
          listing.isApproved ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {listing.isApproved ? "Approved" : "Pending Approval"}
      </div>
      <div>
        <img
          src={listing.coverPhoto.url}
          alt=""
          className="h-[250px] object-cover rounded-t-md w-full"
        />
      </div>
      <div class="card-details  p-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="font-bold">{listing.name}</span>
            <span>{listing.state}</span>
          </div>
          <span>${listing.price}</span>
        </div>
        <div className="flex flex-col space-y-2 mt-3">
          <span className="text-xs">{listing.rooms} Bedroom</span>
          <span className="text-xs">
            {listing.requests.length > 1
              ? `${listing.requests.length} people interested`
              : `${listing.requests.length} person interested`}
          </span>
        </div>
        {/* <p class="py-3">{listing.address}</p> */}
        <div className="flex items-center justify-center">
          <button className="px-3 py-1 bg-black text-white rounded-md">
            Find out more
          </button>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
