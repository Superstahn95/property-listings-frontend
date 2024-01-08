import { useState } from "react";
import AddImagesModal from "./AddImagesModal";
import { useDispatch, useSelector } from "react-redux";
import { addListingSucess } from "../features/listings/listingSlice";
import axios from "../config/axios";
import swal from "sweetalert";

function Enquiry() {
  const [showAddImages, setShowAddImages] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [propertyData, setPropertyData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    price: "",
    rooms: "",
    description: "",
    state: "",
  });

  const [coverPhoto, setCoverPhoto] = useState(null);
  const dispatch = useDispatch();
  const { listings } = useSelector((state) => state.listings);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/listing", data);
      console.log(response.data.listing);
      dispatch(addListingSucess(response.data.listing));
      setLoading(false);
      setShowAddImages(false);
      setPropertyData({
        name: "",
        email: "",
        number: "",
        address: "",
        price: "",
        rooms: "",
        description: "",
        state: "",
      });
      swal(
        "Your listing has been submitted but still pending approval from us"
      );
    } catch (error) {
      swal("Oops!", error.response.data.message, "error");
      setLoading(false);
    }
  };
  //add listing success modal
  const popUpModal = (e) => {
    //make sure all fields are filled up
    e.preventDefault();
    const { address, description, email, name, number, price, rooms, state } =
      propertyData;
    if (
      !address ||
      !description ||
      !email ||
      !name ||
      !number ||
      !price ||
      !rooms ||
      !coverPhoto ||
      !state
    ) {
      return alert("Please fill all fields");
    }
    setShowAddImages(true);
  };
  const formInputClass =
    "flex-1 p-3 border-2 w-full border-solid border-black/25 outline-none hover:border-black  rounded-md";
  const inputWrapperClass =
    "md:my-3  w-full space-y-2 mb-2 flex flex-col md:flex-row items-center justify-between md:space-x-2";
  //   console.log(listings);
  return (
    <section className="bg-zinc-300 py-4 font-montserrat">
      <form action="" onSubmit={popUpModal}>
        <div className="container w-11/12 md:w-3/4 mx-auto flex flex-col items-center justify-center">
          <h1 className="uppercase font-bold text-xl md:text-4xl py-4">
            Appraisal form
          </h1>
          <p className="text-center  mb-2">
            Fill the details and our team will get back to you shortly
          </p>
          <div className={inputWrapperClass}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.email}
            />
          </div>
          <div className={inputWrapperClass}>
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.number}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.address}
            />
          </div>

          <div className={inputWrapperClass}>
            <input
              type="text"
              name="state"
              placeholder="State"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.state}
            />

            <input
              type="text"
              name="price"
              placeholder="Price Expectations in Naira"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.price}
            />
          </div>
          <div className={inputWrapperClass}>
            <select
              name="rooms"
              id=""
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.rooms}
            >
              <option value="" className="">
                Number of rooms
              </option>
              <option value="1" className="py-3">
                1 Bedroom
              </option>
              <option value="2">2 Bedroom</option>
              <option value="3">3 Bedroom</option>
              <option value="4">4 Bedroom</option>
              <option value="5+">5+ Bedroom</option>
            </select>
            <input
              type="file"
              name="coverImage"
              className={formInputClass}
              onChange={(e) => setCoverPhoto(e.target.files[0])}
            />
          </div>

          <div className={inputWrapperClass}>
            <textarea
              name="description"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter description about the property. You might wish to make it catchy"
              className={formInputClass}
              onChange={handleChange}
              value={propertyData.description}
            ></textarea>
          </div>
          <div className="my-3  w-full flex items-center justify-center">
            <button className="bg-black text-white p-2 w-full">
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
          handleSubmit={handleSubmit}
          propertyData={propertyData}
          setPropertyData={setPropertyData}
          coverPhoto={coverPhoto}
          setCoverPhoto={setCoverPhoto}
          loading={loading}
          setLoading={setLoading}
        />
      )}
    </section>
  );
}

export default Enquiry;
