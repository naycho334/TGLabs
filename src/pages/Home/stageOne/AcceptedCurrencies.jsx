import { Typography } from "@material-ui/core";

import useStyles from "../styles";

import { ReactComponent as CryptoCurrencies } from "../../../assets/svgs/crypto_currencies.svg";

const AcceptedCurrencies = () => {
  const classes = useStyles();

  return (
    <div className={classes.acceptedCurrenceis}>
      <Typography align="center" color="textSecondary" variant="body2">
        We Accepted
      </Typography>
      <CryptoCurrencies />
    </div>
  );
};

export default AcceptedCurrencies;
