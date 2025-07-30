import React, { useState } from "react";
import AddNewProduct from "../Components/AddNewProduct";
import ProductsForm from "../Components/ProductsForm";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, title: "laptop", price: 120_000, count: 15 },
  ]);

  return (
    <div className="flex flex-col gap-y-5">
      <AddNewProduct title={"محصول جدید"} />
      {products.length ? <ProductsForm /> : false}
    </div>
  );
}

export default Products;
