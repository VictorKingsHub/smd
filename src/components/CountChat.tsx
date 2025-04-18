"use client";
import React from "react";

import AttendanceChart from "@/components/AttendanceChart";


import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import FinanceChat from "./FinanceChat";

const CountChat = () => {
  const data = [
    { name: " tal", uv: 106, fill: "white" },
    { name: "Girls", uv: 53, fill: "#FAE27C" },
    { name: "Boys", uv: 50, fill: "#C3EBFA" },
  ];

  return (
    <div className="flex flex-col my-2">
      <div className=" w-full   flex flex-col md:flex-row p-4 gap-4">
        <div className="rounded-lg w-full md:w-1/3 bg-white rounded-x">
          <div className="flex justify-between items-center p-2">
            <span className="text-lg font-semibold"> Student </span>
          <div>  <h5> b Icon </h5> </div>
          </div>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={80}
                barSize={32}
                data={data}
              >
                <RadialBar background dataKey="uv" />
                <Legend
                  iconSize={10}
                  layout="vertical"
                  verticalAlign="middle"
                  align="right"
                />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-row justify-around mt-4">
            <div className="flex flex-col gap-1 mr-4">
              <div className="w-5 h-5 rounded-full bg-[#C3EBFA]" />
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300"> Boys (55%) </h2>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-5 h-5 rounded-full bg-[#FAE27C]" />
              <h1 className="font-bold">1,234</h1>
              <h2 className="text-xs text-gray-300"> Girls (45%) </h2>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-white rounded-xl">
          <AttendanceChart />
        </div>
      </div>
      <div className="bg-white w-full rounded-xl p-2">
        <FinanceChat />
      </div>
    </div>
  );
};

export default CountChat;
