import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";

import useStyles from "./styles";

const TargetProgress = (props) => {
  const [progressValue, setProgressValue] = useState(0);
  const [barWidth, setBarWidth] = useState(0);
  const progressValueRef = useRef();
  const progressBarRef = useRef();
  const classes = useStyles();

  const { maxValue, value, targets, className, noProgress } = props;
  const PERCENTAGE = (value / maxValue) * 100;
  const TRANSFORM = 100 - PERCENTAGE;
  const MIN_OFFSET = ((progressValue / barWidth) * 100 + 1) / 2;
  const VALUE_OFFSET = _.max([PERCENTAGE / 2, MIN_OFFSET]);

  /**
   * Change bar width
   */
  const changeBarWidth = useCallback(() => {
    const { current: value } = progressValueRef;
    const { current: bar } = progressBarRef;
    if (value) setProgressValue(value.offsetWidth);
    if (bar) setBarWidth(bar.offsetWidth);
  }, []);

  useEffect(() => {
    changeBarWidth();
    window.addEventListener("resize", changeBarWidth);
    return () => window.removeEventListener("resize", changeBarWidth);
  }, [changeBarWidth]);

  return (
    <div className={clsx(className, classes.progressBarContainer)}>
      <div className="progressBar">
        {!noProgress && (
          <div>
            <Box
              style={{ transform: `translateX(-${TRANSFORM}%)` }}
              className="progress"
              ref={progressBarRef}
            />
            <Typography
              style={{ marginLeft: `${VALUE_OFFSET}%` }}
              className="progressValue"
              ref={progressValueRef}
              variant="caption"
            >
              {Number(PERCENTAGE).toFixed(1)}% ({value.toLocaleString()} TGLAB)
            </Typography>
          </div>
        )}

        {/* Set targets */}
        {targets.map(({ label, value }) => (
          <span
            style={{ left: `${(value / maxValue) * 100}%` }}
            className="target"
            key={label}
          >
            <span>{value.toLocaleString()} TGLAB</span>
            <span>{label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

TargetProgress.propTypes = {
  className: propTypes.string.isRequired,
  maxValue: propTypes.number.isRequired,
  noProgress: propTypes.bool.isRequired,
  value: propTypes.number.isRequired,
  targets: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.number,
    })
  ),
};

TargetProgress.defaultProps = {
  noProgress: false,
  className: "",
  targets: [],
  maxValue: 0,
  value: 0,
};

export default TargetProgress;
