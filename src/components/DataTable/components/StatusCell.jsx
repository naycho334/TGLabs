import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const StatusCell = (props) => {
  const { value, className, ...props_ } = props;
  const classes = useStyles();

  return (
    <Typography
      className={clsx(classes.status, className)}
      variant="caption"
      {...props_}
    >
      {value}
    </Typography>
  );
};

StatusCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(StatusCell);
