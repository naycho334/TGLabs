import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import { LXRIcon } from "components/Icons/Icons";

const PlanHeader = (props) => {
  const { name, price, className, ...props_ } = props;

  return (
    <Grid
      className={className}
      alignItems="center"
      direction="column"
      {...props_}
      container
    >
      <Grid item>
        <Typography variant="h5" className="title">
          {name}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" justify="center" spacing={1}>
          <Grid item>
            <LXRIcon className="lxr-icon" />
          </Grid>
          <Grid item>
            <Typography
              className="price grey-text bold"
              component="span"
              variant="h5"
            >
              {Number(price).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item>
            <Typography className="grey-text bold" component="span">
              LXR
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PlanHeader.propTypes = {
  price: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(PlanHeader);
