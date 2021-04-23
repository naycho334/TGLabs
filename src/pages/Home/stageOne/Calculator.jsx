import {
  ListItemIcon,
  Typography,
  InputBase,
  MenuItem,
  Grid,
  Link,
} from "@material-ui/core";
import { DragHandleRounded, ExpandMore } from "@material-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import propTypes from "prop-types";
import useStyles from "../styles";
import { memo } from "react";
import _ from "lodash";

import LightBlueGradientContainedButton from "../../../components/Buttons/LightBlueGradientContainedButton";
import NoFieldsetSelect from "../../../components/Selects/NoFieldsetSelect";
import { useInputStyles } from "../../../hooks/useInputStyles";
import { endpoints } from "../../../routes";

const Calculator = (props) => {
  const {
    changeCurrency,
    changeDiscount,
    changeAmount,
    currencyValue,
    discountValue,
    currencies,
    discounts,
    amount,
  } = props;
  const [container1, handleInputFocus1] = useInputStyles();
  const [container2, handleInputFocus2] = useInputStyles();
  const classes = useStyles();

  return (
    <div className={classes.calculatorContainer}>
      <Grid container alignItems="center" spacing={2} justify="center">
        <Grid item>
          <Typography variant="overline">Calculator</Typography>
        </Grid>

        {/* Amount and currency */}
        <Grid item>
          <div className={classes.outlinedInput} ref={container1}>
            <InputBase
              onFocus={handleInputFocus1.bind(null, "focus")}
              onBlur={handleInputFocus1.bind(null, "blur")}
              onChange={changeAmount}
              inputMode="decimal"
              className="amount"
              value={amount}
            />
            <NoFieldsetSelect
              onFocus={handleInputFocus1.bind(null, "focus")}
              onBlur={handleInputFocus1.bind(null, "blur")}
              MenuProps={{ MenuListProps: { dense: true } }}
              IconComponent={ExpandMore}
              onChange={changeCurrency}
              value={currencyValue}
              input={<InputBase />}
              className="select"
            >
              {currencies.map(({ label, Icon }, i) => (
                <MenuItem value={i} key={label}>
                  {Icon && (
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                  )}
                  <Typography variant="inherit">{label}</Typography>
                </MenuItem>
              ))}
            </NoFieldsetSelect>
          </div>
        </Grid>

        {/* Discount */}
        <Grid item>
          <div className={classes.outlinedInput} ref={container2}>
            <NoFieldsetSelect
              onFocus={handleInputFocus2.bind(null, "focus")}
              onBlur={handleInputFocus2.bind(null, "blur")}
              MenuProps={{ MenuListProps: { dense: true } }}
              IconComponent={ExpandMore}
              onChange={changeDiscount}
              input={<InputBase />}
              value={discountValue}
            >
              {discounts.map(({ label }, i) => (
                <MenuItem value={i} key={label}>
                  {label}
                </MenuItem>
              ))}
            </NoFieldsetSelect>
          </div>
        </Grid>
        <Grid item>
          <DragHandleRounded fontSize="large" className="equal" />
        </Grid>
        <Grid item>
          <div className="result">3.442 TGLAB</div>
        </Grid>

        {/* Register */}
        <Grid item>
          <Link
            to={endpoints.signup.index}
            component={RouterLink}
            underline="none"
          >
            <LightBlueGradientContainedButton className="reverse" size="large">
              Register & Buy Token
            </LightBlueGradientContainedButton>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

Calculator.propTypes = {
  changeCurrency: propTypes.func.isRequired,
  changeDiscount: propTypes.func.isRequired,
  changeAmount: propTypes.func.isRequired,
  currencyValue: propTypes.number.isRequired,
  discountValue: propTypes.number.isRequired,
  currencies: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      Icon: propTypes.object.isRequired,
    })
  ).isRequired,
  discounts: propTypes.arrayOf(
    propTypes.shape({
      discount: propTypes.number.isRequired,
      label: propTypes.string.isRequired,
    })
  ).isRequired,
};

Calculator.defaultProps = {};

export default memo(Calculator);