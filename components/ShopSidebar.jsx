import React from "react";
import ShopProductlist from "./ShopProductlist";
import RecentShopitem from "./RecentShopitem";

const ShopSidebar = () => {
  return (
    <div className="col-span-5 pl-3 w-full ">
      <div className="text-2xl"> Cart</div>
      <div className="text-gray-400 my-5 ">No products in the cart.</div>
      <div>
        <div className="text-xl">Filter by price</div>

        <input type="range" min="0" max="100" className="w-full m-4 "></input>

        <div className="flex justify-between  ">
          <button className="text-white text-xl font-semibold sm:tracking-widest my-5 w-56  py-3 hover:bg-[#711Df1] bg-[#745CF9] ">
            Filter
          </button>
          <div className="text-gray-400 text-sm m-5">Price: £0 — £40</div>
        </div>

        <ShopProductlist />
        <RecentShopitem />
      </div>
    </div>
  );
};

export default ShopSidebar;
