import { Divider, Grid, MenuItem, Typography } from "@material-ui/core";
import { KeyboardArrowDown } from "@material-ui/icons";
import { Pie, Cell } from "recharts";
import { lazy, memo } from "react";

import { formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

import { ReactComponent as AccountIcon } from "assets/svgs/icons/icon_account.svg";
import { NoFieldsetSelectInput } from "components/Selects/NoFieldsetSelect";
import NoFieldsetSelect from "components/Selects/NoFieldsetSelect";

const PieChart = lazy(() => import("components/PieChart"));

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
      <PieChart
        data={data}
        chartContent={{
          amount: formatPrice(33694.874, "usd", "sp"),
          label: "Raised",
          unit: "usd",
        }}
        onChangeCurrency={() => alert("ok")}
        noTable
        colors={COLORS}
      />

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
