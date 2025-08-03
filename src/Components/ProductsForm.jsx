import React, { useEffect, useState } from "react";
import ProductsCell from "./ProductsCell";
import DeleteModal from "./DeleteModal";
import DetailsModal from "./DetailsModal";
import EditModal from "./EditModal";
import Errorbox from "./Errorbox";

function ProductsForm() {
  // states
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isProductsData, setIsProductsData] = useState([]);

  // function btns action delete modal
  const submitDeleteModal = () => {
    console.log("submitDeleteModal");
    setIsShowDeleteModal(false);
  };
  const cancelDeleteModal = () => {
    console.log("cancelDeleteModal");
    setIsShowDeleteModal(false);
  };

  // base url api
  const baseUrl = "http://localhost:8000/api/";

  useEffect(() => {
    // get all products as api
    const getProductsFunc = async () => {
      try {
        const response = await fetch(`${baseUrl}products/`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setIsProductsData(data);
      } catch (error) {
        console.error("خطا در دریافت محصولات:", error.message);
      }
    };

    getProductsFunc();
  }, []);

  return (
    <div className="w-full overflow-x-auto bg-white rounded-md px-3 py-2">
      {/*START Check to display an error message if a product does not exist in the database. */}
      {isProductsData.length ? (
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
              setIsShowDeleteModal={setIsShowDeleteModal}
              setIsShowDetailsModal={setIsShowDetailsModal}
              setIsShowEditModal={setIsShowEditModal}
              datas={isProductsData}
            />
          </tbody>
        </table>
      ) : (
        <Errorbox msg={"هیچ محصولی یافت نشد"} />
      )}
      {/*FINISH Check to display an error message if a product does not exist in the database. */}

      {/*START Condition for displaying operation modals */}
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
      {/*FINISH Condition for displaying operation modals */}
    </div>
  );
}

export default ProductsForm;
