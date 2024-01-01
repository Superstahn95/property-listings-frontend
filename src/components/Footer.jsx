import React from "react";

function Footer() {
  return (
    <footer class="bg-black py-5 font-montserrat">
      <div class="subscribe flex items-center justify-center">
        <form action="" class="w-full flex items-center justify-center">
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            class="p-3 border-2 border-solid border-black/25 outline-none hover:border-black uppercase w-2/5"
          />
          <button class="bg-white text-black uppercase font-bold p-3 tracking-tight">
            Subscribe
          </button>
        </form>
      </div>
      <div class="container mx-auto w-3/4">
        <div class="flex items-center justify-between py-4">
          <h2 class="text-white text-2xl">PropertyListings</h2>
          <div>
            <ul class="text-white flex items-center space-x-6 py-3">
              <li>
                <a href="#" class="uppercase text-2l">
                  Buy
                </a>
              </li>
              <li>
                <a href="#" class="uppercase text-2l">
                  Sell
                </a>
              </li>
              <li>
                <a href="#" class="uppercase text-2l">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="uppercase text-2l">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="border-solid border-1 border-white" />
        <div class="flex items-center justify-between py-4">
          <p class="text-white">@Supestahn. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
