import React, { Fragment } from "react";
import SidebarBlog from "../components/SidebarBlog";
import AboutContant from "../components/AboutContant";

const about = () => {
  return (
    <Fragment>
      <div className="py-20 text-xl px-10 text-center md:text-left md:px-20 lg:px-40 bg-gray-100 sm:text-3xl font-light">
        About The Tests
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 my-32 mx-5 md:ml-20 md:mr-10 lg:space-x-6 lg:mx-[10%]  ">
        <AboutContant />
        <SidebarBlog />
      </div>
    </Fragment>
  );
};

export default about;
