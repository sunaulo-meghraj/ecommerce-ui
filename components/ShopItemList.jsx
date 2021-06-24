import React, { Fragment } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import SingleItem from "./SingleItem";

const ShopItemList = () => {
  function changeProductType() {}
  return (
    <Fragment>
      <div className="col-span-7  ">
        <div className="text-4xl md:text-7xl my-1 font-light">Shop</div>
        <div className="w-full flex flex-wrap justify-between item-center text-sm md:text-md  ">
          <div className="text-gray-400 ">Showing 1–16 of 23 results</div>

          <select
            name="cars"
            id="cars"
            className="w-50  border border-gray-400  text-sm"
            onChange={changeProductType()}
          >
            <option value="" selected>
              Default sorting
            </option>
            <option value="">Sort by poputarity</option>
            <option value="">Short by average rating</option>
            <option value="">Short by latest </option>
            <option value="">Short by price:low to high</option>
            <option value="">Short by price:high to low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:gap-8 md:grid-cols-4 my-7 ">
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
          <SingleItem />
        </div>
        <div className="flex justify-center space-x-4 ">
          <button className="bg-gray-200 my-10 hover:bg-[#712cf1] hover:text-white border border-black px-2">
            <AiOutlineArrowLeft />
          </button>
          <button className="bg-gray-200 my-10 hover:bg-[#712cf1] hover:text-white border border-black px-2">
            1
          </button>
          <button className="bg-gray-200 my-10 hover:bg-[#712cf1] hover:text-white border border-black px-2">
            2
          </button>
          <button className="bg-gray-200 my-10 hover:bg-[#712cf1] hover:text-white border border-black px-2">
            3
          </button>
          <button className="bg-gray-200 my-10 hover:bg-[#712cf1] hover:text-white border border-black px-2">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopItemList;
