import propTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useState, useCallback } from "react";

const legendStyle = (value) => {
  return (
    <span
      style={{
        color: "var(--legend-text-color)",
        fontSize: 14,
        fontWeight: 500,
      }}
    >
      {value}
    </span>
  );
};

const ActivityBarChart = ({ data }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (entry) => {
      const xTooltip =
        entry.tooltipPayload[0].name === "kg" ? entry.x - 23.5 : entry.x - 38.5;
      setTooltipPosition({ x: xTooltip, y: entry.background.y - 30 });
    },
    [setTooltipPosition]
  );

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 112,
          bottom: 39,
          right: 72,
          left: 43,
        }}
        barSize={7}
        barCategoryGap={68}
        barGap={8}
      >
        <CartesianGrid
          vertical=""
          strokeDasharray="3 3"
          width={702}
          height={145}
        />
        <XAxis
          axisLine={{ stroke: "var(--graphic-lightness-grey-color)" }}
          padding={{ left: -44, right: -44 }}
          tickMargin={16}
          height={24}
          fontSize={14}
          fontWeight={500}
          color="var(--light-grey-text-color)"
          dataKey={() => data.map((el, index) => `${index + 1}`)}
          tickLine=""
          domain={["dataMin", "dataMax"]}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          tickMargin={0}
          axisLine=""
          tickLine=""
          type="number"
          domain={["auto", "auto"]}
          hide="true"
        />
        <YAxis
          tickMargin={43}
          width={18}
          fontSize={14}
          fontWeight={500}
          yAxisId="right"
          axisLine=""
          tickLine=""
          orientation="right"
          type="number"
          domain={["dataMin - 1", "dataMax"]}
        />
        <Tooltip
          wrapperStyle={{
            outlineStyle: "none",
          }}
          labelStyle={{
            display: "none",
          }}
          contentStyle={{
            boxSizing: "border-box",
            width: 39,
            height: 63,
            paddingTop: 1,
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            borderStyle: "none",
            backgroundColor: "var(--graphic-red-color)",
            fontSize: 7,
            fontWeight: 500,
          }}
          itemStyle={{
            color: "var(--primary-color)",
            height: 24,
            textAlign: "center",
            paddingTop: 3,
            paddingBottom: 4,
          }}
          separator=""
          formatter={(value, name) => [name, value]}
          cursor={{
            width: 56,
            fill: "var(--mark-graphic-color)",
            opacity: 0.5,
            x: tooltipPosition.x,
          }}
          offset={28}
          position={{ y: tooltipPosition.y }}
          allowEscapeViewBox={{ y: true }}
        />
        <Legend
          width={277}
          height={25}
          align="right"
          verticalAlign="top"
          payload={[
            {
              value: "Poids (kg)",
              color: "var(--graphic-black-color)",
              formatter: legendStyle,
            },
            {
              value: "Calories brûlées (kCal)",
              color: "var(--graphic-red-color)",
              formatter: legendStyle,
            },
          ]}
          iconSize={8}
          iconType="circle"
          wrapperStyle={{ top: 24, right: 26 }}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="var(--graphic-black-color)"
          radius={[3, 3, 0, 0]}
          name="kg"
          onMouseMove={handleMouseMove}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="var(--graphic-red-color)"
          radius={[3, 3, 0, 0]}
          name="Kcal"
          onMouseMove={handleMouseMove}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityBarChart;

ActivityBarChart.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: propTypes.array.isRequired,
};
