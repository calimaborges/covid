import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

export default function ResponsiveLineChart({ scale, data, config, reference }) {
  return (
    <ResponsiveContainer width="100%" minHeight={350}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="data" />}
        <YAxis scale={scale} domain={[0.99, "dataMax"]} allowDataOverflow />
        <ReferenceLine x={data[reference].data} stroke="black" />
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
