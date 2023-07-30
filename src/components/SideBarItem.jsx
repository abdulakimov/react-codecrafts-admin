import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ item, activeItemId, handleItemClick }) => {

  return (
    <Link to={item.link}>
    <div
      onClick={() => handleItemClick(item.id)}
      className={`flex items-center rounded-xl ${
        activeItemId === item.id ? "bg-gray-200" : "bg-transparent"
      } cursor-pointer hover:bg-gray-100 bor py-3 px-12 space-x-6 mb-10`}
    >
      <img src={item.icon} className="w-6" alt={item.name} />
      <h3 className="font-semibold">{item.name}</h3>
    </div>
      </Link>
  );
};

export default SideBarItem;
