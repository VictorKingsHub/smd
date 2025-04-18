import React from 'react';
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex">
      {/* Fixed Menu */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-gray-200 h-screen flex flex-row justify-center fixed">
        <Menu />
      </div>

      {/* Scrollable Content Area */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-gray-100  h-screen overflow-y-auto ml-auto">
        <Navbar />
        <main className="p-4 md:p-6 lg:p-8">{children}</main> {/* Added main for better semantics */}
      </div>
    </div>
  );
}
