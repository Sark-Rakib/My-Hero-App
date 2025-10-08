import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="max-w-[1280px] mx-auto p-6 bg-black text-white">
        <div className="md:flex justify-between">
          <div className=" md:w-100">
            <h1 className="flex items-center gap-2 font-bold">
              <img className="h-7 w-7" src={logo} /> Hero Apps
            </h1>
            <p className="text-[#A1A1AA] text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <h1 className="font-bold">About Hero App</h1>
            <p className="text-[#A1A1AA]">About Us</p>
            <p className="text-[#A1A1AA]">Our Mission</p>
            <p className="text-[#A1A1AA]">Contact Saled</p>
          </div>
          <div>
            <h1 className="font-bold">Services</h1>
            <p className="text-[#A1A1AA]">Products & Services</p>
            <p className="text-[#A1A1AA]">Customer Stories</p>
            <p className="text-[#A1A1AA]">Download Apps</p>
          </div>
          <div>
            <h1 className="font-bold">Information</h1>
            <p className="text-[#A1A1AA]">Privacy Policy</p>
            <p className="text-[#A1A1AA]">Terms & Conditions</p>
            <p className="text-[#A1A1AA]">Join Us</p>
          </div>
          <div>
            <h1 className="font-bold">Social Links</h1>
            <p className="text-[#A1A1AA]"></p>
            <p className="text-[#A1A1AA]">x.com/Cap_tain01</p>
            <p className="text-[#A1A1AA]">linkedin.com/in/rakib-sarker-/</p>
            <p className="text-[#A1A1AA]">mdrakibsarkar1@gmail.com</p>
          </div>
        </div>
        <div className="border-t-1 border-gray-700 text-center mt-5 ">
          <h1 className="mt-5">© 2025 All rights reserved.</h1>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
