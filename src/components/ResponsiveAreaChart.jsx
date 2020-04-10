import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { scaleLog } from "d3-scale";
let domain = [0, "dataMax"];

export default function ResponsiveAreaChart({
  scale,
  data,
  config,
  reference,
}) {
  if (scale === "log") {
    scale = scaleLog().base(10);
    domain = [1, "dataMax"];
  }
  return (
    <ResponsiveContainer width="100%" minHeight={350}>
      <AreaChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="data" />}
        <YAxis scale={scale} domain={domain} allowDataOverflow />
        <ReferenceLine x={data[reference].data} stroke="black" />
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
