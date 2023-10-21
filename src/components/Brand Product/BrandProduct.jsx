import React from "react";

const BrandProduct = ({ brandProduct }) => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-2xl  bg-black backdrop-filter  bg-opacity-50  shadow-xl ">
          <h2 className="mt-11">
            <span
              style={{ textTransform: "uppercase" }}
              className="text-white  text-7xl font-bold "
            >
              name
            </span>
          </h2>
          <h3 className="text-red-600 mb-10  text-7xl font-bold"> price</h3>

          <h3 className="text-white mb-6 text-2xl font-bold"> Details:</h3>
          <h3 className="text-gray-100 mb-11  text-xl font-bold"> details</h3>
        </div>
      </div>
    </div>
  );
};

export default BrandProduct;
