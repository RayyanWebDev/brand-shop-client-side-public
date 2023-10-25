import React from "react";
import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const shortDescription = form.shortDescription.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const newProducts = {
      productName,
      brandName,
      type,
      price,
      shortDescription,
      rating,
      image,
    };
    console.log(newProducts);
    fetch(
      "https://lilac-cosmetic-and-beauty-website-eow2p9ey1.vercel.app/product",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProducts),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.incertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="form">
      <form onSubmit={handleAddProduct}>
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                name="productName"
                type="text"
                placeholder="Product Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                name="brandName"
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* .......... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <input
                name="type"
                type="text"
                placeholder="Type"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                name="price"
                type="text"
                placeholder="Price"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* ......... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                name="shortDescription"
                type="text"
                placeholder="Short Description"
                className="input input-bordered w-96"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                name="rating"
                type="text"
                placeholder="Rating"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        {/* .... */}
        <div className="flex max-w-screen-2xl mx-auto justify-center">
          <div className="form-control mr-10">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                name="image"
                type="text"
                placeholder="Image URL"
                className="input input-bordered w-96"
              />
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-9">
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block   max-w-screen-2xl mx-auto w-80"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
