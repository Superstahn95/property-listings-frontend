import { NavLink } from "react-router-dom";
import { FaHouseDamage } from "react-icons/fa";
import axios from "../config/axios";
import { useState } from "react";
import swal from "sweetalert";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return alert("You cannot submit an empty email field");
    setLoading(true);
    try {
      const response = await axios.post("/subscriber", { email });
      console.log(response.data);
      setLoading(false);
      setEmail("");
      swal(response.data.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
      swal("Oops!", error.response.data.message, "error");
    }
  };
  return (
    <footer className="bg-black py-5 font-montserrat">
      <div className="subscribe flex flex-col items-center justify-center">
        <h2 className="text-white text-center text-xs md:text-xl mb-4 capitalize font-bold">
          Want to get notified whenever a listing is approved?
        </h2>
        <form
          onSubmit={handleSubscribe}
          className="w-full flex items-center justify-center"
        >
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 md:p-3 border-2 border-solid border-black/25 outline-none hover:border-black  md:w-2/5"
          />
          <button className="bg-white text-black uppercase font-bold p-1 md:p-3 tracking-tight">
            {loading ? "Loading" : "Subscribe"}
          </button>
        </form>
      </div>
      <div className="container mx-auto w-3/4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <NavLink
            to={"/"}
            className="flex text-2xl cursor-pointer items-center gap-2"
          >
            <FaHouseDamage className="w-7 h-7 text-yellow-600" />
            <span className="font-bold text-white text-sm md:text-xl">
              PropertyListings
            </span>
          </NavLink>
          <div>
            <ul className="text-white flex items-center space-x-6 py-3">
              <li>
                <NavLink to={"/buy"} className="uppercase text-xs md:text-sm">
                  Buy
                </NavLink>
              </li>
              <li>
                <NavLink to={"/sell"} className="uppercase text-xs md:text-sm">
                  Sell
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className="uppercase text-xs md:text-sm">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className="uppercase text-xs md:text-sm"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-solid border-1 border-white" />
        <div className="flex items-center justify-between py-4">
          <p className="text-white text-xs">@Supestahn. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
