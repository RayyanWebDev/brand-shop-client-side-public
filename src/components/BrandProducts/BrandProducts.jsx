import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BrandProducts = () => {
  const brands = useLoaderData();
  const { brandName } = useParams();
  const brand = brands.find((brand) => brand.brandName == brandName);
  console.log(brand);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={brand.bannerImg} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={brand.bannerImg2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={brand.bannerImg3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /////// */}
      <div>
        <h2 className="text-center text-5xl font-semibold">
          Products We Offer
        </h2>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent max-w-screen-2xl mx-auto mt-16  ">
        <div className="">
          <figure className="px-10 pt-10">
            <img
              src={brand.product1[0].image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Brand: {brandName} </h2>
            <h2 className="card-title">Product:{brand.product1[0].Name} </h2>
            <h2 className="card-title"> Type: {brand.type} </h2>
            <h2 className="card-title"> Price: {brand.price} </h2>
            <h2 className="card-title"> Rating: {brand.rating} </h2>
            <button>Detail</button> <br />
            <button>Update</button>
          </div>
        </div>
        {/* / */}
        <div className="">
          <figure className="px-10 pt-10">
            <img
              src={brand.product2[0].image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Brand: {brandName} </h2>
            <h2 className="card-title">Product:{brand.product2[0].Name} </h2>
            <h2 className="card-title"> Type: {brand.type} </h2>
            <h2 className="card-title"> Price: {brand.price} </h2>
            <h2 className="card-title"> Rating: {brand.rating} </h2>
            <button>Detail</button> <br />
            <button>Update</button>
          </div>
        </div>
        {/* / */}
        <div className="">
          <figure className="px-10 pt-10">
            <img
              src={brand.product3[0].image}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Brand: {brandName} </h2>
            <h2 className="card-title">Product:{brand.product3[0].Name} </h2>
            <h2 className="card-title"> Type: {brand.type} </h2>
            <h2 className="card-title"> Price: {brand.price} </h2>
            <h2 className="card-title"> Rating: {brand.rating} </h2>
            <button>Detail</button> <br />
            <button>Update</button>
          </div>
        </div>
        {/* / */}
      </div>
    </div>
  );
};

export default BrandProducts;

// import React, { useEffect, useState } from "react";
// import BrandProduct from "../Brand Product/BrandProduct";

// const BrandProducts = () => {
//   const [brandProducts, setBrandProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:5000/brand")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   }, []);
//   return (
//     <div className="max-w-screen-2xl mx-auto">
//       <div>
//         <p>Books:{brandProducts.length}</p>
//       </div>
//       {brandProducts.map((brandProduct) => (
//         <BrandProduct
//           key={brandProduct._id}
//           brandProduct={brandProduct}
//         ></BrandProduct>
//       ))}
//     </div>
//   );
// };

// export default BrandProducts;

// // <div className="grid grid-cols-3">
// //           {brands.map((brand) => (
// //             <Brand key={brand.id} brand={brand}></Brand>
// //           ))}
// //         </div>
