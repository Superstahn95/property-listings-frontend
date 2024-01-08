import Map from "../components/Map";
import { BsHouseAdd } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephonePlus } from "react-icons/bs";
import { useState } from "react";
import axios from "../config/axios";
import swal from "sweetalert";

function Contact() {
  const [messageData, setMessageData] = useState({
    message: "",
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, message, name, phoneNumber } = messageData;
    if (!email || !message || !name || !phoneNumber) {
      return alert("Please fill all fields");
    }
    setLoading(true);
    try {
      const response = await axios.post("/message", messageData);
      console.log(response.data);
      setLoading(false);
      setMessageData({
        message: "",
        name: "",
        phoneNumber: "",
        email: "",
      });
      swal(
        "We have received your message and will get  back to you as soon as possible"
      );
    } catch (error) {
      swal("Oops!", error.response.data.message, "error");
      setLoading(false);
    }
  };
  return (
    <div className="font-montserrat  mt-14 md:mt-24">
      <div className="md:px-7 py-10 ">
        <Map />
      </div>
      {/* <div></div> */}
      <div className="grid w-11/12 md:w-4/5 mx-auto  md:grid-cols-5 md:px-7 py-5 md:py-10 gap-10">
        <div className="col-span-3">
          <h2 className="text-xl md:text-3xl text-sky-900 font-bold py-3">
            Get in touch with the team
          </h2>
          <form className=" " onSubmit={handleSubmit}>
            <div className="w-full">
              <textarea
                name="message"
                rows="10"
                className="min-w-full outline-none border border-solid border-black/40 p-1 md:p-3"
                placeholder="Enter message"
                onChange={handleChange}
                value={messageData.message}
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 gap-2 md:gap-7 my-4">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                className="p-3 outline-none border border-solid border-black/40"
                onChange={handleChange}
                value={messageData.name}
              />
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-3 outline-none border border-solid border-black/40"
                name="email"
                onChange={handleChange}
                value={messageData.email}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Phone number"
                className=" p-3 outline-none border border-solid border-black/40 w-full"
                name="phoneNumber"
                onChange={handleChange}
                value={messageData.phoneNumber}
              />
            </div>
            <div className="my-3">
              <button
                className="py-2 px-4 md:py-4 md:px-7 bg-transparent text-yellow-500 font-bold
              border border-solid border-yellow-500 hover:bg-yellow-500 hover:text-white ease-in-out duration-500"
              >
                {loading ? "Loading..." : "Send"}
              </button>
            </div>
            {/* <p>{sent}</p> */}
          </form>
        </div>
        <div className="col-span-2 md:p-10">
          <div className="flex items-center py-3">
            <BsHouseAdd size={30} />
            <div className="ms-4">
              <p className="text-sm md:text-lg font-bold">
                Port Harcourt, Nigeria
              </p>
            </div>
          </div>
          <div className="flex items-center py-3">
            <BsTelephonePlus size={30} />
            <div className="ms-4 ">
              <p className="text-sm md:text-lg font-bold">+2348101891481</p>
              <p className="text-black/40 text-xs">Mon to fri 9am to 6pm</p>
            </div>
          </div>
          <div className="flex items-center py-3">
            <AiOutlineMail size={30} />
            <div className="ms-4 ">
              <p className="text-sm md:text-lg font-bold">
                Superstahn@gmail.com
              </p>
              <p className="text-black/40 text-xs">
                Send a message to us at anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
