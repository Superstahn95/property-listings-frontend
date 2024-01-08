import axios from "../config/axios";
import { useState } from "react";
import swal from "sweetalert";

function RequestForm({ showRequestForm, setShowRequestForm, listingId }) {
  const [requestData, setRequestData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, phoneNumber } = requestData;
    if (!email || !name || !phoneNumber) {
      return alert("All form fields should be filled");
    }
    setLoading(true);
    try {
      const response = await axios.post(`/request/${listingId}`, requestData);
      console.log(response.data);
      setLoading(false);
      setShowRequestForm(false);
      setRequestData({
        name: "",
        email: "",
        phoneNumber: "",
      });
      //   alert("Request has been sent!! We will get back to you.");
      swal(response.data.message);
    } catch (error) {
      swal("Oops!", error.response.data.message, "error");
      setLoading(false);
    }
  };
  return (
    <form
      className="my-5 flex flex-col items-center justify-center w-full "
      onSubmit={handleSubmit}
    >
      <div className="mb-3 flex items-center justify-center flex-1 w-full">
        <input
          type="text"
          name="name"
          value={requestData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className=" p-3 border-2 border-solid w-full md:w-[500px] border-black/25 outline-none hover:border-black  rounded-md"
        />
      </div>
      <div className="mb-3 flex items-center justify-center flex-1 w-full">
        <input
          type="email"
          name="email"
          value={requestData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className=" p-3 border-2 border-solid w-full md:w-[500px] border-black/25 outline-none hover:border-black  rounded-md"
        />
      </div>
      <div className="mb-3 flex items-center justify-center flex-1 w-full">
        <input
          type="text"
          name="phoneNumber"
          value={requestData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className=" p-3 border-2 border-solid w-full md:w-[500px] border-black/25 outline-none hover:border-black  rounded-md"
        />
      </div>
      <div className="mb-3 flex items-center justify-center flex-1 w-full">
        <button className="py-2 w-full md:w-[500px] bg-black text-white rounded-md ">
          {loading ? "Loading..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}

export default RequestForm;
// name,
// email,
// phone
