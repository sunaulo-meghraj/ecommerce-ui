import React, { Fragment } from "react";
import Singleproductlist from "./Singleproductlist";

const ShopProductlist = () => {
  return (
    <Fragment>
      <div className="text-2xl font-light mt-20">Product</div>
      <ul>
        <li>
          <Singleproductlist />
        </li>
        <li>
          <Singleproductlist />
        </li>
        <li>
          <Singleproductlist />
        </li>
        <li>
          <Singleproductlist />
        </li>
        <li>
          <Singleproductlist />
        </li>
      </ul>
    </Fragment>
  );
};

export default ShopProductlist;
