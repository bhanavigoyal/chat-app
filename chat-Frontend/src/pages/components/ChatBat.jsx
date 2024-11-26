import React from "react";

const ChatBar = () => {
  return (
    <div className=" flex flex-col  items-center ">
      <h4 className="chat__header">ACTIVE USERS</h4>
      <div className="chat__users">
        <p>User 1</p>
        <p>User 2</p>
        <p>User 3</p>
        <p>User 4</p>
      </div>
    </div>
  );
};

export default ChatBar;
