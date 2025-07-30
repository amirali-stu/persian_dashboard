import React from "react";
import img from "../../public/images/notfound/img.png"
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-full flex justify-center items-center px-4 font-vazir text-right">
      <div className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full text-blue-900 space-y-6">
        <div className="flex flex-col items-center">
          <img
            src={img}
            alt="مرد گیج 404"
            className="w-72 md:w-96 mb-6 rounded-xl"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">
            صفحه پیدا نشد!
          </h1>
          <p className="text-base md:text-lg text-gray-700 text-center leading-relaxed max-w-md">
            متأسفانه صفحه‌ای که به دنبال آن بودید پیدا نشد یا ممکن است حذف شده
            باشد. لطفاً به داشبورد بازگردید.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            <IoArrowBackOutline size={20} />
            بازگشت به داشبورد
          </Link>
        </div>
      </div>
    </div>
  );
}
