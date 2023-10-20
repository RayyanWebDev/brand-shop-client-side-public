import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">Page Not Found</div>
      <Link to="/">Go Back To HOME</Link>
    </div>
  );
};

export default Page404;
