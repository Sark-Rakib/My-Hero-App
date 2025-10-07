import React, { Suspense } from "react";
import heroImage from "../../assets/hero.png";
import Trending from "../Trending/Trending";

const Hero = () => {
  const homeData = fetch("home.json").then((res) => res.json());

  return (
    <>
      <div className="flex justify-center mt-5">
        <img className="w-[600px]" src={heroImage} alt="" />
      </div>

      <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-10">
        <h1 className="text-white mb-10 text-3xl">
          Trusted by Millions, Built for You
        </h1>
        <div className="flex gap-20 justify-center text-white">
          <div>
            <h1 className="text-sm opacity-70">Total Downloads</h1>
            <h1 className="text-4xl font-bold">29.6M</h1>
            <h1 className="text-sm opacity-70">21% more than last month</h1>
          </div>
          <div>
            <h1 className="text-sm opacity-70">Reviews</h1>
            <h1 className="text-4xl font-bold">906K</h1>
            <h1 className="text-sm opacity-70">46% more than last month</h1>
          </div>
          <div>
            <h1 className="text-sm opacity-70">Active Apps</h1>
            <h1 className="text-4xl font-bold">132+</h1>
            <h1 className="text-sm opacity-70">31 more will Launch</h1>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Trending homeData={homeData}></Trending>
      </Suspense>
    </>
  );
};

export default Hero;
