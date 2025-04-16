import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-[#CFCEFF] odd:text-white even:bg-[#FAE27C]  p-4 flex-1 min-w-[130px]">
      <div className="flex gap-4  flex-row justify-between overflow-wrap" >
        <span className="bg-white text-teal-500 py-1 px-2 text-[10px] rounded-full">
          {" "}
          2024-2025{" "}
        </span>
        <IoMdNotificationsOutline />
      </div>
      <div>
        <h1 className="text-2xl font-semibold"> 1,234 </h1>
        <span className="capitalize text-sm font-medium text-gray-500">
          {type}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
