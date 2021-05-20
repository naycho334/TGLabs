import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { memo } from "react";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import WhiteLink from "components/Links/WhiteLink";
import useStyles from "./styles";

const WhiteLabel = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.whitePaper} container spacing={2}>
      <Grid item xs={12}>
        <Typography className="white-text bold" align="center">
          White Label Solutions
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography className="white-text" align="center">
          <WhiteLink component={Link} to={`#contact`}>
            <strong>Contact us</strong>
          </WhiteLink>
          , if you would like TG Labs to build a full working Crypto Casino for
          you, from Website development to API Integration. Choose from a
          variety of website designs that we offer, and we will handle the
          frontend end design for you.&nbsp;
          <LightBlueTypography component="span" className="bold">
            We can help you create your end product even fast!
          </LightBlueTypography>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default memo(WhiteLabel);
