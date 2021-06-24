import React from "react";

const Categories = () => {
  return (
    <div className="my-10 text-sm   ">
      <div className="font-light text-2xl ">Categories</div>
      <ul className="text-gray-400">
        <li className="py-6 border-b border-gray-300">
          <a href="/">Edge Case</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Makeup</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Media</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">News</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Post Formats</a>
        </li>
        <li className="py-6 border-b border-gray-300">
          <a href="/">Template</a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
