import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import BrandShows from "../BrandShows/BrandShows";
import OurMotto from "../OurMotto/OurMotto";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <>
        <Banner></Banner>
        <BrandShows></BrandShows>
        <OurMotto></OurMotto>
        <Brands></Brands>
        {/* <Footer></Footer> */}
      </>
    </div>
  );
};

export default Home;
