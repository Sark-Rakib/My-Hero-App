import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import downImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import revImg from "../../assets/icon-review.png";
import errorImg from "../../assets/App-Error.png";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetail = () => {
  const location = useLocation();
  const { app } = location.state || "";
  const [installed, setInstalled] = useState(false);

  // Installed
  useEffect(() => {
    if (app) {
      const installedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];
      const exists = installedApps.find((a) => a.id === app.id);
      if (exists) setInstalled(true);
    }
  }, [app]);

  const handleInstall = () => {
    if (!app) return;
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.find((a) => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);

      toast.success(`${app.title} added to Installation page!`, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  if (!app) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={errorImg} className="w-64 h-64 mb-4 animate-pulse" />
        <h2 className="text-2xl font-semibold text-gray-700">App not found!</h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto bg-[#ebe8e8] px-5 py-5">
      {/* App Info */}
      <div className="flex flex-col md:flex-row gap-10">
        <img
          className="w-64 h-64 rounded mb-4"
          src={app.image}
          alt={app.title}
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
          <p className="mb-4">{app.description}</p>

          <hr className="bg-gray-50" />

          <div className="flex gap-10 mt-4">
            <p className="flex flex-col items-center">
              <img className="w-7 h-7" src={downImg} alt="Downloads" />
              Downloads
              <span className="font-bold text-2xl">{app.downloads}</span>
            </p>
            <p className="flex flex-col items-center">
              <img className="w-7 h-7" src={ratImg} alt="Rating" />
              Average Rating
              <span className="font-bold text-2xl">{app.ratingAvg}</span>
            </p>
            <p className="flex flex-col items-center">
              <img className="w-7 h-7" src={revImg} alt="Reviews" />
              Reviews
              <span className="font-bold text-2xl">{app.reviews}</span>
            </p>
          </div>

          {/* Install Button */}
          <button
            className={`mt-5 px-5 py-2 rounded text-white font-semibold ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-[#00D390]"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${app.size}Mb)`}
          </button>
        </div>
      </div>

      <hr className="my-5" />

      {/* Ratings Chart */}
      <h2 className="text-xl font-semibold mb-2 ml-8">Rating Chart</h2>
      <div className="w-full md:w-3/4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={app.ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <hr className="my-5" />

      {/* Description */}
      <div>
        <p>
          <span className="font-semibold text-lg">Description:</span> <br />
          {app.description}
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetail;
