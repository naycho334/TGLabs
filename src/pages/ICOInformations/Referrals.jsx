import { Link as RouterLink } from "react-router-dom";
import { Link, Typography } from "@material-ui/core";
import { memo } from "react";

import LightBlueGradientButton from "components/Buttons/LightBlueGradientButton";
import LightBlueTypography from "components/Typography/LightBlueTypography";
import { endpoints } from "routes";
import useStyles from "./styles";

import EarnIllustrationBlurred from "assets/pngs/earn_illustration.png";

const Referrals = () => {
  const classes = useStyles();

  return (
    <div className={classes.referrals}>
      {/* Title */}
      <LightBlueTypography
        className="underline underlineCenter normal"
        component="h2"
        align="center"
        variant="h6"
      >
        Referrals
      </LightBlueTypography>

      {/* Description */}
      <Typography
        className="description white-text normal"
        variant="subtitle2"
        align="center"
      >
        <p>
          Register to get your own unique referral code and share it with your
          friends to sign up with.
        </p>
        <p>
          When they make an ICO buy, you will earn a{" "}
          <LightBlueTypography component="span" variant="subtitle1">
            bonus 2%
          </LightBlueTypography>{" "}
          of what their TGLAB amount was. Start sharing to grow your holdings.
        </p>
      </Typography>

      {/* Register button */}
      <Link component={RouterLink} underline="none" to={endpoints.signup.index}>
        <LightBlueGradientButton
          className="registerButton reverse"
          variant="contained"
          disableElevation
        >
          Register & Earn 2% bonus
        </LightBlueGradientButton>
      </Link>

      {/* Blurred image */}
      <img src={EarnIllustrationBlurred} alt="blurred earn illustration" />
    </div>
  );
};

export default memo(Referrals);
