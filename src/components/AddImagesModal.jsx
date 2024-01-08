import { IoIosCloseCircle } from "react-icons/io";
import axios from "../config/axios";

function AddImagesModal({
  handleSubmit,
  images,
  setImages,
  loading,
  setLoading,
  setShowAddImages,
  propertyData,
  setPropertyData,
  coverPhoto,
  setCoverPhoto,
}) {
  // address, description, email, name, number, price, rooms
  //   const [images, setImages] = useState([]);
  const maxImages = 5;
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImages((prev) => [...prev, selectedImage]);
  };
  const handleAddImageClick = () => {
    if (images.length < maxImages) {
      document.getElementById("imageInput").click();
    }
  };
  const closeModal = () => {
    setImages([]);
    setShowAddImages(false);
  };
  const submitRequest = () => {
    const { address, description, email, name, number, price, rooms, state } =
      propertyData;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("rooms", rooms);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("state", state);
    formData.append("coverPhoto", coverPhoto);
    console.log(images);
    if (images.length > 0) {
      images.forEach((image, index) => {
        formData.append(`images`, image);
      });
    }
    handleSubmit(formData);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center">
      <div className="bg-white p-4 w-[90%] md:w-[800px] relative ">
        <div
          onClick={closeModal}
          className="absolute top-1 right-1 cursor-pointer"
        >
          <IoIosCloseCircle size={35} />
        </div>
        <p className="font-bold text-lg">
          Do you still wish to share some more images of this property?
        </p>
        <p>Click on the button to add images</p>
        <input
          type="file"
          id="imageInput"
          className="hidden"
          onChange={handleImageChange}
        />
        <div className="grid grid-cols-3 gap-4 my-5">
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={URL.createObjectURL(image)}
                alt={`image-${index}`}
                className="max-h-[200px] w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center mt-5 space-x-3">
          {images.length < maxImages && (
            <button
              onClick={handleAddImageClick}
              className="bg-black text-white p-3 rounded-md "
            >
              Add Image ({images.length}/{maxImages})
            </button>
          )}
          <button
            onClick={submitRequest}
            className="bg-black text-white p-3 rounded-md "
          >
            {loading ? "Loading..." : "Proceed to submit request"}
          </button>
        </div>
        {images.length < 1 && (
          <div className="border border-black mt-4 py-2 text-xl flex items-center justify-center">
            No images selected
          </div>
        )}
      </div>
    </div>
  );
}

export default AddImagesModal;
