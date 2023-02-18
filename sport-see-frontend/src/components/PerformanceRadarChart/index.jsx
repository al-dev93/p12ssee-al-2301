import propTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Text,
} from "recharts";
import { frenchKind } from "../../utils/getFrenchKindName";

const CustomizedTick = ({ payload, radius, cx, cy, x, y, textAnchor }) => {
  const verticalAnchor = () => {
    if (payload.index === 3) return "start";
    if (!payload.index) return "end";
    return "middle";
  };

  return (
    <Text
      radius={radius}
      cx={cx}
      cy={cy}
      x={x}
      y={y}
      fontSize={12}
      fontWeight={500}
      fill="var(--primary-color)"
      textAnchor={visualViewport.width >= 1240 ? textAnchor : "middle"}
      capHeight="1.5em"
      verticalAnchor={verticalAnchor()}
      className="recharts-polar-angle-axis-tick-value"
    >
      {payload.value}
    </Text>
  );
};

const PerformanceRadarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="99%" aspect={0.972} margin="12px 2px 12px 5px">
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid
          radialLines=""
          stroke="var(--primary-color)"
          polarRadius={[88, 65.5, 43, 20.5, 9.25]}
        />
        <PolarAngleAxis
          axisLine=""
          tickLine=""
          dataKey="kindName"
          domain={Object.values(frenchKind)}
          tick={<CustomizedTick />}
        />
        <PolarRadiusAxis
          domain={["dataMin", "dataMax"]}
          axisLine=""
          tick=""
          tickLine=""
          tickCount={7}
        />
        <Radar name="Performance" dataKey="value" fill="#FF0101B2" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceRadarChart;

PerformanceRadarChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.number,
      kind: propTypes.number,
      kindName: propTypes.string,
    })
  ).isRequired,
};

CustomizedTick.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  payload: propTypes.object,
  radius: propTypes.number,
  cx: propTypes.number,
  cy: propTypes.number,
  x: propTypes.number,
  y: propTypes.number,
  // eslint-disable-next-line react/require-default-props
  textAnchor: propTypes.string,
};
CustomizedTick.defaultProps = {
  payload: undefined,
  x: undefined,
  y: undefined,
  cx: 0,
  cy: 0,
  radius: 0,
};
