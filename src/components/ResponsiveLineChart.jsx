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

export default function ResponsiveLineChart({ scale, data, config }) {
  return (
    <ResponsiveContainer width="100%" minHeight={350}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend verticalAlign="top" height={45} />
        <XAxis dataKey="date" />}
        <YAxis scale={scale} domain={[0.99, "dataMax"]} allowDataOverflow />
        {config.map((lineProps) => (
          <Line
            animationDuration={500}
            key={lineProps.dataKey}
            type="monotone"
            strokeWidth={2}
            {...lineProps}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
