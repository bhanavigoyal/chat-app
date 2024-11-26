import React from "react";
import Sidebar from "./components/sidebar";
import ChatFooter from "./components/ChatFooter";

const ChatPage = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <ChatFooter />
    </div>
  );
};

export default ChatPage;
