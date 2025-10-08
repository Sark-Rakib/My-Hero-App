import React, { useState, useEffect } from "react";
import AppsData from "../AppsData/AppsData";
import errorImg from "../../assets/App-Error.png";

const Apps = () => {
  const [appsData, setAppsData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch apps
  useEffect(() => {
    fetch("apps.json")
      .then((res) => res.json())
      .then((data) => {
        setAppsData(data);
        setFilteredApps(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  // Filter apps on search
  useEffect(() => {
    const filtered = appsData.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [search, appsData]);

  return (
    <div className="max-w-[1280px] mx-auto bg-[#ebe8e8] min-h-screen">
      {/* Header */}
      <div className="text-center p-2">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="text-[#627382] mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search */}
      <div className="flex justify-between p-5">
        <h1 className="font-semibold">({filteredApps.length}) Apps Found</h1>
        <input
          className="border border-gray-700 rounded p-1"
          type="search"
          placeholder="Search Apps"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center mt-10">
          <span>
            <div>
              <div className="flex w-52 flex-col gap-4 justify-center items-center mx-auto mt-5">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          </span>
        </div>
      ) : filteredApps.length > 0 ? (
        <AppsData appsData={filteredApps} />
      ) : (
        <div className="flex flex-col items-center mt-10 p-5">
          <img src={errorImg} className="w-64 h-64" alt="No apps" />
        </div>
      )}
    </div>
  );
};

export default Apps;
