import React from "react";

const Card = () => {
  return (
    <div className=" bg-white w-72 h-80  rounded-lg">
      <div className=" text-center mt-4 font-bold text-xl">
        Chat With Randoms
      </div>
      <div className="flex flex-col  pt-8  items-center space-y-6 h-full ">
        <div className=" flex flex-col space-y-2">
          <div className=" text-slate-500">Enter Your Name</div>
          <input className=" border-2 p-1" type="text" placeholder="John" />
        </div>
        <div>
          <button
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-40 "
          >
            Join Chat Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
