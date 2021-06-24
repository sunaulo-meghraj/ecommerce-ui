import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RecentSingleproduct = () => {
  return (
    <div className="flex text-gray-400 items-center justify-between my-5 text-sm">
      <div>
        <h5>
          <a href="/" className="hover:text-blue-700">
            Ship Your Idea
          </a>
        </h5>
        <div className="flex text-sm">
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />{" "}
        </div>
        <div className="">by don</div>
      </div>
      <img
        src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2013/06/hoodie_5_front.jpg"
        className="w-16"
      ></img>
    </div>
  );
};

export default RecentSingleproduct;
