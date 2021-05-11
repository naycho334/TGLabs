import { Grid } from "@material-ui/core";
import { memo } from "react";

import { ReactComponent as TokenDistChartInfo } from "assets/svgs/token-dist-pricing-chart-info.svg";
import { ReactComponent as TokenDistChartVert } from "assets/svgs/token-dist-pricing-chart-vert.svg";
import { ReactComponent as TokenDistChartHor } from "assets/svgs/token-dist-pricing-chart-hor.svg";

import Chip1Blurred from "assets/pngs/chip1.png";

import useStyles from "./styles";

const TokenDistribution = () => {
  const classes = useStyles();

  return (
    <div className={classes.tokenDistribution}>
      <Grid container>
        <Grid item xs={12} className="chartContainer">
          <TokenDistChartHor />
        </Grid>
        <Grid item xs={12} className="chartContainerMobile">
          <Grid container>
            <Grid item xs={12}>
              <TokenDistChartVert className="chart" />
            </Grid>
            <Grid item xs={12}>
              <TokenDistChartInfo className="info" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <img src={Chip1Blurred} alt="blurred chip" />
    </div>
  );
};

export default memo(TokenDistribution);
