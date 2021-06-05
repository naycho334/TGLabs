import { Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { memo } from "react";
import _ from "lodash";

import DateCell from "components/DataTable/components/DateCell";
import { formatPrice } from "lib/helpers";

const RewardPoolBar = () => {
  const {
    nextPayout,
    totalRewards: { currency, value },
  } = useSelector((state) => state.adminRewardPoolReducer);

  return (
    <Grid item xs={12}>
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="caption" className="bold dark-grey-text">
                Total Rewards:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className="bold purple-text">
                <span>{formatPrice(value, currency, "sp")}</span>
                &nbsp;
                <Typography variant="caption" className="bold">
                  {String(currency).toUpperCase()}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <DateCell
                typographyProps={{ className: "bold dark-grey-text" }}
                value="Next Payout:"
              />
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" className="bold">
                {nextPayout}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(RewardPoolBar);
