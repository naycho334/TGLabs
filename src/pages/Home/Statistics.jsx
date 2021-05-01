import {
  Typography,
  Container,
  useTheme,
  Grid,
  Tabs,
  Tab,
} from "@material-ui/core";
import { memo, useCallback, useEffect, useState } from "react";

import useForceUpdate from "../../hooks/useForceUpdate";
import DataTable from "./statistics/DataTable";
import TabPanel from "./statistics/TabPanel";
import DataCard from "./statistics/DataCard";
import useStyles from "./styles";

import { ReactComponent as Calendar } from "../../assets/svgs/icon_calendar-purple.svg";
import { ReactComponent as Withdraw } from "../../assets/svgs/icon_withdraw-purple.svg";
import { ReactComponent as Invest } from "../../assets/svgs/icon_invest-purple.svg";
import { ReactComponent as Users } from "../../assets/svgs/icon_users-purple.svg";

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

let currentScreen = false;

const Statistics = () => {
  const smallScreenWidth = useTheme().breakpoints.width("sm");
  const [value, setValue] = useState(0);
  const forceUpdate = useForceUpdate();
  const classes = useStyles();

  const isSmallScreen = window.innerWidth <= smallScreenWidth;

  const tables = [
    { label: "Purchases", Component: isSmallScreen ? DataCard : DataTable },
    { label: "Withdrawals", Component: isSmallScreen ? DataCard : DataTable },
  ];

  /**
   * Handle window size change
   */
  const handleResizeWindow = useCallback(() => {
    const isSmallScreen = window.innerWidth <= smallScreenWidth;
    if (currentScreen !== isSmallScreen) {
      currentScreen = isSmallScreen;
      forceUpdate();
    }
  }, [forceUpdate, smallScreenWidth]);

  /**
   * Change table type
   */
  const changeTableType = (event, newValue) => setValue(newValue);

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  });

  return (
    <div id="statistics">
      {/* Table */}
      <Container>
        <div className={classes.tabTable}>
          <div className="tabBar">
            <Typography className="normal latest" variant="caption">
              Latest
            </Typography>
            <Tabs
              TabIndicatorProps={{ className: "tabIndicator" }}
              onChange={changeTableType}
              value={value}
            >
              {tables.map(({ label }) => (
                <Tab
                  className="capitalize statistics"
                  label={label}
                  key={label}
                />
              ))}
            </Tabs>
          </div>
          {tables.map(({ Component }, index) => (
            <TabPanel
              id={`tabTable-${index}`}
              value={value}
              index={index}
              key={index}
            >
              <Component />
            </TabPanel>
          ))}
        </div>
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
