import { Divider, Grid, Typography } from "@material-ui/core";
import { PieChart, Pie, Cell } from "recharts";
import { memo } from "react";

import { formatPrice } from "../../../lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

import { ReactComponent as AccountIcon } from "assets/svgs/icons/icon_account.svg";

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
    <Section className={classes.totals} title="Totals">
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

      {/* Remaining */}
      <div className="remaining">
        <Typography variant="overline" className="sub-section-title">
          Remaining
        </Typography>
        <Typography variant="body2" className="bold">
          {formatPrice(584948480)}
        </Typography>
      </div>

      <Divider className="my" />

      {/* Registered */}
      <div className="registered">
        <Typography variant="overline" className="sub-section-title">
          Registered
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <AccountIcon />
          </Grid>
          <Grid item>
            <Typography component="span" variant="h6" className="bold">
              {Number(2546).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="span" variant="body2" className="bold">
              USERS
            </Typography>
          </Grid>
        </Grid>
      </div>
    </Section>
  );
};

export default memo(Totals);
