import { Button, Grid, Hidden, InputAdornment } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import DefaultTextField from "components/TextFields/DefaultTextField";
import { SearchIcon } from "components/Icons/Icons";
import useSmallScreen from "hooks/useSmallScreen";

const PendingWithdrawalsBar = (props) => {
  const { inputProps, approveButtonProps, rejectButtonProps } = props;

  return (
    <>
      <Hidden mdDown>
        <Grid item>
          <Grid container spacing={2}>
            <TextField inputProps={inputProps} />
            <ApproveButton approveButtonProps={approveButtonProps} />
            <RejectButton rejectButtonProps={rejectButtonProps} />
          </Grid>
        </Grid>
      </Hidden>

      <Hidden lgUp>
        <ApproveButton approveButtonProps={approveButtonProps} />
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <TextField inputProps={inputProps} xs />
            <RejectButton rejectButtonProps={rejectButtonProps} />
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

const RejectButton = (_props) => {
  const { rejectButtonProps: { count, ...rejectButtonProps}, ...props } = _props;

  return (
    <Grid item {...props}>
      <Button
        className="orange-bg white-text rounded-1 bold"
        variant="contained"
        disableElevation
        {...rejectButtonProps}
      >
        Reject ({count})
      </Button>
    </Grid>
  );
};

const ApproveButton = (_props) => {
  const { approveButtonProps:{count, ...approveButtonProps}, ...props } = _props;

  return (
    <Grid item {...props}>
      <Button
        className="purple-bg white-text rounded-1 bold"
        variant="contained"
        disableElevation
        {...approveButtonProps}
      >
        Approve ({count})
      </Button>
    </Grid>
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

export default memo(PendingWithdrawalsBar);
