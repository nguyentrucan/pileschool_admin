"use client";
import React from "react";

import { useLogout, useMenu } from "@refinedev/core";
import Link from "next/link";
import { BiLogOutCircle } from "react-icons/bi";

interface MenuProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: React.FC<MenuProps> = ({ showSidebar, setShowSidebar }) => {
  const { mutate: logout } = useLogout();
  const { menuItems, selectedKey } = useMenu();

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#8cbce780] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }`}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link href={"/"} className="w-[180px] h-[50px]">
            <img
              className="w-full h-full"
              src="http://localhost:3000/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="px-[16px]">
          <ul className="list-none">
            {menuItems.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.route ?? "/"}
                  className={`${
                    selectedKey === item.key
                      ? "bg-blue-600 shadow-indigo-500/50 text-white duration-500"
                      : "text-[#030811] font-bold duration-200"
                  } px-[12px] py-[9px] rounded-lg flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 no-underline`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button 
              className="text-[#030811] font-bold duration-200 px-[12px] py-[9px] rounded-lg flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1"
            onClick={() => logout()}
            >
            <span>
              <BiLogOutCircle />
            </span>
            <span>Logout</span>
          </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
