import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ResponsiveAreaChart({ scale, data, config }) {
  return (
    <ResponsiveContainer width="100%" minHeight={350}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={45} />
        <XAxis dataKey="date" />}
        <YAxis scale={scale} domain={[0.99, "dataMax"]} allowDataOverflow />
        {config.map((lineProps) => (
          <Area
            animationDuration={500}
            key={lineProps.dataKey}
            type="monotone"
            strokeWidth={2}
            {...lineProps}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
