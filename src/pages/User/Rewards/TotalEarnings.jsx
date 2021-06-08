import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";
import _ from "lodash";

import { CRYPTO_CHART_COLORS, formatPrice } from "lib/helpers";
import Section from "components/Section";
import useStyles from "./styles";

const PieChart = lazy(() => import("components/PieChart"));

const TotalEarnings = () => {
  const { isReadOnly } = useSelector((state) => state.adminUserReducer);
  const dispatch = useDispatch();
  const classes = useStyles();

  const data = [
    { name: "Bitcoin", unit: "btc", value: 64, amount: 0.0269741, usd: 96854 },
    {
      name: "Binance BNB",
      unit: "bnb",
      value: 21,
      amount: 0.0269741,
      usd: 96854,
    },
    { name: "Ethereum", unit: "eth", value: 8, amount: 0.0269741, usd: 96854 },
    { name: "Tron", unit: "trx", value: 4, amount: 0.0269741, usd: 96854 },
    { name: "Litecoin", unit: "ltc", value: 3, amount: 0.0269741, usd: 96854 },
  ].map((item, index) => ({
    ...item,
    subtitle: item.amount,
    data: formatPrice(item.usd * index, 'usd', 'sp')
  }));

  return (
    <Grid item xs={12} lg={8} className={classes.totalEarnings}>
      <Section title="Total Earnings">
        <PieChart
          data={data}
          chartContent={{
            amount: formatPrice(33694.874, "usd", "sp"),
            label: "Total",
            unit: "usd",
          }}
          onChangeCurrency={() => {}}
          colors={CRYPTO_CHART_COLORS}
        />
      </Section>
    </Grid>
  );
};

export default memo(TotalEarnings);
