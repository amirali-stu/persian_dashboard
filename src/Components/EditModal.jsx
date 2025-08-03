import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

function EditModal({ hideModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        hideModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hideModal]);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    count: "",
    img: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    hideModal();
    setFormData({
      title: "",
      price: "",
      count: "",
      img: "",
    });
  };

  return ReactDOM.createPortal(
    <div className="fixed items-center justify-center inset-0 bg-[rgba(0,0,0,0.7)] z-50 transition-all active_modal">
      <div className="bg-white w-82  flex-col py-5 items-center justify-center rounded-md inline-flex m-auto scale-90 transition-all">
        <h4>ویرایش محصول "x"</h4>
        <form
          className="flex flex-col gap-y-2 w-full *:px-5 *:py-2"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              id="title"
              className="border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:ring-4 focus:ring-[#481aaacc] transition-all duration-300"
              placeholder="نام محصول"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              id="title"
              className="border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:ring-4 focus:ring-[#481aaacc] transition-all duration-300"
              placeholder="قیمت محصول"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              id="title"
              className="border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:ring-4 focus:ring-[#481aaacc] transition-all duration-300"
              placeholder="تعداد محصول"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="file"
              id="title"
              className="border-2 border-gray-300 rounded-md p-2 w-full outline-none focus:ring-4 focus:ring-[#481aaacc] transition-all duration-300"
              placeholder="عکس محصول"
              onChange={handleChange}
            />
          </div>
          <button
            className=" bg-[#471AAA] text-white rounded-md p-2 cursor-pointer mx-5 my-2"
            onClick={(event) => {
              event.preventDefault();
              hideModal();
            }}
          >
            ویرایش
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-wrapper")
  );
}

export default EditModal;
