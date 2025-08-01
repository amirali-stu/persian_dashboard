import React from "react";
// import car from ""
import laptop from "../../public/images/products/laptop.webp";
import car from "../../public/images/products/car.webp";
import ProductsCell from "./ProductsCell";
// import car from "images/products/car.webp"

function ProductsForm() {
  return (
    <div className="w-full bg-white rounded-md px-3 py-2">
      <table>
        <thead>
          <tr className="grid grid-cols-6 *:text-start items-center px-10 mr-4 py-10 text-lg">
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>تعداد</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1">
          <ProductsCell img={laptop} title={"laptop"} price={120_000} count={15}/>
          <ProductsCell img={car} title={"car"} price={1_820_000} count={95}/>
        </tbody>
      </table>
    </div>
  );
}

export default ProductsForm;
