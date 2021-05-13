import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import { TGCryptoColorIcon } from "components/Icons/Crypto";
import { formatPrice } from "lib/helpers";

const RemainingTokens = (props) => {
  const { price, amount } = props;

  return (
    <Grid
      className="remainingTokens"
      alignItems="center"
      justify="center"
      spacing={3}
      container
    >
      <Grid item>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography className="sub-section-title" variant="overline">
              Starting price:
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className="bold" component="span">
              {price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography className="sub-section-title" variant="overline">
              Remaining token:
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="body2" className="bold" component="span">
                  {formatPrice(amount, "usd")}
                </Typography>
              </Grid>
              <Grid item>
                <TGCryptoColorIcon width={20} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

RemainingTokens.propTypes = {
  amount: propTypes.number.isRequired,
  price: propTypes.string.isRequired,
};

export default memo(RemainingTokens);
