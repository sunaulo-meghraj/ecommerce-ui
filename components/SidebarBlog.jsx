import React from "react";
import TopPost from "./TopPost";
import Categories from "./Categories";
import RecentPosts from "./RecentPostsBlog";
import { FaSearch, FaArrowRight } from "react-icons/fa";

const SidebarBlog = () => {
  return (
    <div className=" col-span-4 w-full ">
      <div className="flex justify-between items-stretch text-xl text-gray-400 border border-gray-900 ">
        <input
          type="text"
          placeholder="Type Here"
          style={{ height: "100%" }}
          className=" flex-1"
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
