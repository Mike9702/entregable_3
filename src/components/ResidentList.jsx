import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";


const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, residentsInPage } = paginationLogic(currentPage, residents);

  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section className="">
      <section className="grid grid-cols-[repeat(auto-fit,_280px)] gap-4 justify-center  max-w-[1000px] mx-auto py-7 ">
        {residentsInPage.map((resident) => (
          <ResidentCard  key={resident} residentEndpoint={resident} />
        ))}
      </section>

      {/* paginacion */}
      <ul className="text-lg flex gap-3  justify-center flex-wrap">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={` text-black p-2  rounded-md hover:bg-green-400 ${
                page === currentPage ? "bg-red-500" : "bg-white"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ResidentList;
