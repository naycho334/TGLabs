import { Box, Grid, Typography } from "@material-ui/core";

import {
  BasicAttentionCoinGrey,
  BittorrentCoinGrey,
  CryptocomCoinGrey,
  ChainlinkCoinGrey,
  EthereumCoinGrey,
  LitecoinCoinGrey,
  BitcoinCoinGrey,
  BinanceCoinGrey,
  StellarCoinGrey,
  RippleCoinGrey,
  TetherCoinGrey,
  TronCoinGrey,
} from "components/Icons/CryptoGrey";

const currencies = [
  BitcoinCoinGrey,
  LitecoinCoinGrey,
  TetherCoinGrey,
  ChainlinkCoinGrey,
  BinanceCoinGrey,
  BasicAttentionCoinGrey,
  RippleCoinGrey,
  CryptocomCoinGrey,
  StellarCoinGrey,
  BittorrentCoinGrey,
  TronCoinGrey,
  EthereumCoinGrey,
];

const AcceptedCurrencies = () => {
  return (
    <div className="acceptedCurrenceis">
      <Typography align="center" color="textSecondary" variant="body2">
        We Accepted
      </Typography>
      <Grid container spacing={2} justify="center">
        {currencies.map((Currency, key) => (
          <Grid item key={key}>
            <Box display="flex" justifyContent="center" minWidth={32}>
              <Currency />
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AcceptedCurrencies;
