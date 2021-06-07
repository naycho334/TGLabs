import { Divider, Grid, MenuItem, Typography } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { PieChart, Pie, Cell } from "recharts";
import { memo } from "react";

import { formatPrice } from "../../../lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

import { ReactComponent as AccountIcon } from "assets/svgs/icons/icon_account.svg";
import NoFieldsetSelect from "components/Selects/NoFieldsetSelect";
import { NoFieldsetSelectInput } from "components/Selects/NoFieldsetSelect";

const data = [
  { name: "Group C", value: 36 },
  { name: "Group D", value: 64 },
];

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
      <div className="chartContainer">
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
            data={Array(35).fill({ name: "", value: 1 })}
            innerRadius={77}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            fill="silver"
            cx="50%"
            cy="50%"
          />
        </PieChart>

        <div className="chartContent">
          <div>
            <Typography variant="overline" className="grey-text">
              Raised
            </Typography>
          </div>
          <div>
            <Typography variant="body2">$2.434.394,46</Typography>
          </div>
          <div>
            <NoFieldsetSelect
              input={<NoFieldsetSelectInput />}
              IconComponent={KeyboardArrowDown}
              onChange={() => {}}
              id="currencies-list"
              className="chart"
              value="usd"
            >
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="eur">EUR</MenuItem>
            </NoFieldsetSelect>
          </div>
        </div>
      </div>

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
