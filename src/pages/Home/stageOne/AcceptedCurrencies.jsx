import { Box, Grid, Typography } from "@material-ui/core";

import { ReactComponent as BasicAttentionCoin } from "../../../assets/svgs/crypto-grey/logo_basic_attention-gray.svg";
import { ReactComponent as BittorrentCoin } from "../../../assets/svgs/crypto-grey/logo_bittorrent-gray.svg";
import { ReactComponent as BinanceCoin } from "../../../assets/svgs/crypto-grey/logo_binance_coin-gray.svg";
import { ReactComponent as CryptocomCoin } from "../../../assets/svgs/crypto-grey/logo_crypto_com-gray.svg";
import { ReactComponent as ChainlinkCoin } from "../../../assets/svgs/crypto-grey/logo_chainlink-gray.svg";
import { ReactComponent as EthereumCoin } from "../../../assets/svgs/crypto-grey/logo_ethereum-gray.svg";
import { ReactComponent as LitecoinCoin } from "../../../assets/svgs/crypto-grey/logo_litecoin-gray.svg";
import { ReactComponent as BitcoinCoin } from "../../../assets/svgs/crypto-grey/logo_bitcoin-gray.svg";
import { ReactComponent as StellarCoin } from "../../../assets/svgs/crypto-grey/logo_stellar-gray.svg";
import { ReactComponent as RippleCoin } from "../../../assets/svgs/crypto-grey/logo_ripple-gray.svg";
import { ReactComponent as TetherCoin } from "../../../assets/svgs/crypto-grey/logo_tether-gray.svg";
import { ReactComponent as TronCoin } from "../../../assets/svgs/crypto-grey/logo_tron-gray.svg";

const currencies = [
  BitcoinCoin,
  LitecoinCoin,
  TetherCoin,
  ChainlinkCoin,
  BinanceCoin,
  BasicAttentionCoin,
  RippleCoin,
  CryptocomCoin,
  StellarCoin,
  BittorrentCoin,
  TronCoin,
  EthereumCoin,
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
