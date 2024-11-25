import React from "react";

const Card = () => {
  return (
    <div className=" bg-white w-72 h-80 flex flex-col  justify-center  items-center space-y-4">
      <div>Chat With Randoms</div>
      <div>
        <div>Enter Your Name</div>
        <input type="text" placeholder="John" />
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Dark
        </button>
      </div>
    </div>
  );
};

export default Card;
