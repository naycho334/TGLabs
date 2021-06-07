import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { lazy, memo } from "react";
import _ from "lodash";

import { formatPrice, CRYPTO_CHART_COLORS } from "lib/helpers";
import BalancesBar from "./components/BalancesBar";
import Section from "components/Section";
import useStyles from "./styles";

const PieChart = lazy(() => import("components/PieChart"));

const Balances = () => {
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
  ].map((item, index, array) => ({
    ...item,
    subtitle: formatPrice(item.usd, "usd", "sp"),
    data: `${Number(
      (item.value /
        array.map(({ value }) => value).reduce((p, n) => p + n, 0)) *
        100
    ).toFixed(0)}%`,
  }));

  return (
    <Grid item xs={12} lg={6} className={classes.balances}>
      <Section
        headerProps={{ spacing: 2 }}
        header={<BalancesBar value={Number(345).toLocaleString()} />}
        title="Balances"
      >
        <PieChart
          data={data}
          chartContent={{
            amount: formatPrice(33694.874, "usd", "sp"),
            label: "Total",
            unit: "usd",
          }}
          onChangeCurrency={() => alert("ok")}
          noLabel
          colors={CRYPTO_CHART_COLORS}
        />
      </Section>
    </Grid>
  );
};

export default memo(Balances);
