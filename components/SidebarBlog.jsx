import React from "react";
import TopPost from "./TopPost";
import Categories from "./Categories";
import RecentPosts from "./RecentPostsBlog";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const SidebarBlog = () => {
  return (
    <div className=" col-span-4 w-full ">
      <div className="flex justify-between text-xl items-center h-12 border text-gray-300 border-gray-300 bg-white ">
        <input
          type="text"
          placeholder="Type Here"
          className=" w-full h-12 border-gray-300 outline-none  border-none "
        ></input>
        <FaSearch className=" ml-3" />
      </div>
      <TopPost />
      <Categories />
      <RecentPosts />
    </div>
  );
};

export default SidebarBlog;
