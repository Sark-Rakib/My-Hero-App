import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../assets/error-404.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className="w-64 h-64 mb-4" src={errorImg} alt="Error" />
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <Link
        to="/home"
        className="px-5 py-2 bg-[#00D390] text-white rounded font-semibold"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
