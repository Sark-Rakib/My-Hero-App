import React from "react";
import Hero from "../Hero/Hero";
import googlePlay from "../../assets/Googleplay_png.png";
import AppStore from "../../assets/AppStore_png.png";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-[#ebe8e8] text-center">
      <h1 className="text-3xl font-bold p-2">
        We Build <br />{" "}
        <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="p-2 text-[#627382] lg:text-[#627382] mt-5">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-5 justify-center mt-5">
        <div>
          <button
            onClick={() =>
              window.open("https://play.google.com/store/apps", "_blank")
            }
            className="flex items-center border-1 cursor-pointer border-[#D2D2D2] rounded-sm p-2 font-semibold"
          >
            <img className="h-5 w-5" src={googlePlay} /> Google Play
          </button>
        </div>
        <button
          onClick={() =>
            window.open("https://www.apple.com/app-store/", "_blank")
          }
          className="flex items-center gap-1 border cursor-pointer border-[#D2D2D2] rounded-sm p-2 font-semibold"
        >
          <img className="h-5 w-5" src={AppStore} alt="App Store" /> App Store
        </button>
      </div>
      <Hero></Hero>
    </div>
  );
};

export default Home;
