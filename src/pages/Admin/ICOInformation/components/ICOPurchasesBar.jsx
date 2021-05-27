import {
  InputAdornment,
  Typography,
  Hidden,
  Grid,
  Tabs,
  Tab,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import propTypes from "prop-types";
import { Fragment } from "react";
import { memo } from "react";

import GoldenGradientButton from "components/Buttons/GoldenGradientButton";
import DefaultTextField from "components/TextFields/DefaultTextField";
import { SearchIcon } from "components/Icons/Icons";
import useSmallScreen from "hooks/useSmallScreen";

const ICOPurchasesBar = (props) => {
  const { inputProps, buttonProps, tabsProps } = props;

  return (
    <Fragment>
      <Hidden mdDown>
        <Grid item>
          <Grid alignItems="center" justify="flex-end" spacing={2} container>
            <AddNewButton buttonProps={buttonProps} />
            <SearchBar inputProps={inputProps} />
            <PeriodTabs tabsProps={tabsProps} />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <PeriodTabs tabsProps={tabsProps} />
        <Grid item xs={12}>
          <Grid alignItems="center" justify="flex-end" spacing={2} container>
            <AddNewButton buttonProps={buttonProps} />
            <SearchBar xs inputProps={inputProps} />
          </Grid>
        </Grid>
      </Hidden>
    </Fragment>
  );
};

const AddNewButton = (_props) => {
  const { buttonProps, ...props } = _props;

  return (
    <Grid item {...props}>
      <GoldenGradientButton
        className="bold purple-bg white-text rounded-1 black-text"
        startIcon={<Add />}
        variant="contained"
        disableElevation
        {...buttonProps}
      >
        ADD NEW
      </GoldenGradientButton>
    </Grid>
  );
};

const SearchBar = (_props) => {
  const { inputProps, ...props } = _props;
  const isSmallScreen = useSmallScreen();

  return (
    <Grid item {...props}>
      <DefaultTextField
        className="outlined noLabel"
        fullWidth={isSmallScreen}
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        {...inputProps}
      />
    </Grid>
  );
};

const PeriodTabs = (_props) => {
  const { tabsProps, ...props } = _props;
  return (
    <Grid item {...props}>
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
