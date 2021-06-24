import React, { Fragment } from "react";
import RecentSingleproduct from "./RecentSingleproduct";

const RecentShopitem = () => {
  return (
    <Fragment>
      <div className="text-2xl font-light mt-20">Recent reviews</div>
      <ul>
        <li>
          <RecentSingleproduct />
        </li>
        <li>
          <RecentSingleproduct />
        </li>
        <li>
          <RecentSingleproduct />
        </li>
      </ul>
    </Fragment>
  );
};

export default RecentShopitem;
