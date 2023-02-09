import propTypes from "prop-types";
import {
  Label,
  PolarAngleAxis,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const ScoreRadialBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius={79.69}
        barGap={0}
        barCategoryGap={0}
        maxBarSize={10}
        data={data}
        startAngle={210}
        endAngle={-360}
      >
        <PolarAngleAxis type="number" domain={[0, 1]} angleAxisId={0} tick="" />
        <PolarRadiusAxis tick="" tickLine="" hide fill="transparent" stroke="">
          <Label
            value={`${data[0].score * 100}%`}
            position="center"
            textAnchor="center"
            fill="var(--graphic-black-color)"
            fontSize="26px"
            fontWeight="var(--font-weight-bold)"
          />
        </PolarRadiusAxis>
        <RadialBar
          background=""
          fill="var(--red-background-color)"
          color=""
          clockWise
          dataKey="score"
          cornerRadius="50%"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ScoreRadialBarChart;

ScoreRadialBarChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      score: propTypes.number,
    })
  ).isRequired,
};
