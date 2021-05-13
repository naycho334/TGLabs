import { Box, Grid, Typography } from "@material-ui/core";
import { lazy, memo } from "react";

import LightBlueTypography from "components/Typography/LightBlueTypography";
import useStyles from "./styles";

import { TGCryptoColorIcon } from "../../components/Icons/Crypto";

const TargetProgress = lazy(() => import("components/TargetProgress"));

const TokenSupply = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography
          className="white-text"
          variant="subtitle2"
          align="center"
          gutterBottom
        >
          Token supply:
        </Typography>
        <LightBlueTypography component="div" align="center" variant="h5">
          {Number(2000000).toLocaleString()}
          <Box ml={2} display="inline">
            <TGCryptoColorIcon style={{ transform: "translateY(4px) scale(.9)" }} />
          </Box>
        </LightBlueTypography>
      </Grid>

      <Grid item xs={12}>
        <TargetProgress
          className={classes.tokenSupply}
          maxValue={2000000}
          value={900000}
          noProgress
          withLabel
          targets={[
            { label: "Softcap", value: 800000 },
            { label: "Hardcap", value: 1600000 },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default memo(TokenSupply);
