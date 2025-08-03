import React, { useState } from "react";
import laptop from "../../public/images/products/laptop.webp";
import car from "../../public/images/products/car.webp";
import ProductsCell from "./ProductsCell";
import DeleteModal from "./DeleteModal";
import DetailsModal from "./DetailsModal";
import EditModal from "./EditModal";
// import car from "images/products/car.webp"

function ProductsForm() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);

  const submitDeleteModal = () => {
    console.log("submitDeleteModal");
    setIsShowDeleteModal(false);
  };
  const cancelDeleteModal = () => {
    console.log("cancelDeleteModal");
    setIsShowDeleteModal(false);
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded-md px-3 py-2">
      <table className="w-full min-w-[200px]">
        <thead>
          <tr className="grid grid-cols-6 *:max-md:text-center *:md:text-start items-center md:px-10 mr-4 md:py-10 max-md:py-4 text-lg">
            <th>عکس</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th className="col-span-2">عملیات</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1">
          <ProductsCell
            img={laptop}
            title={"laptop"}
            price={120_000}
            count={15}
            setIsShowDeleteModal={setIsShowDeleteModal}
            setIsShowDetailsModal={setIsShowDetailsModal}
            setIsShowEditModal={setIsShowEditModal}
          />
          <ProductsCell
            img={car}
            title={"car"}
            price={1_820_000}
            count={95}
            setIsShowDeleteModal={setIsShowDeleteModal}
            setIsShowDetailsModal={setIsShowDetailsModal}
            setIsShowEditModal={setIsShowEditModal}
          />
        </tbody>
      </table>

      {isShowDeleteModal && (
        <DeleteModal
          submitAction={submitDeleteModal}
          cancelAction={cancelDeleteModal}
          hideModal={() => setIsShowDeleteModal(false)}
        />
      )}
      {isShowDetailsModal && (
        <DetailsModal
          img={laptop}
          title={"laptop"}
          price={120_000}
          count={15}
          hideModal={() => setIsShowDetailsModal(false)}
        />
      )}
      {isShowEditModal && (
        <EditModal hideModal={() => setIsShowEditModal(false)} />
      )}
    </div>
  );
}

export default ProductsForm;
