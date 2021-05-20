import { Grid, Hidden, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

const PlanText = (props) => {
  const { text, className, params, ...props_ } = props;

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
        <Typography className="bold">{text}</Typography>
      </Grid>
    </Grid>
  );
};

PlanText.propTypes = {
  text: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(PlanText);
