import { Button, Grid, Hidden, InputAdornment } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import DefaultTextField from "components/TextFields/DefaultTextField";
import { SearchIcon } from "components/Icons/Icons";
import useSmallScreen from "hooks/useSmallScreen";
import { Fragment } from "react";

const AwaitingApprovalBar = (props) => {
  const { inputProps, buttonProps, count } = props;

  return (
    <Fragment>
      <Hidden mdDown>
        <Grid item xs>
          <Grid alignItems="center" justify="flex-end" spacing={2} container>
            <TextField inputProps={inputProps} />
            <ApproveButton buttonProps={buttonProps} count={count} />
          </Grid>
        </Grid>
      </Hidden>
      <Hidden lgUp>
        <TextField inputProps={inputProps} xs={12} />
        <ApproveButton buttonProps={buttonProps} count={count} />
      </Hidden>
    </Fragment>
  );
};

const TextField = (_props) => {
  const isSmallScreen = useSmallScreen();
  const { inputProps, ...props } = _props;

  return (
    <Grid item {...props} className="textField">
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

const ApproveButton = (_props) => {
  const { buttonProps, count, ...props } = _props;

  return (
    <Grid item {...props}>
      <Button
        className="bold purple-bg white-text rounded-1"
        variant="contained"
        disableElevation
        {...buttonProps}
      >
        APPROVE ({count})
      </Button>
    </Grid>
  );
};

AwaitingApprovalBar.propTypes = {
  count: propTypes.number.isRequired,
  buttonProps: propTypes.shape({
    onClick: propTypes.func.isRequired,
  }),
  inputProps: propTypes.shape({
    onChange: propTypes.func.isRequired,
    value: propTypes.string.isRequired,
  }),
};

AwaitingApprovalBar.defaultProps = {
  count: 0,
};

export default memo(AwaitingApprovalBar);
