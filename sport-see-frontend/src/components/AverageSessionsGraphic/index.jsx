import propTypes from "prop-types";
import { useCallback, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

/**
 * @description graph component
 * @param {array} points
 * @param {array} payload
 * @param {number} height
 * @param {number} width
 * @param {number} bottom
 * @param {string} fill
 * @param {number} wrapperHeight
 * @param {number} offset
 * @param {number} sessionMax
 * @param {object} customTooltip
 * @param {function} setCustomTooltip
 * @returns render custom cursor depending mouse position
 */
const CustomizedCursor = ({
  points,
  payload,
  height,
  width,
  bottom,
  fill,
  wrapperHeight,
  offset,
  sessionMax,
  customTooltip,
  setCustomTooltip,
}) => {
  /**
   * set tooltip position
   */
  const handleTooltipPosition =
    customTooltip &&
    useCallback(() => {
      setCustomTooltip({
        x: points[0].x + 4,
        y:
          (-payload[0].payload.sessionLength * height) / sessionMax +
          points[1].y -
          wrapperHeight -
          offset,
      });
    }, [payload[0]]);
  return (
    <>
      {/* cursor with linear gradient */}
      <Rectangle
        x={0}
        y={0}
        width={points[0].x - 1}
        height={points[1].y + bottom}
        fill={fill}
        onMouseMove={handleTooltipPosition}
      />
      {/* cursor with black opacity */}
      <Rectangle
        x={points[0].x - 1}
        y={0}
        width={width - points[0].x + 1}
        height={points[1].y + bottom}
        fill="var(--secondary-color)"
        fillOpacity={0.0975}
        onMouseMove={handleTooltipPosition}
      />
    </>
  );
};
/**
 * @description graph component
 * @param {object} data
 * @returns render line chart of average durations of user's sessions
 */
const AverageSessionsGraphic = ({ data }) => {
  // tooltip coordinates
  const [customTooltip, setCustomTooltip] = useState({
    x: 0,
    y: 0,
  });

  return (
    <ResponsiveContainer width="99%" aspect={0.972}>
      <LineChart
        data={data}
        title="Dur??e moyenne des sessions"
        margin={{ top: 77.27, bottom: 35.52 }}
      >
        <defs>
          {/* linear gradient for custom cursor */}
          <linearGradient id="cursorFill" x1="0" y1="1" x2="0" y2="0">
            <stop
              offset="0%"
              stopColor="var(--primary-color)"
              stopOpacity={0.2}
            />
            <stop
              offset="100%"
              stopColor="rgba(255, 255, 255, 0.1065)"
              stopOpacity={0.2}
            />
          </linearGradient>
        </defs>
        <CartesianGrid horizontal="" vertical="" />
        <XAxis
          dataKey="sessionDay"
          height={24}
          padding={{ left: 14, right: 14 }}
          axisLine=""
          tickLine=""
          tickMargin={19.52}
          fontSize={12}
          fontWeight={500}
          stroke="var(--primary-color)"
          opacity="50%"
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip
          wrapperStyle={{
            outlineStyle: "none",
          }}
          itemStyle={{
            color: "var(--secondary-color)",
            fontSize: 8,
            fontWeight: 500,
            padding: "1px 0 0 0",
          }}
          contentStyle={{
            padding: 0,
            boxSizing: "border-box",
            width: 39,
            height: 25,
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            border: "",
          }}
          labelStyle={{ display: "none" }}
          formatter={(value) => [`${value} min`]}
          cursor={
            <CustomizedCursor
              fill="url(#cursorFill)"
              customTooltip={customTooltip}
              setCustomTooltip={setCustomTooltip}
            />
          }
          position={{ x: customTooltip.x, y: customTooltip.y }}
          separator=""
        />
        <Line
          dataKey="sessionLength"
          type="monotone"
          stroke="var(--primary-color)"
          strokeWidth={2}
          dot=""
          activeDot={{
            stroke: "#FFFFFF33",
            strokeWidth: 5,
            fill: "var(--primary-color)",
            r: 4,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessionsGraphic;

AverageSessionsGraphic.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      day: propTypes.number,
      sessionLength: propTypes.number,
      sessionDay: propTypes.string,
    })
  ).isRequired,
};

CustomizedCursor.propTypes = {
  points: propTypes.arrayOf(propTypes.objectOf(propTypes.number)),
  // eslint-disable-next-line react/forbid-prop-types
  payload: propTypes.arrayOf(propTypes.object),
  // eslint-disable-next-line react/require-default-props
  height: propTypes.number,
  // eslint-disable-next-line react/require-default-props
  width: propTypes.number,
  bottom: propTypes.number,
  fill: propTypes.string,
  customTooltip: propTypes.shape({
    x: propTypes.number,
    y: propTypes.number,
  }),
  // eslint-disable-next-line react/require-default-props
  setCustomTooltip: propTypes.func,
  wrapperHeight: propTypes.number,
  offset: propTypes.number,
  sessionMax: propTypes.number,
};
CustomizedCursor.defaultProps = {
  points: undefined,
  payload: undefined,
  bottom: undefined,
  fill: undefined,
  customTooltip: {
    x: undefined,
    y: undefined,
  },
  wrapperHeight: 25,
  offset: 10.91,
  sessionMax: 60,
};
