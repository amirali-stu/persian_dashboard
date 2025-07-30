import React from "react";

const Errorbox = ({ msg }) => {
  return (
    <div className="w-full md:py-6 max-md:py-4 bg-red-600 text-white text-center lg:text-4xl md:text-3xl max-md:text-2xl *:select-none">
      <h4>{msg}</h4>
    </div>
  );
};

export default Errorbox;
