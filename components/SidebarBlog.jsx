import React from "react";
import TopPost from "./TopPost";
import Categories from "./Categories";
import RecentPosts from "./RecentPostsBlog";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const SidebarBlog = () => {
  return (
    <div className=" col-span-4 w-full ">
      <div className="flex justify-between items-center px-3 border text-gray-300 border-gray-300 bg-white">
        <input
          type="text"
          placeholder="Type Here"
          className="p-2 w-full border-r border-gray-300 "
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
