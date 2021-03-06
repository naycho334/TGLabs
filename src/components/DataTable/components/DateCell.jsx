import { AccessTime } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const DateCell = (props) => {
  const { value, className, typographyProps, ...props_ } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.date, className)} {...props_}>
      <AccessTime />
      <Typography variant="caption" {...typographyProps}>
        {value}
      </Typography>
    </div>
  );
};

DateCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(DateCell);
