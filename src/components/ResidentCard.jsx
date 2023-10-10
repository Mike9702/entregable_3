import axios from "axios";
import { useEffect, useState } from "react";
import {  characterStatus } from "../constants/resident";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  // ('Alive', 'Dead' or 'unknown').

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article >
      <header className="relative img  ">
        <img className="rounded-[5px_5px_0px_0px]" src={resident?.image} alt="" />

        {/* Status */}
        <div className="absolute  bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-1  flex items-center gap-2 rounded-md  ">
          <div
            className={`h-3 w-3 animate-pulse  ${
              characterStatus[resident?.status]
            } rounded-full`}
          >
            <div className="w-[2px] h-[2px] mx-[1px] my-[2px] rounded-full bg-white"></div>
          </div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className={` px-3 py-1 border rounded-[0px_0px_5px_5px] border-green-950`}>
        <h4 className="font-normal font-['fira-code'] text-xl truncate  ">{resident?.name}</h4>
        <ul>
          <li className="font-['fira-code'] font-normal  text-[16px] ">
            <span className="text-slate-700 font-['fira-code'] font-normal text-[16px] ">
              Species
            </span>{" "}
            {resident?.species}
          </li>
          <li className="font-['fira-code'] font-normal  text-[16px]">
            <span className="text-slate-700 font-['fira-code']font-normal text-[16px]">Origin</span>{" "}
            {resident?.origin.name}
          </li>
          <li className="font-['fira-code'] font-normal text-[16px]">
            <span className="text-slate-700 font-['fira-code'] font-normal text-[16px]">
              Times appear
            </span>{" "}
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCard;
