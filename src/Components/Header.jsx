import React, { useContext } from "react";
import profile from "../../public/images/profile/img.png";
import { IoIosNotifications } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarContext from "../Context/Context";

function Header() {

  const contextData = useContext(SidebarContext)

  return (
    <div className="w-full h-full flex items-center justify-between md:px-10 max-md:px-3 py-5 bg-[#f0f0f0]">
      <div className="flex items-center gap-x-3">
        {/* Menu icon */}
        <button className="max-md:flex md:hidden items-center justify-center w-10 h-10 bg-[#471AAA] text-white rounded-lg border-2 border-black cursor-pointer" onClick={() => contextData.setIsOpen(!contextData.isOpen)}>
          <HiMenuAlt3 size={20} />
        </button>
        <img src={profile} alt="profile" className="w-11 h-11 rounded-full" />
        <div className="md:flex max-md:hidden flex-col -gap-y-2">
          <h3 className="text-lg">محمدحسین سعیدی راد</h3>
          <span className="text-sm text-gray-600">برنامه نویس فرانت اند</span>
        </div>
      </div>
      <div className="flex items-center gap-x-5">
        {/* Search box */}
        <div className="w-82 h-12 bg-white rounded-lg px-2 items-center gap-x-1 shadow-lg lg:flex max-lg:hidden">
          <input
            type="text"
            placeholder="جست و جو کنید ..."
            className="outline-0 w-full h-[100%]"
          />
          <button
            className="text-white bg-[#471AAA] w-40 rounded-lg h-[80%] border-2 border-black cursor-pointer"
            type="submit"
          >
            جست و جو
          </button>
        </div>
        {/* Buttons */}
        <button className="flex items-center justify-center w-10 h-10 bg-[#471AAA] text-white rounded-lg border-2 border-black cursor-pointer">
          <IoIosNotifications size={20} />
        </button>
        <button className="flex items-center justify-center w-10 h-10 bg-[#471AAA] text-white rounded-lg border-2 border-black cursor-pointer">
          <FaSun size={20} />
        </button>
      </div>
    </div>
  );
}

export default Header;
