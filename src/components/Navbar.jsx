import React from "react";

function Navbar() {
  return (
    <nav class="bg-black p-6 font-montserrat">
      <div class="container w-4/5 mx-auto">
        <div class="flex items-center justify-between">
          <a href="/" class="text-white no-underline text-2xl">
            PropertyListings
          </a>
          <div>
            <ul class="flex md:flex-row text-white items-center space-x-6">
              <li class="uppercase">
                <a href="/buy.html" class="text-white">
                  Buy
                </a>
              </li>
              <li class="uppercase">
                <a href="/sell.html" class="text-white">
                  Sell
                </a>
              </li>
              <li class="uppercase">
                <a href="" class="text-white">
                  Rentals
                </a>
              </li>
              <li class="uppercase">
                <a href="/about.html" class="text-white">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="border-2 p-2 border-white uppercase no-underline font-bold border-solid hover:text-black hover:bg-white hover:border-black"
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
