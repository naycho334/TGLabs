import { Grid, Hidden, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

const PlanFees = (props) => {
  const { deposits, withdrawals, client, className, params, ...props_ } = props;

  return (
    <Grid
      className={clsx("plan-text", className)}
      alignItems="center"
      container
      {...props_}
    >
      <Hidden lgUp>
        <Grid item xs={12}>
          <Typography className="grey-text" variant="overline">
            {params.title}
          </Typography>
        </Grid>
      </Hidden>
      <Grid item xs={12}>
        <Typography className="bold">Deposits: {deposits}%</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="bold">Withdrawals: {withdrawals}%</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="bold">+ blockchain fees</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="bold">
          Client Withdrawals**: {client}%
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="bold">+ blockchain fees</Typography>
      </Grid>
    </Grid>
  );
};

PlanFees.propTypes = {
  withdrawals: propTypes.string.isRequired,
  deposits: propTypes.string.isRequired,
  client: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(PlanFees);
