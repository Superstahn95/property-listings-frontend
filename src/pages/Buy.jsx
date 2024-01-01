import Featured from "../components/Featured";
import PropertyCard from "../components/PropertyCard";
import Listings from "../components/Listings";
import { listings } from "../assets/data";

function Buy() {
  return (
    <>
      <Featured action={"Current"} />
      <Listings />
    </>
  );
}

export default Buy;
