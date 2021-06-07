import { Box, Button, Grid, Typography } from "@material-ui/core";
import { memo } from "react";
import _ from "lodash";

import DateCell from "components/DataTable/components/DateCell";
import { LockIcon } from "components/Icons/Icons";
import useStyles from "./styles";

const InfoBar = (props) => {
  const classes = useStyles();

  const data = {
    date: "13.2.2021 05:30 PM",
    email: "ginek453@gmail.com",
    referralLnk: "www.tglab.io/ref/495850252",
    referrals: 320,
  };

  return (
    <Grid item xs={12}>
      <Box mb={3} className={classes.infoBar}>
        <Grid container spacing={6} justify="space-between">
          <Grid item>
            <Grid container spacing={6} alignItems="center">
              {[
                {
                  title: "Reg. date",
                  content: <DateCell value={_.get(data, "date", "")} />,
                },
                {
                  title: "Email",
                  content: (
                    <Typography variant="subtitle2" className="bold">
                      {_.get(data, "date", "")}
                    </Typography>
                  ),
                },
                {
                  title: "REFERRAL LINK",
                  content: (
                    <Typography
                      variant="subtitle2"
                      className="bold purple-text"
                    >
                      {_.get(data, "referralLnk", "")}
                    </Typography>
                  ),
                },
                {
                  title: "# REFERRALS",
                  content: (
                    <Typography
                      variant="subtitle2"
                      className="bold purple-text"
                    >
                      {_.get(data, "referrals", "")}
                    </Typography>
                  ),
                },
              ].map(({ title, content }, index) => (
                <Grid item key={index}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography
                        variant="overline"
                        className="dark-grey-text bold"
                      >
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item>{content}</Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Button
                  className="white-text bold purple-bg rounded-1"
                  variant="contained"
                  disableElevation
                >
                  Approve
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className="white-text bold orange-bg rounded-1"
                  startIcon={<LockIcon />}
                  variant="contained"
                  disableElevation
                >
                  Block
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default memo(InfoBar);
