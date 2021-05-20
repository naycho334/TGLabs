import { Grid, Hidden, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

const PlanRequests = (props) => {
  const { number, className, params, ...props_ } = props;

  return (
    <Grid
      className={clsx("plan-requests", className)}
      justify="center"
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
      <Grid item>
        <Typography>
          <strong>{number}K / </strong>month
        </Typography>
      </Grid>
    </Grid>
  );
};

PlanRequests.propTypes = {
  number: propTypes.number.isRequired,
  className: propTypes.string,
};

export default memo(PlanRequests);
