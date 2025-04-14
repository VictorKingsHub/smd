import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 text-green-900">
        <div className="w-full lg:w-2/3">
          <div className="flex gap-4 justify-between">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 text-green-900">RIGHT</div>
    </div>
  );
};

export default Admin;
