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
    <div className="rounded-xl w-full h-full p-4 bg-white" style={{ height: '400px' }}>
      <div className="flex justify-between items-center p-2">
        <span className="text-lg font-semibold"> Finance </span>
        <div>
          <span> b Icon </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20, 
            right: 30,
            left: 20,
            bottom: 20, 
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} name="Income" />
          <Line type="monotone" dataKey="expenses" stroke="#82ca9d" name="Expenses" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChat;