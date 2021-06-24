import Link from "next/link";
import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import styles from "../style/home.module.css";

const Home = () => {
  const Project = (props) => {
    return (
      <div className={styles.project}>
        <p>{props.title}</p>
      </div>
    );
  };

  const data = [
    {
      image: "/hill.jpg",
      title: "#project 8",
    },
    {
      image: "/hill.jpg",
      title: "#project 7",
    },
    {
      image: "/hill.jpg",
      title: "#project 6",
    },
    {
      image: "/hill.jpg",
      title: "#project 5",
    },
    {
      image: "/hill.jpg",
      title: "#project 4",
    },
    {
      image: "/hill.jpg",
      title: "#project 3",
    },
    {
      image: "/hill.jpg",
      title: "#project 2",
    },
    {
      image: "/pc.png",
      title: "#project 1",
    },
  ];

  return (
    <>
      <div className="bg-black  h-screen relative ">
        <div className="absolute top-60 left-80 ">
          <h1 className="text-6xl text-white text-center ">
            We Change Everything Wordpress.
          </h1>
          <br />
          <p className="text-sm text-gray-200 text-center my-4">
            This is only WordPress theme you will ever want to use.
          </p>
          <br />
          <div className="text-center ">
            <button className="px-7 py-3 text-md bg-blue-600 text-white mr-4 font-semibold hover:bg-blue-800">
              READ MORE
            </button>
            <button className="px-5 py-3 text-md font-semibold border-2 bg-transparent text-white hover:text-gray-900 hover:bg-white } ">
              {" "}
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex   h-96 my-24">
        <div className="image ml-24 ">
          <Image src="/pc.png" height="450" width="650"></Image>
        </div>
        <div className="description w-96 mx-36 mt-14">
          <h3 className="text-4xl mb-6">SEE IT AGAIN</h3>
          <div className="mb-6 text-gray-500 text-md">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
              diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
              ligula et interdum
            </p>
          </div>
          <Link href="/">
            <button className="bg-blue-600 text-white font-semibold px-8 py-3">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
      <div className=" bg-gray-200 py-20 ">
        <div className="flex  flex-row-reverse h-96 ">
          <div className="image ml-24 ">
            <Image src="/pc.png" height="450" width="650"></Image>
          </div>
          <div className="description w-96 mx-36 mt-14">
            <h3 className="text-4xl mb-6">Portfolio Section</h3>
            <div className="mb-6 text-gray-500 text-md">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                pulvinar luctus sem, eget porta orci. Maecenas molestie dui id
                diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae
                ligula et interdum. Maecenas faucibus mattis imperdiet. In
                rhoncus ac ligula id ultricies.
              </p>
            </div>
            <Link href="/">
              <button className="bg-blue-600 text-white font-semibold px-8 py-3">
                SEE IT AGAIN
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="parallex-section bg-gray-600  text-center  ">
        <div className="py-36 mx-48 ">
          <h1 className="text-6xl text-white  font-semibold mb-6">
            Small Parallax Section
          </h1>
          <p className="text-center text-white mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
            Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget
            tincidunt leo ornare quis.
          </p>
          <button className="px-10 py-3 text-sm bg-blue-600 text-white mr-4 font-semibold hover:bg-blue-800">
            MORE INFO
          </button>
        </div>
      </div>
      <div className="bg-red-50 h-auto -pb-1">
        <div className=" text-center pb-4 pt-14 pl-80 pr-80">
          <h2 className="text-black text-3xl">Limitless Options</h2>
          <p className="text-red-300 text-sm my-7">
            Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
            sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus,
            accumsan non efficitur id, pretium quis ante
          </p>
          <button className="px-10 py-3 mb-4 text-sm text-center  bg-blue-600 text-white mr-4 font-semibold hover:bg-blue-800">
            DOWNLOAD NOW
          </button>
        </div>
        <div className="px-40 mb-0">
          <Image src="/nature.jpg" height="853" width="1200"></Image>
        </div>
      </div>

      <div className="bg-black">
        <div className="pt-28  pb-8">
          <h1 className="text-3xl text-white text-center mb-12">
            Our Latest Projects
          </h1>
          <h3 className="text-md text-white text-center">
            Here is our latest projects. You'll love them!
          </h3>
        </div>
        <div className="grid grid-cols-4 ">
          {data.map((item) => {
            return <Project image={item.image} title={item.title} />;
          })}
        </div>
      </div>

      <div className="bg-red-200 flex">
        <div className="text-4xl my-28 ml-28">
          <h1>Do you like this awesome WordPress theme?</h1>
        </div>
        <div className=" my-24 ml-72 ">
          <button className="px-16 py-5 mb-4 text-sm text-center  bg-blue-600 text-white mr-4 font-semibold hover:bg-blue-800">
            DOWNLOAD NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
