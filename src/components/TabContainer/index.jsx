import { Grid, Tab, Tabs } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import TabPanel from "./TabPanel";
import useStyles from "./styles";

const TabContainer = (props) => {
  const { data, value, onChange, beforeTabs } = props;
  const classes = useStyles();

  return (
    <div className={classes.tabTable}>
      <div className="tabBar">
        <Grid container alignItems="center">
          {beforeTabs}
          <Grid item>
            <Tabs
              TabIndicatorProps={{ className: "tabIndicator" }}
              onChange={onChange}
              value={value}
            >
              {data.map(({ label }) => (
                <Tab
                  className="capitalize statistics"
                  label={label}
                  key={label}
                />
              ))}
            </Tabs>
          </Grid>
        </Grid>
      </div>
      {data.map(({ Component }, index) => (
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
  );
};

TabContainer.propTypes = {
  onChange: propTypes.func.isRequired,
  value: propTypes.number.isRequired,
  data: propTypes.array.isRequired,
  beforeTabs: propTypes.any,
};

export default memo(TabContainer);
