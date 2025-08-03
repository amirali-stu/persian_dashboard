import React, { useContext, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { LuBaggageClaim } from "react-icons/lu";
import { LiaComments } from "react-icons/lia";
import { HiMiniUsers } from "react-icons/hi2";
import { BsBagPlus } from "react-icons/bs";
import { RiDiscountPercentLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";
import SidebarContext from "../Context/Context";

function Sidebar() {
  const contextData = useContext(SidebarContext);
  // get location page
  const location = useLocation();

  // To close the sidebar when our location or page changes
  useEffect(() => {
    if (window.innerWidth < 768) {
      contextData.setIsOpen(false);
    }
  }, [location]);

  return (
    <div
      className={`h-screen right-0 w-[250px] bg-[#471AAA] z-50 max-md:shadow-[0px_0px_20px_#000000b1]`}
    >
      <h1 className="text-white text-2xl text-center py-3">
        به داشبورد خود خوش آمدید
      </h1>
      <span className="block w-full h-0.5 bg-white/50"></span>
      <ul className="*:pr-3 *:py-3 *:text-lg *:w-full *:cursor-pointer flex flex-col gap-y-2 mt-2 *:transition-all">
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/"}
        >
          <IoHomeOutline size={20} />
          صفحه اصلی
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/products"}
        >
          <LuBaggageClaim size={20} />
          محصولات
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/comments"}
        >
          <LiaComments size={20} />
          کامنت ها
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/users"}
        >
          <HiMiniUsers size={20} />
          کاربران
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/orders"}
        >
          <BsBagPlus size={20} />
          سفارشات
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-x-2 ${isActive ? "active_menu_sidebar" : ""}`
          }
          to={"/discounts"}
        >
          <RiDiscountPercentLine size={20} />
          تخفیف ها
        </NavLink>
      </ul>
      <div className="w-full border-t-2 pr-3 pt-3 border-white/50 md:hidden max-md:flex flex-col -gap-y-2">
        <h3 className="text-lg">محمدحسین سعیدی راد</h3>
        <span className="text-sm text-gray-400">برنامه نویس فرانت اند</span>
      </div>
    </div>
  );
}

export default Sidebar;
