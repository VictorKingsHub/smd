"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thur",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Attendance</h2>
        <span>Overview of daily attendance</span>
      </div>
      <div style={{ width: "100%", height: "300px" }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 15,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
            <XAxis dataKey="name" axisLine={false} tick={{fill : "#d1d5db"}} tickLine={false}/>
            <YAxis axisLine={false}/>
            <Tooltip contentStyle={{borderRadius: "20px", borderColor: "lightGray"}}/>
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="present"
              fill="#FAE27C"
              legendType="circle"
              name="Present"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              name="Absent"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;