import { useEffect, useState } from "react";
import axios from "../config/axios";
import { useParams } from "react-router-dom";
import RequestForm from "../components/RequestForm";
import dateFormat, { masks } from "dateformat";

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const params = useParams();
  const { id } = params;
  const getListing = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/listing/${id}`);
      setListing(response.data.listing);
      setLoading(false);
    } catch (error) {
      //handle error in a much better way
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getListing();
  }, [id]);

  return (
    <div className="w-11/12 md:w-4/5 py-4 mt-14 md:mt-24 mx-auto font-montserrat">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="font-bold text-xl md:text-2xl">{listing?.name}</h2>
          <span className="text-black/60 text-xs md:text-lg">
            {listing?.address}
          </span>
        </div>
        <div className="font-bold text-lg md:text-xl ">${listing?.price}</div>
      </div>
      {/* image */}
      <div className="my-4">
        <img
          src={listing?.coverPhoto.url}
          alt=""
          className="max-h-[400px] w-full object-cover"
        />
      </div>
      {/* details  */}
      <div>
        <p className="pb-2 text-sm md:text-lg">{listing?.description}</p>
        <div className="pb-2">
          <span className="font-semibold text-sm md:text-lg">
            Date Listed:{" "}
          </span>
          <span className="text-sm md:text-lg">
            {dateFormat(listing?.createdAt)}
          </span>
        </div>
        <div className="pb-2">
          <span className="font-semibold text-sm md:text-lg">
            Number of Rooms:{" "}
          </span>
          <span className="text-sm md:text-lg">{listing?.rooms}</span>
        </div>
        <div>
          <span className="font-semibold text-sm md:text-lg">Status: </span>
          <span
            className={
              listing?.isApproved
                ? "text-green-500 text-xs md:text-sm"
                : "text-red-500 text-xs md:text-sm"
            }
          >
            {listing?.isApproved
              ? "This property has been confirmed, reviewed and approved by Property Listings"
              : "The property is still pending and yet to be approved and we will not be responsible for complications arising from any deal towards this property before it has been approved and vetted by us"}
          </span>
        </div>
      </div>

      {/* other photos */}
      <div>
        <h3 className="font-bold text-lg md:text-xl my-2">
          Other Images of This Property
        </h3>
        <div className="grid grid-cols-2 gap-1  md:grid-cols-3 md:gap-8">
          {listing?.images.map((img) => (
            <div key={img.public_id}>
              <img src={img.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      {/* interested in property */}
      <div className="my-3 flex flex-col items-center justify-center">
        <p>
          Interested in this property?{" "}
          <button
            onClick={() => setShowRequestForm((prev) => !prev)}
            className="bg-black text-white rounded-md p-1"
          >
            {showRequestForm ? "Close form" : "Click here"}
          </button>
        </p>
        {showRequestForm && (
          <div className="flex items-center justify-center w-full">
            <RequestForm
              listingId={id}
              showRequestForm={showRequestForm}
              setShowRequestForm={setShowRequestForm}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Listing;
