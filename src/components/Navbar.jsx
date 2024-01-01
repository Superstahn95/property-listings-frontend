import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black p-6 font-montserrat">
      <div className="container w-4/5 mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to={"/"} className="text-white no-underline text-2xl">
            PropertyListings
          </NavLink>
          <div>
            <ul className="flex md:flex-row text-white items-center space-x-6">
              <li className="uppercase">
                <NavLink to={"/buy"} className="text-white">
                  Buy
                </NavLink>
              </li>
              <li className="uppercase">
                <NavLink to={"/sell"} className="text-white">
                  Sell
                </NavLink>
              </li>
              {/* <li className="uppercase">
                <NavLink  href="" className="text-white">
                  Rentals
                </NavLink >
              </li> */}
              <li className="uppercase">
                <NavLink to={"/about"} className="text-white">
                  About
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  className="border-2 p-2 border-white uppercase no-underline font-bold border-solid hover:text-black hover:bg-white hover:border-black"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
