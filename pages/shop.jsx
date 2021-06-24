import React, { Fragment } from "react";
import ShopSidebar from "../components/ShopSidebar";
import ShopItemList from "../components/ShopItemList";

const Shop = () => {
  return (
    <Fragment>
      <div className="py-20 text-xl px-10 md:px-20 lg:px-40 bg-gray-300 sm:text-3xl font-light">
        Archives: Products
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-20 mx-5 md:ml-20 md:mr-10 lg:space-x-6 lg:mx-[10%]  ">
        <ShopItemList />

        <ShopSidebar />
      </div>
    </Fragment>
  );
};

export default Shop;
