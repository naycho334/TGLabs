import { Typography, Container, Grid } from "@material-ui/core";
import { lazy, memo, useState } from "react";

import AmountCell from "components/DataTable/components/AmountCell";
import StatusCell from "components/DataTable/components/StatusCell";
import TgLabCell from "components/DataTable/components/TgLabCell";
import DateCell from "components/DataTable/components/DateCell";
import HashCell from "components/DataTable/components/HashCell";
import UserCell from "components/DataTable/components/UserCell";
import { BitcoinColorIcon } from "components/Icons/Crypto";
import StatisticsCard from "./statistics/StatisticsCard";
import DataTable from "components/DataTable";
import useStyles from "./styles";

import { ReactComponent as Calendar } from "assets/svgs/icon_calendar-purple.svg";
import { ReactComponent as Withdraw } from "assets/svgs/icon_withdraw-purple.svg";
import { ReactComponent as Invest } from "assets/svgs/icon_invest-purple.svg";
import { ReactComponent as Users } from "assets/svgs/icon_users-purple.svg";

const TabContainer = lazy(() => import("components/TabContainer"));

const data = [
  {
    Icon: Calendar,
    value: 256,
    unit: "Days",
    caption: "is project running",
  },
  { Icon: Invest, value: 23673.42, unit: "BTC", caption: "Total Purchases" },
  {
    Icon: Withdraw,
    value: 13435.89,
    unit: "BTC",
    caption: "Total Withdrawals",
  },
  { Icon: Users, value: 2342, unit: "Users", caption: "Registered" },
];

const tableHead = [
  { label: "Date" },
  { label: "User" },
  { label: "Amount" },
  { label: "TGLab" },
  { label: "Hash" },
  { label: "" },
];

const tableData = Array(8).fill({
  date: "14.2.2021 07:40 PM",
  user: "fernd...@gmail.com",
  amount: "0,00034056",
  tglab: "0.456733",
  hash: "aa11c31e7a696eaeec254036826411499...",
  status: "complete",
});

const Statistics = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();

  /**
   * Change table type
   */
  const changeTableType = (event, newValue) => setValue(newValue);

  const mapData = (item) => ({
    0: { value: item.date },
    1: { value: item.user },
    2: { value: item.amount, unit: "BTC", icon: BitcoinColorIcon },
    3: { value: item.tglab },
    4: { value: item.hash },
    5: { value: item.status, className: item.status },
  });

  return (
    <div id="statistics">
      {/* Table */}
      <Container>
        <TabContainer
          onChange={changeTableType}
          value={value}
          beforeTabs={
            <Grid item>
              <Typography className="normal latest" variant="caption">
                Latest
              </Typography>
            </Grid>
          }
          data={[{ label: "Purchases" }, { label: "Withdrawals" }].map(
            (item) => ({
              ...item,
              Component: () => (
                <DataTable
                  tableHead={tableHead}
                  mapData={mapData}
                  data={tableData}
                  cardComponent={StatisticsCard}
                  noDivider
                  components={[
                    { component: DateCell },
                    { component: UserCell },
                    { component: AmountCell },
                    { component: TgLabCell },
                    { component: HashCell },
                    {
                      component: StatusCell,
                      tableCellProps: { align: "right" },
                    },
                  ]}
                />
              ),
            })
          )}
        />
      </Container>

      <div className={classes.statistics}>
        <Container>
          <Grid container spacing={2}>
            {data.map(({ Icon, value, unit, caption }) => (
              <Grid className="card" item xs={12} md key={caption}>
                <Grid alignItems="center" spacing={2} container>
                  <Grid item>
                    <Icon />
                  </Grid>
                  <Grid item xs>
                    <Grid container alignItems="center">
                      <Grid item>
                        <Typography
                          className="value normal purple-text"
                          variant="h5"
                        >
                          {Number(value).toLocaleString()}
                        </Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography className="purple-text" variant="overline">
                          {unit}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ marginTop: `-4px` }}>
                        <Typography className="purple-text" variant="caption">
                          {caption}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default memo(Statistics);
