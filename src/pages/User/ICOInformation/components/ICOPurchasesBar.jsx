import { Typography, Grid, Tabs, Tab } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

const ICOPurchasesBar = (props) => {
  const { tabsProps } = props;

  return (
    <Grid item>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography className="grey-text" variant="overline">
            Last
          </Typography>
        </Grid>
        <Grid item>
          <Tabs {...tabsProps} className="tabs">
            <Tab label="Week" disabled={tabsProps.disabled} />
            <Tab label="Month" disabled={tabsProps.disabled} />
            <Tab label="Year" disabled={tabsProps.disabled} />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  );
};

ICOPurchasesBar.propTypes = {
  buttonProps: propTypes.shape({
    onClick: propTypes.func.isRequired,
  }),
  inputProps: propTypes.shape({
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
  }),
  tabsProps: propTypes.shape({
    onChange: propTypes.func.isRequired,
    value: propTypes.number.isRequired,
  }),
};

export default memo(ICOPurchasesBar);
