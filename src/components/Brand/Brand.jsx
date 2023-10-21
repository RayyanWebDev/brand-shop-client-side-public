import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { _id, image, brandName } = brand;
  return (
    <div>
      <div className=" ">
        <Link to={`/brand/${brandName}`}>
          <div className="card w-96 bg-base-100 shadow-xl mb-14 bg-transparent">
            <figure className="px-10 pt-10">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title"> {brandName} </h2>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Brand;

{
  /* <div className="card-actions">
              <Link to={`/service/${id}`}>
                <button className="btn but bg-red-400 ">Details</button>
              </Link>
            </div> */
}
