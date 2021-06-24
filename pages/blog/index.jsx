import React, { Fragment, useState, useRef } from "react";
import Document, { DocumentContext, Html, Head, Main } from "next/document";
import { FaSearch, FaArrowRight } from "react-icons/fa";
import SidebarBlog from "../../components/SidebarBlog";

const index = () => {
  return (
    <Fragment>
      <div className="text-4xl bg-gray-100  px-10 font-light xl:px-40 py-20">
        Blog
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-32 mx-5 md:ml-20 md:mr-10 lg:space-x-6 lg:mx-[10%]  ">
        <div className="col-span-8  ">
          <div className="flex items-end bg-blog-1 h-60 sm:h-96 md:min-h-100 bg-center bg-cover ">
            <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-4 w-40 sm:py-6 sm:w-80 ">
              <div className="border-b border-gray-400">NEWS</div>
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
          <div className="w-full grid grid-cols-1 gap-9 lg:grid-cols-2  my-20 items-start">
            <div className="">
              <div className="flex items-end bg-blog-2 w-full min-h-[16rem] md:min-h-[30rem] lg:min-h-[20rem]  bg-center  bg-cover ">
                <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-2 w-40 sm:py-4 sm:w-50 ">
                  <div className="border-b border-gray-400">NEWS</div>
                </div>
              </div>
              <div>
                <div className="text-4xl mt-5 mb-2 font-light">
                  Template: More Tag
                </div>
                <div className="text-md text-gray-400 font-light">
                  March 19, 2020
                  <span className="px-3 font-bold text-black text-sm">
                    |
                  </span>{" "}
                  by{" "}
                  <a href="/" className=" text-blue-800">
                    Aigars
                  </a>
                  <div className="my-4">
                    This content is before the <a href="/"> more tag</a>.
                  </div>
                  <div className="my-4">There are a few things to verify:</div>
                  <button className="bg-blue-600 flex items-center p-4 rounded-md  text-white">
                    Read more
                    <FaArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-end bg-blog-3 w-full min-h-[16rem]  md:min-h-[30rem] lg:min-h-[20rem] bg-center bg-cover ">
                <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-2 w-40 sm:py-4 sm:w-50 ">
                  <div className="border-b border-gray-400">NEWS</div>
                </div>
              </div>
              <div>
                <div className="text-4xl mt-5 mb-2 font-light">
                  Hello world!
                </div>
                <div className="text-md text-gray-400 font-light">
                  Jun 7, 2019
                  <span className="px-3 font-bold text-black text-sm">
                    |
                  </span>{" "}
                  by{" "}
                  <a href="/" className=" text-blue-800">
                    Aigars
                  </a>
                  <div className="my-4">
                    Welcome to colorlib.com. This is your first post. Edit or
                    delete it, then start blogging!
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-end bg-blog-4 w-full min-h-[16rem]  md:min-h-[30rem] lg:min-h-[20rem] bg-center bg-cover ">
                <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-2 w-40 sm:py-4 sm:w-50 ">
                  <div className="border-b border-gray-400">NEWS</div>
                </div>
              </div>
              <div>
                <div className="text-4xl mt-5 mb-2 font-light">
                  Template: Sticky
                </div>
                <div className="text-md text-gray-400 font-light">
                  January 7, 2016
                  <span className="px-3 font-bold text-black text-sm">
                    |
                  </span>{" "}
                  by{" "}
                  <a href="/" className=" text-blue-800">
                    Aigars
                  </a>
                  <div className="my-4">
                    This is a paragraph. It should not have any alignment of any
                    kind. It should just flow like you would normally expect.
                    Nothing fancy. Just straight up text, free flowing, with
                    love. Completely neutral and not picking a side or sitting
                    on the fence. It just is. It just freaking is. It likes
                    where it is. It does not feel compelled to pick a side.
                    Leave him be. It will just be better that way. Trust me.
                  </div>
                  <button className="bg-blue-600 flex items-center p-4 rounded-md  text-white">
                    Read more
                    <FaArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-end bg-blog-5 w-full min-h-[16rem] md:min-h-[30rem] lg:min-h-[20rem]  bg-center  bg-cover ">
                <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-2 w-40 sm:py-4 sm:w-50 ">
                  <div className="border-b border-gray-400">NEWS</div>
                </div>
              </div>
              <div>
                <div className="text-4xl mt-5 mb-2 font-light">
                  Markup: Title With Special Characters
                </div>
                <div className="text-md text-gray-400 font-light">
                  January 7, 2016
                  <span className="px-3 font-bold text-black text-sm">
                    |
                  </span>{" "}
                  by{" "}
                  <a href="/" className=" text-blue-800">
                    Aigars
                  </a>
                  <div className="my-4">
                    TPutting special characters in the title should have no
                    adverse effect on the layout or functionality.
                  </div>
                  <button className="bg-blue-600 flex items-center p-4 rounded-md  text-white">
                    Read more
                    <FaArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-end bg-blog-6 w-full min-h-[16rem] md:min-h-[30rem] lg:min-h-[20rem]  bg-center  bg-cover ">
                <div className="flex justify-center text-gray-400 hover:text-blue-800 bg-white py-2 w-40 sm:py-4 sm:w-50 ">
                  <div className="border-b border-gray-400">NEWS</div>
                </div>
              </div>
              <div>
                <div className="text-4xl mt-5 mb-2 font-light">
                  Template: Sticky
                </div>
                <div className="text-md text-gray-400 font-light">
                  April 7, 2020
                  <span className="px-3 font-bold text-black text-sm">
                    |
                  </span>{" "}
                  by{" "}
                  <a href="/" className=" text-blue-800">
                    Aigars
                  </a>
                  <div className="my-4">This is a sticky post.</div>
                  <div className="my-4">There are a few things to verify:</div>
                  <button className="bg-blue-600 flex items-center p-4 rounded-md  text-white">
                    Read more
                    <FaArrowRight className="ml-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SidebarBlog className="bg-red-300" />
      </div>
    </Fragment>
  );
};

export default index;

{
  /* 
  function 
  const [selectedBlog, setSelectedBolg] = useState("blog1");
  const idRef = useRef(null);

  const selectedgrid = (e) => {
    console.log(selectedBlog);
    const classesToAdd = ["col-span-2", "col-start-1", "row-start-1"];
    document.getElementById(selectedBlog).classList.remove(...classesToAdd);
    e.currentTarget.classList.add(...classesToAdd);
    setSelectedBolg(e.target.id);
  };

  
  jsx 
  <div
              className="bg-red-300 w-full "
              onClick={selectedgrid}
              id="blog1"
              ref={idRef}
            >
              1
            </div>
            <div
              className="bg-red-300 w-full"
              onClick={selectedgrid}
              id="blog2"
              ref={idRef}
            >
              2
            </div>
            <div
              className="bg-red-300 w-full"
              onClick={selectedgrid}
              id="blog3"
              ref={idRef}
            >
              3
            </div>
            <div
              className="bg-red-600 w-full"
              onClick={selectedgrid}
              id="blog4"
              ref={idRef}
            >
              4
            </div> */
}
