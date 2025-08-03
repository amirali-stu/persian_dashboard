// import devDependencies

import { useState } from "react";
import { useRoutes } from "react-router-dom";

// import devDependencies

// //////////////////////////

// import pages

import Comments from "./Pages/Comments";
import Discounts from "./Pages/Discounts";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import NotFoundPage from "./Pages/NotFoundPage";

// import pages

// //////////////////////////

// import components

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Overlay from "./Components/Overlay";

// import components

// //////////////////////////

// import context

import SidebarContext from "./Context/Context";

// import context

// //////////////////////////

function App() {
  // Hooks

  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Hooks

  // routers

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/users", element: <Users /> },
    { path: "/products", element: <Products /> },
    { path: "/orders", element: <Orders /> },
    { path: "/discounts", element: <Discounts /> },
    { path: "/comments", element: <Comments /> },
    { path: "*", element: <NotFoundPage /> },
  ];

  // routers

  const routers = useRoutes(routes);

  return (
    <div className={`flex bg-[#f0f0f0] ${isDark && "dark"}`}>
      <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        {/* Sidebar */}
        <div
          className={`text-white fixed md:right-0 top-0 h-screen z-50 transition-all duration-300 ${
            isOpen ? "max-md:right-0" : "max-md:-right-full"
          }`}
        >
          <Sidebar />
        </div>

        {/* Main content wrapper with padding-left to account for sidebar */}
        <div className="flex-1 md:pr-64">
          {/* Header */}
          <div className="">
            <Header dark={isDark} setDark={setIsDark}/>
          </div>

          {/* Body content below the header */}
          <div className="p-4 min-h-screen">{routers}</div>
        </div>

        {/* overlays */}
        <div className="max-md:block md:hidden">
          <Overlay />
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default App;
