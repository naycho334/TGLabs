import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

import { ReactComponent as FundChart } from "../../assets/svgs/fund-allocation.svg";

import coinBlurred from "../../assets/pngs/coin.png";

const data = [
  {
    title: "Advisory Fees",
    description:
      "TrueGaming Labs will utilise the extensive advice of market, and technologies advisors to ensure that we achieve the right combination of technologies employed for optimal game play and efficiency, as well as fully understanding the needs and wants of day to day users. This will involve analysing market data, competitors, and best practices within the crypto gaming space.",
  },
  {
    title: "Research",
    description:
      "Research for developments is a continuous process, that requires a lot of trial and error. This will involve researching certain technology combinations that meet TrueGaming Labs needs. There will also be extensive research into game development, feature development and other aspects of user experience with TrueGaming Labs developments.",
  },
  {
    title: "Development",
    description:
      "Development of infrastructure, game logic, features and processes require extensive time and testing to achieve the most optimal performing platforms. This will involve security, games, and new features development as well as CMS portal development for clients.",
  },
  {
    title: "Initial Maintenance costs",
    description:
      "Running applications requires a lot of maintenance in ensuring the health of databases, servers, and the application. Monitoring server processing, speed, and memory usage constantly to ensure we have as high of an up-time as possible and no deficiency in speed and backend resources will ensure the best user experience for all users using a TrueGaming Labs built platform!",
  },
  {
    title: "Marketing",
    description:
      "Marketing will involve creating at much brand awareness of TrueGaming Labs as possible. We want the world to know, if you want a gaming platform, we are here for you! The more people know about us, the more investors and users will benefit.",
  },
  {
    title: "Reserve Funds",
    description:
      "Having a rainy-day fund is key to the success of any platform. Where it is to cover additional costs for a larger than expected development., help contribute toward maintenance of applications or and legal/licencing requirements, this will help propagate excellent financial management and fallback when it is needed most.",
  },
  {
    title: "Partnerships",
    description:
      "Partnerships with developers, be it freelancers or development teams, will accelerate the value and creativity of TrueGaming Labs products. We will be looking into partnerships of all kinds, including, game and other developments, blockchain developments and solutions as well as marketing partnerships to expand and reaches the many goals that we aim to achieve.",
  },
];

const FundAllocation = () => {
  const classes = useStyles();

  return (
    <div className={classes.fundAllocation}>
      <Grid container>
        <Grid item xs={12} className="chartContainer">
          <FundChart />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={7}>
            {data.map(({ title, description }) => (
              <Grid item xs={12} sm={6} md={4} key={title} className="card">
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography
                      className="title grey-text normal"
                      variant="subtitle2"
                      component="span"
                    >
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      className="description white-text"
                      variant="caption"
                      component="p"
                    >
                      {description}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Blurred coin */}
      <img className="coinBlurred" src={coinBlurred} alt="coin blurred" />
    </div>
  );
};

export default memo(FundAllocation);
