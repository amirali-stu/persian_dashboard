import React from "react";

function ProductsCell({ img, title, price, count }) {
  return (
    <tr className="items-center justify-between px-10 py-5 text-lg w-300 grid grid-cols-6 *:text-start">
      <td className="*:md:mx-0">
        <img src={img} alt="laptop products" className="w-20" />
      </td>
      <td>{title}</td>
      <td>{price}$</td>
      <td>{count}</td>
      <td className="flex items-center gap-x-5 *:px-5 *:py-2 *:rounded-md *:border-2 *:border-black *:cursor-pointer *:bg-[#471AAA] *:text-white col-span-2 md:mx-0">
        <button>ویرایش</button>
        <button>حذف</button>
        <button>جزییات</button>
      </td>
    </tr>
  );
}

export default ProductsCell;
