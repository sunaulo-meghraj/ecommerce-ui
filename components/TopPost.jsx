import React from "react";

function TopPost() {
  return (
    <div className="my-10  text-sm">
      <div className="font-light text-2xl ">Top Post</div>
      <ul>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i1.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1449168013943-3a15804bb41c-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">Hello wordl!</span>
        </li>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i2.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1440557653082-e8e186733eeb-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">Template: More Tag</span>
        </li>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i2.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1453282716202-de94e528067c-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">Template: Sticky</span>
        </li>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i2.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1448518184296-a22facb4446f-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">
            Edge Case: Nested And Mixed Lists
          </span>
        </li>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i0.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1444858345149-8ff40887589b-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">Markup: Image Alignment</span>
        </li>
        <li className="flex my-6 items-center space-x-10">
          <img src="https://i2.wp.com/demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/photo-1434472007488-8d47f604f644-1.jpg?resize=40%2C40&ssl=1"></img>
          <span className="text-blue-600">
            Markup: Title With Special Characters
          </span>
        </li>
      </ul>
    </div>
  );
}

export default TopPost;
