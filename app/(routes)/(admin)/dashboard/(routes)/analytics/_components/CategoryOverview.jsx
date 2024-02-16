"use client";

import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Tut Bag", value: 444 },
  { name: "Envlope", value: 4323 },
  { name: "Stamps", value: 242 },
  { name: "Candles", value: 340 },
];

const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
  } = props;
  console.log(props);
  return (
    <>
  
      <text x={cx} y={cy} dy={-5} textAnchor="middle" style={{fontSize: "14px", fontWeight:"bolder"}}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy="1.1em" textAnchor="middle" style={{fontSize: "24px", fontWeight: "medium"}}>
        ${payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 3}
        outerRadius={outerRadius + 3}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={1}
      />
    </>
  );
};

export default function CategoryOverview() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const onPieLeave = useCallback(() => {
    setActiveIndex(-1);
  }, [setActiveIndex]);

  const customLegend = (props) => {
    const { payload } = props

    return (
      <div className="px-8">
        {payload.map((entry, index) => (
          <div
            key={`item-${index}`}
            className="flex flex-row gap-2 items-center"
          >
            <div
              className="w-3 h-3 rounded-2xl"
              style={{ backgroundColor: entry.color }}
            />
            <h1 className="text-sm text-neutral-800">{entry.value}</h1>
            <h1 className="text-sm text-neutral-500 mr-0 ml-auto">{parseFloat(Math.floor(entry.payload.percent*10000)/100).toFixed(2)}%</h1>
          </div>
        ))}
      </div>
    );
  };
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <ResponsiveContainer width={400} height={400}>
      <PieChart >
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          innerRadius={100}
          outerRadius={130}
          dataKey="value"
          onMouseEnter={onPieEnter}
          onMouseLeave={onPieLeave}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} opacity={activeIndex===-1? 1: 0.5} />
          ))}
        </Pie>
          {activeIndex===-1 && <text x={200} y={160} dy={-5} style={{fontSize:"14px", fontWeight:"bolder"}} textAnchor="middle">Total Sales</text>}
          {activeIndex===-1 && <text x={200} y={160} dy="1.1em" style={{fontSize:"24px"}} textAnchor="middle">${ data.reduce((a, b) => a + b.value, 0)}</text>}
        <Legend content={customLegend} />
      </PieChart>
    </ResponsiveContainer>
  );
}
