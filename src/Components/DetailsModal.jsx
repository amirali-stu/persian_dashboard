import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ReactDOM from "react-dom";

function DetailsModal({ img, title, price, count, hideModal }) {
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
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center transition-all active_modal">
      <div className="bg-white flex-col py-5 items-center justify-center rounded-md inline-flex m-auto scale-90 transition-all w-full max-w-[800px] mx-4">
        <button
          className="cursor-pointer absolute top-5 left-5"
          onClick={hideModal}
        >
          <IoClose size={20} />
        </button>

        {/* اضافه کردن اسکرول افقی فقط برای جدول */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[600px]">
            <thead>
              <tr className="grid grid-cols-4 *:text-start items-center px-10 mr-4 py-10 text-lg max-md:px-4 max-md:py-4">
                <th>عکس</th>
                <th>نام</th>
                <th>قیمت</th>
                <th>تعداد</th>
              </tr>
            </thead>
            <tbody>
              <tr className="items-center justify-between px-10 py-5 w-250 text-lg grid grid-cols-4 *:text-start max-md:px-4 max-md:py-4">
                <td>
                  <img src={img} alt="laptop products" className="w-20" />
                </td>
                <td>
                  <h4 className="truncate max-w-[120px]">{title}</h4>
                </td>
                <td>
                  <p>{price}$</p>
                </td>
                <td>
                  <p>{count}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>,
    document.getElementById("modal-wrapper")
  );
}

export default DetailsModal;
