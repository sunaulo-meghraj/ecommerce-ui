import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import { useState } from "react";

const Layout = () => {
  const [state, setstate] = useState();
  function show() {}
  return (
    <Fragment>
      <div className="flex h-20 py-7 bg-white relative">
        <div className="logo ml-28 mr-28 text-2xl text-gray-500 absolute left-32">
          <text>Shapely Demo</text>
        </div>
        <span className="absolute  right-36 mt-2">
          <ul className="flex  text-sm">
            <li className="px-4">
              <Link href="/">HOME</Link>
            </li>

            <li className="px-4">
              <Link href="/blog">BLOG</Link>
            </li>

            <li className="px-4">
              <Link href="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="px-4">
              <Link href="/about">
                <div className="dropdown inline-block relative">
                  <button className=" inline-flex items-center">
                    <span className="mr-1">ABOUTTHETESTS</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three is the magic number
                      </a>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li className="px-4 hover:{show()}">
              <Link href="/">
                <div className="dropdown inline-block relative">
                  <button className=" inline-flex items-center border-none ">
                    <span className="mr-1">LEVEL1</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                    <li className="">
                      <a
                        className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        One
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Two
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                        href="#"
                      >
                        Three is the magic number
                      </a>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li className="px-4">
              <Link href="/shop">SHOP</Link>
            </li>
            <li className="px-4 mt-0.5">
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </span>
      </div>
    </Fragment>
  );
};

export default Layout;
