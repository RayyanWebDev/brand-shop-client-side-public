import React, { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(
      "https://lilac-cosmetic-and-beauty-website-eow2p9ey1.vercel.app/brand"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="BrandShows">
      <div className=" max-w-screen-2xl mx-auto ">
        <div className="grid justify-center">
          <div className="flex gap-24 mt-5">
            <div className="texr-s text-2xl font-semibold ">Our Services</div>
            <p className="w-80 border-t border-gray-400 my-4 "></p>
          </div>
          <div>
            {" "}
            <span className="text-7xl font-bold">Our Partner Brands</span>
          </div>
          <div className="mt-7 mb-20">
            In a world filled with chaos, beauty stands as a tranquil oasis,
            offering solace, hope, and a <br /> timeless sense of wonder.
          </div>
        </div>

        <div className="grid grid-cols-3">
          {brands.map((brand) => (
            <Brand key={brand._id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
