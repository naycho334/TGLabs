import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import TgLabCell from "components/DataTable/components/TgLabCell";

const BalancesBar = (props) => {
  const { value } = props;

  return (
    <Grid item>
      <Grid container direction="column" alignItems="flex-end" justify="center">
        <Grid item>
          <Typography component="span" variant="overline" className="grey-text">
            Total tglab
          </Typography>
        </Grid>
        <Grid item>
          <TgLabCell value={value} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(BalancesBar);
