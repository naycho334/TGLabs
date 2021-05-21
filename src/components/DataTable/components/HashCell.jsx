import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const HashCell = (props) => {
  const { value, className, ...props_ } = props;
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.hash, className)}
      variant="caption"
      {...props_}
    >
      {value}
    </Typography>
  );
};

HashCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(HashCell);
