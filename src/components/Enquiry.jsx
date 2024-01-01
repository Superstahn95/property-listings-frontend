import React from "react";

function Enquiry() {
  const formInputClass =
    "flex-1 p-3 border-2 border-solid border-black/25 outline-none hover:border-black uppercase rounded-md";
  const inputWrapperClass =
    "my-3 w-full flex items-center justify-between space-x-2";
  return (
    <section class="bg-zinc-300 py-4 font-montserrat">
      <form action="">
        <div class="container w-3/4 mx-auto flex flex-col items-center justify-center">
          <h1 class="uppercase font-bold text-4xl py-4">Appraisal form</h1>
          <p>Fill the details and our team will get back to you shortly</p>
          <div class={inputWrapperClass}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class={formInputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              class={formInputClass}
            />
          </div>
          <div class={inputWrapperClass}>
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              class={formInputClass}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              class={formInputClass}
            />
          </div>

          <div class={inputWrapperClass}>
            <input
              type="text"
              name="country"
              placeholder="Country"
              class={formInputClass}
            />
            <input
              type="text"
              name="price"
              placeholder="Price Expectations in Naira"
              class={formInputClass}
            />
          </div>
          <div class={inputWrapperClass}>
            <select name="apartment" id="" class={formInputClass}>
              <option value="" class="">
                Number of rooms
              </option>
              <option value="" class="py-3">
                1 Bedroom
              </option>
              <option value="">2 Bedroom</option>
              <option value="">3 Bedroom</option>
              <option value="">4 Bedroom</option>
              <option value="">5+ Bedroom</option>
            </select>
            <input
              type="text"
              name="type"
              placeholder="House Type"
              class={formInputClass}
            />
          </div>

          <div class={inputWrapperClass}>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Wish to send us a message concerning this property? Type one here"
              class={formInputClass}
            ></textarea>
          </div>
          <div class="my-3">
            <button class="bg-black text-white p-2">Submit Details</button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Enquiry;
