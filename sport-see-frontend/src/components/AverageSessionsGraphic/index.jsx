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

const CustomizedCursor = ({
  points,
  payload,
  height,
  width,
  bottom,
  fill,
  customTooltip,
  setCustomTooltip,
}) => {
  const handleTooltipPosition =
    customTooltip &&
    useCallback(() => {
      setCustomTooltip({
        x: points[0].x + 4,
        y:
          (-payload[0].payload.sessionLength * height) /
            customTooltip.activDotMaxValue +
          points[1].y -
          customTooltip.wrapperHeight -
          customTooltip.offset,
        wrapperHeight: customTooltip.wrapperHeight,
        offset: customTooltip.offset,
        activDotMaxValue: customTooltip.activDotMaxValue,
      });
    }, [payload[0]]);
  return (
    <>
      <Rectangle
        x={0}
        y={bottom}
        width={points[0].x - 1}
        height={points[1].y}
        fill={fill}
        onMouseMove={handleTooltipPosition}
      />
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

const AverageSessionsGraphic = ({ data }) => {
  const [customTooltip, setCustomTooltip] = useState({
    x: 0,
    y: 0,
    wrapperHeight: 25,
    offset: 10.91,
    activDotMaxValue: data.reduce((prev, curr) =>
      prev > curr.sessionLength ? prev : curr.sessionLength
    ),
  });

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        title="Durée moyenne des sessions"
        margin={{ top: 77.27, bottom: 35.52 }}
      >
        <defs>
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
    wrapperHeight: propTypes.number,
    offset: propTypes.number,
    activDotMaxValue: propTypes.number,
  }),
  // eslint-disable-next-line react/require-default-props
  setCustomTooltip: propTypes.func,
};
CustomizedCursor.defaultProps = {
  points: undefined,
  payload: undefined,
  bottom: undefined,
  fill: undefined,
  customTooltip: undefined,
};
