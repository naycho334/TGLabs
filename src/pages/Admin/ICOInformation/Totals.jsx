import { PieChart, Pie, Cell, Label, ReferenceDot } from "recharts";
import { Divider, Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import Section from "components/Section";
import useStyles from "./styles";

import { ReactComponent as UserIcon } from "assets/svgs/icons/icon_users-panel.svg";

const data = [
  { name: "Group C", value: 36 },
  { name: "Group D", value: 64 },
];

const data02 = Array(35)
  .fill(1)
  .map(() => ({ name: "", value: 1 }));

const COLORS = ["#E78F65", "#138BBD"];

const Totals = () => {
  const classes = useStyles();

  const renderCustomizedLabel = (params) => {
    const props = ["x", "y", "fill", "textAnchor"]
      .map((key) => ({ [key]: params[key] }))
      .reduce((p, n) => ({ ...p, ...n }), {});
    const percentage = (params.percent * 100).toFixed(0);

    return <text {...props} fontWeight="bold">{`${percentage}%`}</text>;
  };

  return (
    <Grid item xs={3}>
      <Section title="Totals">
        <PieChart width={300} height={300}>
          <Pie
            label={renderCustomizedLabel}
            isAnimationActive={true}
            legendType="circle"
            cornerRadius={100}
            paddingAngle={-10}
            labelLine={false}
            outerRadius={110}
            innerRadius={90}
            startAngle={200}
            endAngle={-160}
            dataKey="value"
            stroke="none"
            data={data}
            fill="red"
            cx="50%"
            cy="50%"
          >
            {data.map((entry, index) => (
              <Cell
                fill={COLORS[index % COLORS.length]}
                key={`cell-${index}`}
                radius={50}
              />
            ))}
          </Pie>

          <Pie
            innerRadius={77}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            data={data02}
            fill="silver"
            cx="50%"
            cy="50%"
          />

          <text>Raised</text>
        </PieChart>

        <Typography variant="overline">Remaining</Typography>
        <Typography variant="body2" className="bold">
          $5.849.484,80 USD
        </Typography>
        <Divider />
        <Typography variant="overline">Remaining</Typography>
        <Typography variant="body2" className="bold">
          <UserIcon />
          <Typography>{Number(2546).toLocaleString()}</Typography>
          <span>USERS</span>
        </Typography>
      </Section>
    </Grid>
  );
};

export default memo(Totals);
