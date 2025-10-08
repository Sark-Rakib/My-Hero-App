import React, { useState, useEffect } from "react";
import AppsData from "../AppsData/AppsData";
import errorImg from "../../assets/App-Error.png";

const Apps = () => {
  const [appsData, setAppsData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);

  useEffect(() => {
    fetch("apps.json")
      .then((res) => res.json())
      .then((data) => {
        setAppsData(data);
        setFilteredApps(data);
      });
  }, []);

  useEffect(() => {
    const filtered = appsData.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [search, appsData]);

  return (
    <div className="max-w-[1280px] mx-auto bg-[#ebe8e8]">
      <div className="text-center p-2">
        <h1 className="font-bold text-3xl">Our All Applications</h1>
        <p className="text-[#627382] mt-2">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

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

      {filteredApps.length > 0 ? (
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
