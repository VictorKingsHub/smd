"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "March",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "April",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "June",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "July",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Sept",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expenses: 4300,
  },
];

const FinanceChat = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center p-2">
        <span className="text-lg font-semibold"> Finance </span>
        <div>
          {/* Replace with your actual icon component or SVG */}
          <span> b Icon </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={20}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="bottom" // Changed to bottom for better visibility
            wrapperStyle={{ paddingTop: "10px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            activeDot={{ r: 8 }}
            strokeWidth={5}
            name="Income"
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#CFCEFF"
            name="Expenses"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChat;