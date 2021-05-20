import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

import {
  BasicAttentionCoinGrey,
  PancakeSwapCoinGrey,
  BinanceUsdCoinGrey,
  ShushiSwapCoinGrey,
  CryptocomCoinGrey,
  ChainlinkCoinGrey,
  EthereumCoinGrey,
  LitecoinCoinGrey,
  BitcoinCoinGrey,
  UniswapCoinGrey,
  BinanceCoinGrey,
  StellarCoinGrey,
  RippleCoinGrey,
  TetherCoinGrey,
  TronCoinGrey,
  DaiCoinGrey,
  MkrCoinGrey,
} from "components/Icons/CryptoGrey";

const currencies = [
  BitcoinCoinGrey,
  LitecoinCoinGrey,
  EthereumCoinGrey,
  BinanceCoinGrey,
  TronCoinGrey,
  RippleCoinGrey,
  StellarCoinGrey,
  TetherCoinGrey,
  BinanceUsdCoinGrey,
  DaiCoinGrey,
  BasicAttentionCoinGrey,
  ChainlinkCoinGrey,
  CryptocomCoinGrey,
  MkrCoinGrey,
  PancakeSwapCoinGrey,
  ShushiSwapCoinGrey,
  UniswapCoinGrey,
];

const HowItWorks = () => {
  const classes = useStyles();

  return (
    <div className={classes.howItWorks}>
      <Grid justify="space-between" spacing={3} container>
        <Grid item xs={12}>
          <Typography className="white-text bold title">
            How does it work?
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container className="text">
            <Grid item xs={12}>
              <Typography className="white-text" variant="subtitle2">
                Your clients can deposit and withdraw and of our major
                currencies that have a Peg on another blockchain.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="white-text bold" variant="subtitle2">
                For example:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className="white-text" variant="subtitle2">
                Jane has Bitcoin in her Bitcoin mainnet wallet. She can deposit
                it into her gaming platform with True Pay integrated. When
                wanting to withdraw, she can now withdraw her BTC to any other
                chain that has a BTC Pegged token, for example: BTCB on the
                Binance Smart Chain and Binance Chain, WBTC on the Ethereum
                Chain or BTC-Tron on the Tron Blockchain.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className="currenciesTitle">
          <Typography
            className="grey-text"
            variant="caption"
            align="center"
            component="p"
          >
            Currencies Currently Supported:
          </Typography>
        </Grid>

        {/* Currencies */}
        <Grid item xs={12} className="currencies">
          <Grid container spacing={2} justify="center" alignItems="center">
            {currencies.map((Icon, index) => (
              <Grid item key={index}>
                <Icon key={index} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default memo(HowItWorks);
