"use client";

import { useState, type PropsWithChildren } from "react";
import { Menu } from "../menu";
import { Header } from "../header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Menu showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[105px] transition-all">
        <div>{children}</div>
      </div>
    </div>
  );
};
