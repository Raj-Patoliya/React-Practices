import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";
export const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
