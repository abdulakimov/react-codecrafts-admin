import React, { useState } from "react";
import { ICONS } from "../assets";
import SideBarItem from "./SideBarItem";

const menuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: ICONS.dashboard,
    link: "/",
  },
  {
    id: 2,
    name: "Questions",
    icon: ICONS.questions,
    link: "/questions",
  },
  {
    id: 3,
    name: "Tasks",
    icon: ICONS.tasks,
    link: "/tasks",
  },
];

const SideBar = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };

  return (
    <div className="bg-white flex flex-col justify-between items-center  h-full border-r-2 border-gray-200 p-4">
      <div className="flex flex-col items-center">
        <h1 className=" font-bold text-2xl my-4">CodeCrafts</h1>
        <div className="w-[80%] h-0.5 bg-gray-300 my-4" />
        <div className="items-center p-4">
          {menuItems.map((item) => (
              <SideBarItem
              key={item.id}
                activeItemId={activeItemId}
                handleItemClick={handleItemClick}
                item={item}
              />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center my-6">
        <div className="w-[80%] h-0.5 bg-gray-300 my-4" />
        <div
          onClick={() => {}}
          className={`flex items-center rounded-xl cursor-pointer hover:bg-gray-100 py-3 px-12 space-x-6 mb-10`}
        >
          <img src={ICONS.logout} className="w-6 mx-2 rotate-90" alt="logout" />
          <h3 className="font-semibold">Log Out</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
