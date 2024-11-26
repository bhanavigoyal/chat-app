import React from "react";
import ChatBar from "./ChatBat";

const Sidebar = () => {
  return (
    <div className=" bg-slate-300 w-72  h-screen">
      <div className="  pt-4 text-center  text-2xl font-bold border-b-4  ">
        Open Chat
      </div>
      <ChatBar />
    </div>
  );
};

export default Sidebar;
