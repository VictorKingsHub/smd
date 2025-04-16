import UserCard from "@/components/UserCard";
import CountChat from "@/components/CountChat";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row overflow-auto my-5"> {/* Added overflow-auto */}
      {/* LEFT */}
      <div className="w-full lg:w-2/3 text-green-900">
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
          <CountChat />
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 text-green-900">RIGHT</div>
    </div>
  );
};

export default Admin;