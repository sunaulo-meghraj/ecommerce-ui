import React from "react";

const RecentPosts = () => {
  return (
    <div className="my-10 text-sm  ">
      <div className="font-light text-2xl ">Recent Posts</div>
      <ul className="text-gray-400">
        <li className="py-6 border-b border-gray-300">
          <a href="/">Template: More Tag</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Hellow wordl!</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Template: Sticky</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Markup: Image Alignment</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Markup: Text Alignment</a>
        </li>
      </ul>
    </div>
  );
};

export default RecentPosts;
