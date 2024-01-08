// import { listings } from "../assets/data";
import PropertyCard from "./PropertyCard";
import { useSelector, useDispatch } from "react-redux";
import axios from "../config/axios";
import { useEffect, useState } from "react";
import {
  getListingsSuccess,
  filterListingsByRooms,
} from "../features/listings/listingSlice";

function Listings() {
  const [loading, setLoading] = useState(false);
  const [selectedRooms, setSelectedRooms] = useState(null);
  const dispatch = useDispatch();
  const { listings } = useSelector((state) => state.listings);
  const getListings = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/listing");
      dispatch(getListingsSuccess(response.data.listings));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getListings();
  }, []);
  console.log(listings);
  const filteredListings = selectedRooms
    ? filterListingsByRooms(listings, selectedRooms)
    : listings;
  const handleFilter = (rooms) => {
    setSelectedRooms(rooms);
  };
  const handleReset = () => {
    setSelectedRooms(null);
  };

  return (
    <section className="listings font-montserrat">
      <div className="container mx-auto w-4/5">
        <div>
          {/* <form action="" className="form">
            <input
              type="text"
              placeholder="search by name or location"
              className="w-full p-3 border-2 border-solid border-black/25 outline-none hover:border-black"
            />
          </form> */}
          <h2 className="font-bold text-xl md:text-2xl ">Current Properties</h2>
        </div>
        <div className="flex flex-col md:flex-row py-4">
          <div className="filters mb-4 md:w-2/12">
            <p className="py-2">Filter by bedrooms</p>
            <ul className="flex flex-row md:flex-col  space-x-5 md:space-x-0">
              {["1", "2", "3", "4", "5+"].map((numOfRooms) => (
                <li className="md:py-3">
                  <button
                    onClick={() => handleFilter(numOfRooms)}
                    className={`${
                      selectedRooms === numOfRooms && "bg-zinc-300"
                    } border border-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full hover:bg-zinc-300`}
                  >
                    {numOfRooms}
                  </button>
                </li>
              ))}

              <li className="md:py-3">
                <button
                  onClick={handleReset}
                  className={`${
                    !selectedRooms && "bg-zinc-300"
                  } border border-black w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full hover:bg-zinc-300`}
                >
                  All
                </button>
              </li>
            </ul>
          </div>
          {
            loading ? (
              <div className="flex items-center justify-center h-[30vh]">
                Fetching listings
              </div>
            ) : filteredListings.length < 1 ? (
              <div className="font-bold text-2xl w-full flex items-center justify-center">
                There are no such listings available
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-10/12 ">
                {filteredListings.map((listing) => (
                  <PropertyCard key={listing.id} listing={listing} />
                ))}
              </div>
            )
            // <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:w-10/12 ">

            //   {filteredListings.map((listing) => (
            //     <PropertyCard key={listing.id} listing={listing} />
            //   ))}
            // </div>
          }
        </div>
      </div>
    </section>
  );
}

export default Listings;
