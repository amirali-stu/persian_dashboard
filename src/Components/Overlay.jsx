import React from "react";
import { useContext } from "react";
import SidebarContext from "../Context/Context";

function Overlay() {
  const contextData = useContext(SidebarContext);
  console.log(!contextData.isOpen);

  const hideSidebar = () => {
    contextData.setIsOpen(false);
  };

  return (
    <div
      onClick={hideSidebar}
      className={`absolute inset-0 w-full h-full z-30 bg-black/50 ${
        !contextData.isOpen && "hidden"
      }`}
    ></div>
  );
}

export default Overlay;
