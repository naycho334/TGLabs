import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

const TextCell = (props) => {
  const { value, className, ...props_ } = props;

  return (
    <Typography className={clsx(className)} variant="subtitle2" {...props_}>
      {value}
    </Typography>
  );
};

TextCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(TextCell);
