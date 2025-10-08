import React, { useState, useEffect } from "react";
import downImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import { toast, ToastContainer } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");

  // Load installed apps from localStorage
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  // Uninstall handler
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    toast("App uninstalled successfully!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // Sort by size
  const sortedApps = [...installedApps].sort((a, b) => {
    const aDownloads = parseInt(a.downloads.replace("M", ""));
    const bDownloads = parseInt(b.downloads.replace("M", ""));
    return sortOrder === "high"
      ? bDownloads - aDownloads
      : aDownloads - bDownloads;
  });

  return (
    <div className="max-w-[1280px] mx-auto bg-[#ebe8e8] p-5">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p className="text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      {/* Sort */}
      <div className="flex justify-between items-center mt-4">
        <p>{installedApps.length + ""} Apps Found</p>
        <div className="flex justify-between items-center gap-2">
          <label className="font-semibold">Sort by Size:</label>
          <select
            className="border rounded px-2 py-1"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="high">High → Low</option>
            <option value="low">Low → High</option>
          </select>
        </div>
      </div>

      {installedApps.length === 0 && (
        <p className="text-center text-amber-600 font-bold text-3xl mt-10">
          No apps installed yet.
        </p>
      )}

      {/* Apps List */}
      <div className="flex flex-col pb-5">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex justify-between items-center p-2 mt-5 bg-white rounded shadow"
          >
            <div className="flex gap-4 items-center">
              <img className="w-10 h-10 rounded" src={app.image} />
              <div className="flex flex-col gap-1">
                <h2 className="font-bold text-lg">{app.title}</h2>
                <div className="flex gap-4">
                  <p className="text-gray-700 flex items-center gap-2">
                    <img className="w-4 h-4" src={downImg} />{" "}
                    <span className="text-[#00D390]">{app.downloads}</span>
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <img className="w-4 h-4" src={ratImg} />{" "}
                    <span className="text-[#FF8811]">{app.ratingAvg}</span>
                  </p>
                  <p className="text-gray-700">Size: {app.size}MB</p>
                </div>
              </div>
            </div>

            {/* uninstall */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-[#00D390] text-white px-4 py-2 rounded font-semibold"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
