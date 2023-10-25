import { data } from "autoprefixer";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const { brandName } = useParams();
  const product = products.find((product) => product.brandName == brandName);
  console.log(product);

  // const handleCart = () => {
  //   const { _id, brandName } = product;

  //   const cartData = {
  //     _id,
  //     brandName,
  //   };
  //   console.log(cartData);
  //   fetch("https://lilac-cosmetic-and-beauty-website-eow2p9ey1.vercel.app/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(cartData),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <div>fjdkf</div>
      {/* <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-2xl  bg-black backdrop-filter  bg-opacity-50  shadow-xl ">
          <h2 className="mt-11">
            <span
              style={{ textTransform: "uppercase" }}
              className="text-white  text-7xl font-bold "
            >
              {product.product2[0].Name}
            </span>
          </h2>
          <h3 className="text-black mb-10  text-7xl font-bold">
            {" "}
            ${product.price}
          </h3>

          <h3 className="text-black mb-6 text-2xl font-bold"> Details:</h3>
          <h3 className="text-gray-100 mb-11  text-xl font-bold">
            {" "}
            {product.product2[0].Details}
          </h3>
          <Link to="/myCart">
            <button onClick={handleCart} type="submit">
              Add to Cart
            </button>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetails;
