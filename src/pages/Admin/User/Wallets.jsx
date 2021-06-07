import { Box, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { memo } from "react";
import _ from "lodash";

import DefaultTextField from "components/TextFields/DefaultTextField";
import { EthereumCoinGrey } from "components/Icons/CryptoGrey";
import { BitcoinCoinGrey } from "components/Icons/CryptoGrey";
import Section from "components/Section";
import useStyles from "./styles";

const Wallets = () => {
  const { test } = useSelector((state) => state.adminUserReducer);
  const classes = useStyles();
  const data = {
    ethereum_address: "23jkiuz467nkjlh894jioziu30849",
    bitcoin_address: "39u95zskbRB3r8A3nwXfhAHdf",
  };

  return (
    <Grid item xs={12} lg={5} className={classes.wallets}>
      <Section title="Wallets" maxHeight={245}>
        <Grid item>
          <Box mt={2}>
            <Grid container spacing={3}>
              {[
                {
                  title: "Bitcoin Address",
                  id: "bitcoin_address",
                  Icon: BitcoinCoinGrey,
                },
                {
                  title: "Ethereum Address",
                  id: "ethereum_address",
                  Icon: EthereumCoinGrey,
                },
              ].map(({ title, Icon, id }, index) => (
                <Grid item xs={12}>
                  <DefaultTextField
                    InputLabelProps={{ shrink: true }}
                    value={_.get(data, id, "_")}
                    label={
                      <Grid
                        alignItems="center"
                        className="label"
                        container
                        spacing={1}
                      >
                        <Grid item>
                          <Icon className="labelIcon" />
                        </Grid>
                        <Grid item>
                          <Typography className="bold" variant="overline">
                            {title}
                          </Typography>
                        </Grid>
                      </Grid>
                    }
                    id={id}
                    className="outlined"
                    autoComplete="off"
                    size="small"
                    fullWidth
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Section>
    </Grid>
  );
};

export default memo(Wallets);
