import { Button, Grid } from "@material-ui/core";
import { memo } from "react";

import LightBlueTypography from "../Typography/LightBlueTypography";
import useStyles from "./styles";

import EarnIllustrationBlurred from "assets/pngs/earn_illustration.png";

const ReferFriend = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.referFriend}>
      <Grid item>
        <img src={EarnIllustrationBlurred} alt="earn illustration blurred" />
      </Grid>
      <Grid item xs>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LightBlueTypography
              style={{ margin: 0 }}
              className="bold"
              align="right"
            >
              Refer your friends & earn more money.
            </LightBlueTypography>
          </Grid>
          <Grid item xs={12}>
            <Button>Boost Now</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(ReferFriend);
