"use client";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
// import { IomdNotificationsOutline } from "react-icons/io";

const CountChat = () => {
  const data = [
    { name: "18-24", uv: 31.47, fill: "#8884d8" },
    { name: "25-29", uv: 26.69, fill: "#83a6ed" },
    { name: "30-34", uv: 15.69, fill: "#8dd1e1" },
    { name: "35-39", uv: 8.22, fill: "#82ca9d" },
    { name: "40-49", uv: 8.63, fill: "#a4de6c" },
    { name: "50+", uv: 2.63, fill: "#d0ed57" },
    { name: "unknow", uv: 6.67, fill: "#ffc658" },
  ];

  return (
    <div className="rounded-xl w-full   flex flex-col md:flex-row p-4 my-5 gap-4">
      <div className=' w-full md:w-1/3 bg-white rounded-x'>
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold"> Student </span>
        <div>
          {/* <IomdNotificationsOutline /> */}
        </div>
      </div>
      <div className="w-full h-[300px]"> {/* Explicit height */}
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              dataKey="uv"
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-row justify-around mt-4">
        <div className="flex flex-col gap-1 mr-4">
          <div className="w-5 h-5 rounded-full bg-amber-600" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300"> Boys (55%) </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 rounded-full bg-amber-600" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300"> Girls (45%) </h2>
        </div>
      </div>
      </div>

      <div className="w-full md:w-2/3 bg-white rounded-xl"> FINISHING </div>
    </div>
  );
};

export default CountChat;