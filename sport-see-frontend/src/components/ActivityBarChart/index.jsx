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
import { useState, useCallback, useEffect } from "react";

/**
 * @description get top margin according to the width of viewport
 * @returns number
 */
function getTopMargin() {
  switch (true) {
    case window.innerWidth >= 1400:
      return 64;
    case window.innerWidth >= 1300:
      return 50;
    case window.innerWidth >= 1200:
      return 36;
    case window.innerWidth >= 1100:
      return 22;
    case window.innerWidth >= 1000:
      return 10;
    default:
      return 5;
  }
}
/**
 * @description set style of the legend
 * @param {string} value
 * @returns render legend in span
 */
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
/**
 * @description graph component
 * @param {object} data
 * @returns render bar chart activity of user
 */
const ActivityBarChart = ({ data }) => {
  // tooltip coordinates
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  // top margin of bar chart
  const [topMargin, setTopMargin] = useState(getTopMargin());
  /**
   * set the x tooltip position according to the position of the mouse
   */
  const handleMouseMove = useCallback(
    (entry) => {
      const xTooltip =
        entry.tooltipPayload[0].name === "kg"
          ? entry.x - 23.5 // x tooltip position for weight
          : entry.x - 38.5; // x tooltip position for calorie
      setTooltipPosition({ x: xTooltip, y: entry.background.y - 30 });
    },
    [setTooltipPosition]
  );
  /**
   * set the top margin when the window is resized
   */
  useEffect(() => {
    function handleResize() {
      setTopMargin(getTopMargin());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResponsiveContainer width="99%" aspect={2.86} onResize>
      <BarChart
        data={data}
        margin={{
          // changes with window width
          top: topMargin,
          bottom: 9,
          right: 44,
          left: 20,
        }}
        barSize={7}
        barGap={8}
        title="Activité quotidienne"
      >
        <CartesianGrid vertical="" strokeDasharray="3 3" viewBox="" />
        <XAxis
          axisLine={{ stroke: "var(--graphic-lightness-grey-color)" }}
          padding={{ left: 11, right: 11 }}
          tickMargin={25}
          tickSize={0}
          tickLine=""
          tickCount={7}
          tickFormatter={(value, index) => `${index + 1}`}
          fontSize="0.875em"
          fontWeight={500}
          color="var(--light-grey-text-color)"
          dataKey="day"
          scale="point"
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          tickMargin={0}
          tickSize={0}
          tickLine=""
          axisLine=""
          type="number"
          hide="true"
          domain={["auto", "auto"]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickMargin={43}
          tickSize={0}
          tickLine=""
          axisLine=""
          fontSize={14}
          fontWeight={500}
          width={18}
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
          position={{ x: tooltipPosition.x + 63, y: tooltipPosition.y }}
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
          wrapperStyle={{ top: 0, right: 0 }}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="var(--graphic-black-color)"
          radius={[3, 3, 0, 0]}
          name="kg"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseMove}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="var(--graphic-red-color)"
          radius={[3, 3, 0, 0]}
          name="Kcal"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseMove}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityBarChart;

ActivityBarChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.string,
      kilogram: propTypes.number,
      calories: propTypes.number,
    })
  ).isRequired,
};
