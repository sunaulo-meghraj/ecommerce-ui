import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Singleproductlist = () => {
  return (
    <div className="flex text-gray-400 items-center justify-between my-5 text-sm">
      <div>
        <h5>
          <a href="/" className="hover:text-blue-700">
            Woo Single #2
          </a>
        </h5>
        <div className="flex text-sm">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />{" "}
        </div>
        <div className="">
          <span className="line-through">£35.00</span> £10.00
        </div>
      </div>
      <img
        src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2013/06/cd_6_angle.jpg"
        className="w-16"
      ></img>
    </div>
  );
};

export default Singleproductlist;
