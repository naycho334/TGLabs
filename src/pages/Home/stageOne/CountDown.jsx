import { Grid, Typography } from "@material-ui/core";
import Countdown from "react-countdown";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "../styles";

const CountDown = (props) => {
  const { time } = props;
  const classes = useStyles();

  return (
    <div className={classes.countdownContainer}>
      <Grid
        className={classes.countdown}
        alignItems="center"
        spacing={2}
        container
      >
        <Grid item className={classes.countEnds}>
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
                <div className={classes.timeBox}>
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
    </div>
  );
};

CountDown.propTypes = {
  time: propTypes.number.isRequired,
};

CountDown.defaultProps = {
  time: 0,
};

export default memo(CountDown);
