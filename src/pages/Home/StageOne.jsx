import AcceptedCurrencies from "./stageOne/AcceptedCurrencies";
import ProgressBar from "./stageOne/ProgressBar";
import Calculator from "./stageOne/Calculator";
import { Typography } from "@material-ui/core";
import CountDown from "./stageOne/CountDown";
import Discounts from "./stageOne/Discounts";
import useStyles from "./styles";
import { useState } from "react";

import { ReactComponent as ChainLinkIcon } from "../../assets/svgs/logo_chainlink-color.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/svgs/logo_bitcoin-color.svg";
import { ReactComponent as TetherIcon } from "../../assets/svgs/logo_tether-color.svg";

import bluredLogo from "../../assets/pngs/Group 59.png";
import bluredChip from "../../assets/pngs/chip2.png";

const discounts = [
  { label: "Pre-ICO 1 ( @ $1.00 )", discount: 0 },
  { label: "Pre-ICO 2 ( @ $1.40 )", discount: 5 },
  { label: "ICO Stage 1 ( @ $1.80 )", discount: 0 },
  { label: "ICO Stage 2 ( @ $2.50 )", discount: 10 },
  { label: "ICO Stage 3 ( @ $3.45 )", discount: 0 },
  { label: "ICO Stage 4 ( @ $5.00 )", discount: 0 },
];

const currencies = [
  { label: "BTC", Icon: BitcoinIcon },
  { label: "LINK", Icon: ChainLinkIcon },
  { label: "USDT", Icon: TetherIcon },
];

const StageOne = () => {
  const [currency, setCurrency] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [amount, setAmount] = useState(0);
  const classes = useStyles();

  /**
   * Change discount
   */
  const changeDiscount = ({ target: { value } }) => setDiscount(value);

  /**
   * Change amount
   */
  const changeAmount = ({ target: { value } }) => {
    if (/^[\d.]+$/.test(value) || value === "") setAmount(value);
  };

  /**
   * Change crypto
   */
  const changeCurrency = ({ target: { value } }) => setCurrency(value);

  return (
    <div className={classes.stageOne}>
      <img className="pinkBluredChip" src={bluredChip} alt="chip" />
      <img className="bluredLogo" src={bluredLogo} alt="logo" />

      {/* Title */}
      <Typography className="stageTitle" variant="h5" align="center">
        ICO Stage 1 (Public ICO)
      </Typography>

      {/* Countdown */}
      <CountDown time={Date.now() + 10 ** 9} />

      {/* Progress bar */}
      <ProgressBar
        maxValue={2000000}
        value={900000}
        targets={[
          { label: "Softcap", value: 800000 },
          { label: "Hardcap", value: 1600000 },
        ]}
      />

      {/* Discount */}
      <Discounts discounts={discounts} />

      {/* Calculator */}
      <Calculator
        changeCurrency={changeCurrency}
        changeDiscount={changeDiscount}
        changeAmount={changeAmount}
        currencyValue={currency}
        discountValue={discount}
        currencies={currencies}
        discounts={discounts}
        amount={amount}
      />

      {/* Accepted currencies */}
      <AcceptedCurrencies />
    </div>
  );
};

export default StageOne;
