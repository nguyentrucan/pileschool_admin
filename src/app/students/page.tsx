"use client";
import React, { useState } from "react";
import { Pagination } from "../../components/pagination";
import Link from "next/link";
import { LuArrowDownSquare } from "react-icons/lu";

export default function Students() {
  const [currentPage, setCurrentPage] = useState(1);
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7">
      <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value))}
            className="px-4 py-2 hover:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            type="text"
            placeholder="search"
            className="px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]"
          />
        </div>
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#d0d2d6]">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Student Code</div>
                <div className="py-3 w-[13%] font-bold">Account</div>
                <div className="py-3 w-[18%] font-bold">Name</div>
                <div className="py-3 w-[18%] font-bold">YOB</div>
                <div className="py-3 w-[18%] font-bold">Class</div>
                <div className="py-3 w-[18%] font-bold">Phase</div>
                <div className="py-3 w-[18%] font-bold">Point</div>
                <div className="py-3 w-[18%] font-bold">Speed</div>
                <div className="py-3 w-[18%] font-bold">Status</div>
              </div>
            </div>
            <div className="text-[#d0d2d6]">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #0001
                </div>
                <div className="py-3 w-[13%] font-medium">annguyenvan</div>
                <div className="py-3 w-[18%] font-medium">Nguyen Van An</div>
                <div className="py-3 w-[18%] font-medium">2018</div>
                <div className="py-3 w-[18%] font-medium">A4-Abeka</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link href={"/"} className="">
                    View
                  </Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
}
