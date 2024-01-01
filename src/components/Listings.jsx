import { listings } from "../assets/data";
import PropertyCard from "./PropertyCard";

function Listings() {
  return (
    <section class="listings font-montserrat">
      <div class="container mx-auto w-4/5">
        <div>
          <form action="" class="form">
            <input
              type="text"
              placeholder="search by name or location"
              class="w-full p-3 border-2 border-solid border-black/25 outline-none hover:border-black"
            />
          </form>
        </div>
        <div class="flex md:flex-row py-4">
          <div class="filters w-2/12">
            <p class="py-2">Filter by bedrooms</p>
            <ul>
              <li class="py-3">
                <a href="#" class="no-underline hover:bg-zinc-300">
                  1 bedrooms
                </a>
              </li>
              <li class="py-3">
                <a href="#" class="no-underline hover:bg-zinc-300">
                  2 bedrooms
                </a>
              </li>
              <li class="py-3">
                <a href="#" class="no-underline hover:bg-zinc-300">
                  3 bedrooms
                </a>
              </li>
              <li class="py-3">
                <a href="#" class="no-underline hover:bg-zinc-300">
                  4 bedrooms
                </a>
              </li>
              <li class="py-3">
                <a href="#" class="no-underline hover:bg-zinc-300">
                  5+ bedrooms
                </a>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4 w-10/12 ">
            {listings.map((listing) => (
              <PropertyCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Listings;
