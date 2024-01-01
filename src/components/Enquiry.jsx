import { useState } from "react";
import AddImagesModal from "./AddImagesModal";

function Enquiry() {
  const [showAddImages, setShowAddImages] = useState(false);
  const [images, setImages] = useState([]);
  const [propertyData, setPropertyData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    price: "",
    rooms: "",
    message: "",
  });

  const [coverImage, setCoverImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (data) => {
    console.log(data);
  };
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
              onChange={handleChange}
              value={propertyData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              class={formInputClass}
              onChange={handleChange}
              value={propertyData.email}
            />
          </div>
          <div class={inputWrapperClass}>
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              class={formInputClass}
              onChange={handleChange}
              value={propertyData.number}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              class={formInputClass}
              onChange={handleChange}
              value={propertyData.address}
            />
          </div>

          <div class={inputWrapperClass}>
            <input
              type="file"
              name="coverImage"
              class={formInputClass}
              onChange={(e) => setCoverImage(e.target.files[0])}
              value={propertyData.country}
            />
            <input
              type="text"
              name="price"
              placeholder="Price Expectations in Naira"
              class={formInputClass}
              onChange={handleChange}
              value={propertyData.price}
            />
          </div>
          <div class={inputWrapperClass}>
            <select
              name="rooms"
              id=""
              class={formInputClass}
              onChange={handleChange}
              value={propertyData.rooms}
            >
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
              onChange={handleChange}
              value={propertyData.message}
            ></textarea>
          </div>
          <div class="my-3  w-full flex items-center justify-center">
            <button class="bg-black text-white p-2 w-full">
              Submit Details
            </button>
          </div>
        </div>
      </form>
      {showAddImages && (
        <AddImagesModal
          images={images}
          setImages={setImages}
          setShowAddImages={setShowAddImages}
        />
      )}
    </section>
  );
}

export default Enquiry;
