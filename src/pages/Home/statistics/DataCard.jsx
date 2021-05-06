import {
  AccessTime,
  AccountCircleOutlined,
  MoreHorizOutlined,
} from "@material-ui/icons";
import { Typography, Grid, Divider, Box, Button } from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Fragment, memo } from "react";
import clsx from "clsx";

import { ReactComponent as BitcoinIcon } from "../../../assets/svgs/crypto-color/logo_bitcoin-color.svg";
import { ReactComponent as Logo } from "../../../assets/svgs/logo_symbol_tglab-inverse.svg";

const DataCard = () => {
  return (
    <>
      <PerfectScrollbar style={{ maxHeight: 590 }}>
        <Box padding={1}>
          <Grid container spacing={2}>
            {Array(3)
              .fill(1)
              .map((e, i, { length }) => {
                const type =
                  i % 3 === 0
                    ? "pending"
                    : i % 3 === 1
                    ? "completed"
                    : "unconfirmed";

                return (
                  <Fragment key={i}>
                    <Grid item xs={12}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Box mb={1.5}>
                            <Grid
                              justify="space-between"
                              alignItems="center"
                              container
                            >
                              <Grid item>
                                <div className="date">
                                  <AccessTime />
                                  <Typography variant="caption">
                                    14.2.2021 07:40 PM
                                  </Typography>
                                </div>
                              </Grid>
                              <Grid item>
                                <Typography
                                  className={clsx("status", type)}
                                  variant="caption"
                                >
                                  {type}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        {[
                          {
                            label: "User",
                            component: (
                              <div className="user">
                                <AccountCircleOutlined />
                                <Typography variant="subtitle2">
                                  fernd...@gmail.com
                                </Typography>
                              </div>
                            ),
                          },
                          {
                            label: "Amount",
                            component: (
                              <div className="amount">
                                <BitcoinIcon />
                                <Typography variant="caption">
                                  0,00034056
                                </Typography>
                                <Typography variant="caption" className="unit">
                                  BTC
                                </Typography>
                              </div>
                            ),
                          },
                          {
                            label: "TGLAB",
                            component: (
                              <div className="tglab">
                                <Typography variant="caption">
                                  0.456733
                                </Typography>
                                <Logo />
                              </div>
                            ),
                          },
                          {
                            label: "Hash",
                            component: (
                              <Typography variant="caption" className="hash">
                                aa11c31e7a696eaeec254036826411499...
                              </Typography>
                            ),
                          },
                        ].map(({ label, component }, i) => (
                          <Grid item xs={12} key={i}>
                            <Grid container alignItems="center">
                              <Grid item xs={3}>
                                <Typography
                                  variant="overline"
                                  className="overline"
                                >
                                  {label}
                                </Typography>
                              </Grid>
                              <Grid item xs={9}>
                                {component}
                              </Grid>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    {length > i + 1 && (
                      <Grid item xs={12}>
                        <Divider />
                      </Grid>
                    )}
                  </Fragment>
                );
              })}
          </Grid>
        </Box>
      </PerfectScrollbar>
      <Button className="loadMore" size="small">
        <span>Load More</span>
        <MoreHorizOutlined />
      </Button>
    </>
  );
};

export default memo(DataCard);
