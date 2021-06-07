import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import TgLabCell from "components/DataTable/components/TgLabCell";

const ReferralEarningsBar = (props) => {
  const { tglabs } = props;

  return (
    <Grid item>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <Typography variant="overline" className="grey-text">
            Total TGLab
          </Typography>
        </Grid>
        <Grid item className="bar">
          <TgLabCell value={tglabs} />
        </Grid>
      </Grid>
    </Grid>
  );
};

ReferralEarningsBar.propTypes = {
  tglabs: propTypes.number.isRequired,
};

export default memo(ReferralEarningsBar);
