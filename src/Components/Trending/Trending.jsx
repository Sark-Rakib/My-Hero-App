import React, { use } from "react";
import downImg from "../../assets/icon-downloads.png";
import ratImg from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const Trending = ({ homeData }) => {
  const data = use(homeData);

  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Trending Apps</h1>
      <p className="text-[#627382] mt-2">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 p-5">
        {data.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded">
            <div>
              <img className="rounded h-[300px] w-full" src={item.image} />
              <p>{item.description}</p>
              <div className="flex justify-between">
                <p className="flex items-center gap-2 bg-[#F1F5E8] mt-2 p-1 rounded-sm text-[#00D390] font-semibold">
                  <img className="w-3 h-3" src={downImg} /> {item.downloads}
                </p>
                <p className="flex items-center gap-2 bg-[#FFF0E1] mt-2 p-1 rounded-sm text-[#FF8811] font-semibold">
                  <img className="w-3 h-3" src={ratImg} /> {item.ratingAvg}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/apps"
        className="inline-block my-10 px-30 py-2 font-semibold text-white rounded-sm cursor-pointer text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
      >
        Show All
      </Link>
    </div>
  );
};

export default Trending;
