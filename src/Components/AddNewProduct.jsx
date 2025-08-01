import React, { useState } from "react";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { LuMailbox } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { GiSellCard } from "react-icons/gi";
import { HiColorSwatch } from "react-icons/hi";

import AddNewProductInput from "./AddNewProductInput";

const AddNewProduct = ({ title }) => {
  const [inputsValue, setInputsValue] = useState({
    productName: "",
    productPrice: "",
    productCount: "",
    productImageLocation: "",
    productPopularityRate: "",
    productSalesVolume: "",
    productNumberOfColors: "",
  });

  const handleChange = (field, value) => {
    setInputsValue((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div>
      <h1 className="text-3xl mb-8">{title}</h1>
      <div className="w-full p-4 bg-white rounded-lg">
        <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-x-5 gap-y-2">
          <AddNewProductInput
            icon={MdDriveFileRenameOutline}
            plcTitle={"اسم محصول را وارد کنید"}
            value={inputsValue.productName}
            onChange={(e) => handleChange("productName", e.target.value)}
          />
          <AddNewProductInput
            icon={BiDollar}
            plcTitle={"قیمت محصول را وارد کنید"}
            value={inputsValue.productPrice}
            onChange={(e) => handleChange("productPrice", e.target.value)}
          />
          <AddNewProductInput
            icon={LuMailbox}
            plcTitle={"موجودی محصول را وارد کنید"}
            value={inputsValue.productCount}
            onChange={(e) => handleChange("productCount", e.target.value)}
          />
          <AddNewProductInput
            icon={FaLocationDot}
            plcTitle={"آدرس عکس را وارد کنید"}
            value={inputsValue.productImageLocation}
            onChange={(e) => handleChange("productImageLocation", e.target.value)}
          />
          <AddNewProductInput
            icon={BiSolidLike}
            plcTitle={"میزان محبوبیت محصول را بنویسید"}
            value={inputsValue.productPopularityRate}
            onChange={(e) => handleChange("productPopularityRate", e.target.value)}
          />
          <AddNewProductInput
            icon={GiSellCard}
            plcTitle={"میزان فروش محصول را بنویسید"}
            value={inputsValue.productSalesVolume}
            onChange={(e) => handleChange("productSalesVolume", e.target.value)}
          />
          <AddNewProductInput
            icon={HiColorSwatch}
            plcTitle={"تعداد رنگ بندی محصول را بنویسید"}
            value={inputsValue.productNumberOfColors}
            onChange={(e) => handleChange("productNumberOfColors", e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#471AAA] text-white border-black border-2 px-3 py-2 rounded-lg cursor-pointer my-2 max-md:mt-5"
          >
            ثبت محصول
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewProduct;
