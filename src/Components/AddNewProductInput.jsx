import React from "react";

const AddNewProductInput = ({ plcTitle, icon: Icon, value, onChange }) => {
  return (
    <div className="bg-[#f0f0f0] flex items-center gap-x-4 py-2 px-3 rounded-md">
      <Icon size={20} />
      <input
        type="text"
        className="w-full h-full bg-transparent outline-none"
        placeholder={plcTitle}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default AddNewProductInput;
