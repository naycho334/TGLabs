import { Box, IconButton, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
// import _ from "lodash";

import { EditIcon, CheckedIcon, TimeIcon } from "components/Icons/Icons";
import { formatPrice } from "lib/helpers";
import useStyles from "./styles";

const StagesTimeline = (props) => {
  const { isDashboard, isAdmin, stages, onClick, className } = props;
  const classes = useStyles();

  const getStatus = (stage) => {
    if (!stage) return "";

    const { date_start, date_end } = stage;
    return Date.now() >= date_start && Date.now() < date_end
      ? "current"
      : Date.now() >= date_start
      ? "completed"
      : "pending";
  };

  return (
    <div className={clsx(classes.discountsContainer, className)}>
      <div className="stages">
        <div className="line">
          {isAdmin &&
            stages.map(
              (stage, index, array) =>
                getStatus(array[index - 1]) === "current" && (
                  <Box
                    height={`calc(${(index / array.length) * 100}% + 30px)`}
                    width={`calc(${(index / array.length) * 100}% + 40px)`}
                    className="progress"
                    key={index}
                  />
                )
            )}
        </div>
        {stages.map((stage, index, array) => (
          <Box
            className={clsx("stage", getStatus(array[index - 1]))}
            left={`${(index / array.length) * 100}%`}
            top={`${(index / array.length) * 100}%`}
            key={stage.name}
          >
            <Typography
              className="stageContent"
              variant="caption"
              component="span"
            >
              <div>
                <span>{stage.name}</span>&nbsp;
                <span>
                  ( @ {formatPrice(Number(stage.price).toFixed(2), "usd", "sp")}
                  &nbsp;)
                </span>
              </div>
              {isAdmin && (
                <IconButton
                  onClick={onClick.bind(null, stage)}
                  className="editStage"
                  size="small"
                >
                  <EditIcon />
                </IconButton>
              )}
            </Typography>
            {isDashboard && (
              <>
                {getStatus(array[index - 1]) === "completed" && index > 0 && (
                  <CheckedIcon className="status checked" />
                )}
                {getStatus(array[index - 1]) === "pending" && index > 0 && (
                  <TimeIcon className="status pending" />
                )}
              </>
            )}
            <Typography variant="body2" component="span">
              Discount: {stage.discount}%
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
};

StagesTimeline.propTypes = {
  stages: propTypes.arrayOf(
    propTypes.shape({
      available_tokens: propTypes.number.isRequired,
      discount: propTypes.number.isRequired,
      date_start: propTypes.any.isRequired,
      date_end: propTypes.any.isRequired,
      price: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
  isDashboard: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func,
  isAdmin: propTypes.bool,
};

StagesTimeline.defaultProps = {
  isDashboard: false,
  isAdmin: false,
};

export default memo(StagesTimeline);
