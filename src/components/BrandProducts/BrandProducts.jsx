import React, { useEffect, useState } from "react";
import BrandProduct from "../Brand Product/BrandProduct";

const BrandProducts = () => {
  const [brandProducts, setBrandProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setBrandProducts(data));
  }, []);
  return (
    <div>
      <div>
        <p>Books:{brandProducts.length}</p>
      </div>
      {brandProducts.map((brandProduct) => (
        <BrandProduct
          key={brandProduct._id}
          brandProduct={brandProduct}
        ></BrandProduct>
      ))}
    </div>
  );
};

export default BrandProducts;

// <div className="grid grid-cols-3">
//           {brands.map((brand) => (
//             <Brand key={brand.id} brand={brand}></Brand>
//           ))}
//         </div>
