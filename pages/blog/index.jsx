import React, { Fragment } from "react";
import Document, { DocumentContext, Html, Head, Main } from "next/document";

const index = () => {
  return (
    <Fragment>
      <div className="text-4xl bg-gray-200  px-10 font-light lg:px-40 py-20">
        Blog
      </div>
      <div className="flex justify-center	 py-20  ">
        <div className="w-3/5">
          <div className="flex justify-start items-end bg-cover bg-no-repeat bg-center h-full  bg-blog-p min-w-[200px]  ">
            <div className="bg-[#ffffff] w-80 p-6  flex justify-center   ">
              <div className="border-b pb-3 text-sm text-gray-400 border-gray-400 hover:text-blue-800 font-semibold">
                NEWS
              </div>
            </div>
          </div>
          <div className="text-5xl m-6 font-light">Template: Sticky</div>
          <div className="text-md text-gray-400 font-light">
            January 7, 2016
            <span className="px-3 font-bold text-black text-sm">|</span> by{" "}
            <a href="/" className=" text-blue-800">
              Aigars
            </a>
            <div className="my-6">This is a sticky post.</div>
            <div className="my-6">There are a few things to verify:</div>
            <ul className="ml-8 list-disc ">
              <li>
                The sticky post should be distinctly recognizable in some way in
                comparison to normal posts. You can style the{" "}
                <a
                  href="/"
                  className="  text-red-600 p-1 tracking-wider rounded bg-red-100"
                >
                  .sticky
                </a>{" "}
                class if you are using the{" "}
                <a href="/" className="  text-blue-800">
                  post_class()
                </a>{" "}
                function to generate your post classes, which is a best
                practice.
              </li>
              <li>
                They should show at the very top of the blog index page, even
                though they could be several posts back chronologically.
              </li>
              <li>
                They should still show up again in their chronologically correct
                postion in time, but without the sticky indicator.
              </li>
              <li>
                If you have a plugin or widget that lists popular posts or
                comments, make sure that this sticky post is not always at the
                top of those lists unless it really is popular.
              </li>
            </ul>
          </div>
        </div>

        <div className=" w-1/5 text-xl  bg-gray-300">
          <h1>icejnc</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default index;
