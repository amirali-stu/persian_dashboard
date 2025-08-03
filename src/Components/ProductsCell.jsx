import React, { useState } from "react";

function ProductsCell({
  datas,
  setIsShowDeleteModal,
  setIsShowDetailsModal,
  setIsShowEditModal,
}) {
  return (
    <>
      {datas.map((data) => (
        <tr
          key={data.id}
          className="items-center justify-between md:px-10 max-md:px-4 md:py-5 max-md:py-4 md:text-lg grid grid-cols-6 *:max-md:text-center *:md:text-start min-w-full"
        >
          <td className="*:md:mx-0 *:max-md:mx-auto">
            <img
              src={data.img}
              alt={data.title}
              className="w-20 object-contain"
            />
          </td>
          <td className="max-w-[150px] text-center md:max-w-full truncate overflow-hidden whitespace-nowrap">
            {data.title}
          </td>
          <td>{data.price}$</td>
          <td>{data.count}</td>
          <td className="flex items-center gap-x-5 *:md:px-5 *:md:py-2 *:max-md:p-2 *:rounded-md *:border-2 *:border-black *:cursor-pointer *:bg-[#471AAA] *:text-white col-span-2 md:mx-0">
            <button onClick={() => setIsShowEditModal(data)}>ویرایش</button>
            <button onClick={() => setIsShowDeleteModal(data)}>حذف</button>
            <button onClick={() => setIsShowDetailsModal(data)}>جزییات</button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default ProductsCell;
