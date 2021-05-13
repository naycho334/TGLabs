import { Grid, Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "./styles";

const EndingCountdown = (props) => {
  const { time } = props;

  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.countdownContainer}>
      <Grid className="countdown" alignItems="center" spacing={2} container>
        <Grid item className="countEnds" xs={12} md="auto">
          <Typography variant="h6">ENDS IN</Typography>
        </Grid>
        <Countdown
          date={time}
          renderer={(time) => {
            return [
              { time: time.days, label: "days" },
              { time: time.hours, label: "Hours" },
              { time: time.minutes, label: "Min" },
              { time: time.seconds, label: "Seconds" },
            ].map(({ time, label }, index, { length }) => (
              <Grid item key={label}>
                <div className="timeBox">
                  <Typography
                    className={clsx("value", index + 1 === length && "seconds")}
                    component="span"
                    align="center"
                    variant="h4"
                  >
                    {time}
                  </Typography>
                  <Typography
                    variant="overline"
                    className="label"
                    component="span"
                    align="center"
                  >
                    {label}
                  </Typography>
                </div>
              </Grid>
            ));
          }}
        />
      </Grid>
    </Grid>
  );
};

EndingCountdown.propTypes = {
  time: propTypes.number.isRequired,
};

EndingCountdown.defaultProps = {
  time: 0,
};

export default memo(EndingCountdown);
