import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function DeleteModal({ submitAction, cancelAction, hideModal }) {
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

  return ReactDOM.createPortal(
    <div className="fixed items-center justify-center inset-0 bg-[rgba(0,0,0,0.7)] z-50 transition-all active_modal">
      <div className="bg-white w-82  flex-col py-5 items-center justify-center rounded-md inline-flex m-auto scale-90 transition-all">
        <h4>آیا از حذف X مطمین هستید؟</h4>
        <div className="flex items-center gap-x-5 mt-5">
          <button
            className="w-18 h-10 text-white bg-[#471AAA] cursor-pointer"
            onClick={() => submitAction()}
          >
            بله
          </button>
          <button
            className="w-18 h-10 text-white bg-gray-500 cursor-pointer"
            onClick={() => cancelAction()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-wrapper")
  );
}

export default DeleteModal;
