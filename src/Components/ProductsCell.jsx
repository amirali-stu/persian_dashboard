import React, { useState } from "react";

function ProductsCell({
  img,
  title,
  price,
  count,
  setIsShowDeleteModal,
  setIsShowDetailsModal,
  setIsShowEditModal,
}) {
  return (
    <tr className="items-center justify-between md:px-10 max-md:px-4 md:py-5 max-md:py-4 md:text-lg grid grid-cols-6 *:max-md:text-center *:md:text-start min-w-full">
      <td className="*:md:mx-0 *:max-md:mx-auto">
        <img src={img} alt="laptop products" className="w-20" />
      </td>
      <td className="max-w-[150px] text-center md:max-w-full truncate overflow-hidden whitespace-nowrap">
        {title}
      </td>

      <td>{price}$</td>
      <td>{count}</td>
      <td className="flex items-center gap-x-5 *:md:px-5 *:md:py-2 *:max-md:p-2 *:rounded-md *:border-2 *:border-black *:cursor-pointer *:bg-[#471AAA] *:text-white col-span-2 md:mx-0">
        <button onClick={() => setIsShowEditModal(true)}>ویرایش</button>
        <button onClick={() => setIsShowDeleteModal(true)}>حذف</button>
        <button onClick={() => setIsShowDetailsModal(true)}>جزییات</button>
      </td>
    </tr>
  );
}

export default ProductsCell;
