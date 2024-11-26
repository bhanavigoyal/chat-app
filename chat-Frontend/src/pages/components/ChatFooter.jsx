import React, { useState } from "react";

const ChatFooter = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log({ userName: localStorage.getItem("userName"), message });
    setMessage("");
  };
  return (
    <div className=" relative h-screen w-screen bg-orange-100 ">
      <div className="absolute bottom-0 w-full  bg-slate-300  ">
        <div className=" flex w-full space-x-2 " onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Write message"
            className=" w-[80%] border-r-8 p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className=" w-40 bg-green-300 p-3 cursor-pointer">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
