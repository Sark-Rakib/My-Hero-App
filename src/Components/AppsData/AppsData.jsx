import React from "react";
import downImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import { useNavigate } from "react-router-dom";

const AppsData = ({ appsData }) => {
  const navigate = useNavigate();

  if (!appsData || !Array.isArray(appsData)) return null; // ⚡ safeguard

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 p-5">
      {appsData.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-white rounded cursor-pointer hover:shadow-lg"
          onClick={() => navigate(`/apps/${item.id}`, { state: { app: item } })}
        >
          <img className="rounded" src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <div className="flex justify-between mt-2">
            <p className="flex items-center gap-2 bg-[#F1F5E8] p-1 rounded-sm text-[#00D390] font-semibold">
              <img className="w-3 h-3" src={downImg} alt="downloads" />{" "}
              {item.downloads}
            </p>
            <p className="flex items-center gap-2 bg-[#FFF0E1] p-1 rounded-sm text-[#FF8811] font-semibold">
              <img className="w-3 h-3" src={ratImg} alt="rating" />{" "}
              {item.ratingAvg}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppsData;
