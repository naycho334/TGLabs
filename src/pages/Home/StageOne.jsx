import { Typography } from "@material-ui/core";
import { lazy, useState } from "react";
import moment from "moment";

import AcceptedCurrencies from "./stageOne/AcceptedCurrencies";
import Calculator from "./stageOne/Calculator";
import useStyles from "./styles";

import {
  ChainLinkColorIcon,
  BitcoinColorIcon,
  TetherColorIcon,
} from "components/Icons/Crypto";

import bluredLogo from "assets/pngs/Group 59.png";
import bluredChip from "assets/pngs/chip2.png";

const EndingCountdown = lazy(() => import("components/EndingCountdown"));
const TargetProgress = lazy(() => import("components/TargetProgress"));
const StagesTimeline = lazy(() => import("components/StagesTimeline"));

const stages = [
  { name: "Pre-ICO 1", price: 1.00, discount: 0, date_start: moment().subtract(90, 'days').toDate(), date_end: moment().subtract(30, 'days').toDate(), available_tokens: 200000 },
  { name: "Pre-ICO 2", price: 1.40, discount: 5, date_start: moment().subtract(30, 'days').toDate(), date_end: moment().add(30, 'days').toDate(), available_tokens: 200000 },
  { name: "ICO Stage 1", price: 1.80, discount: 0, date_start: moment().add(30, 'days').toDate(), date_end: moment().add(90, 'days').toDate(), available_tokens: 200000 },
  { name: "ICO Stage 2", price: 2.50, discount: 10, date_start: moment().add(90, 'days').toDate(), date_end: moment().add(150, 'days').toDate(), available_tokens: 200000 },
  { name: "ICO Stage 3", price: 3.45, discount: 0, date_start: moment().add(150, 'days').toDate(), date_end: moment().add(210, 'days').toDate(), available_tokens: 200000 },
  { name: "ICO Stage 4", price: 5.00, discount: 0, date_start: moment().add(210, 'days').toDate(), date_end: moment().add(270, 'days').toDate(), available_tokens: 200000 },
];

const currencies = [
  { label: "BTC", Icon: BitcoinColorIcon },
  { label: "LINK", Icon: ChainLinkColorIcon },
  { label: "USDT", Icon: TetherColorIcon },
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
      <EndingCountdown time={Date.now() + 10 ** 9} />

      {/* Progress bar */}
      <TargetProgress
        className="progress"
        maxValue={2000000}
        value={900000}
        targets={[
          { label: "Softcap", value: 800000 },
          { label: "Hardcap", value: 1600000 },
        ]}
      />

      {/* Stages timeline */}
      <StagesTimeline className="stagesTimeline" stages={stages} />

      {/* Calculator */}
      <Calculator
        changeCurrency={changeCurrency}
        changeDiscount={changeDiscount}
        changeAmount={changeAmount}
        currencyValue={currency}
        discountValue={discount}
        currencies={currencies}
        stages={stages}
        amount={amount}
      />

      {/* Accepted currencies */}
      <AcceptedCurrencies />
    </div>
  );
};

export default StageOne;
