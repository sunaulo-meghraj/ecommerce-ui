import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const SingleItem = () => {
  return (
    <div>
      <img src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2013/06/hoodie_6_front.jpg"></img>
      <h5 className="my-7">Woo Logo</h5>
      <div className="flex text-sm text-[#745CF9]">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />{" "}
      </div>
      <div className="text-green-500 my-2 text-sm font-light">£35.00</div>
      <button className="text-white font-semibold sm:tracking-widest mt-3	rounded-md w-full py-3  bg-[#745CF9] ">
        ADD TO CARD
      </button>
    </div>
  );
};

export default SingleItem;
