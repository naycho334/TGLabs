import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const AmountCell = (props) => {
  const { value, unit, icon: Icon, className, ...props_ } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.amount, className)} {...props_}>
      <Icon />
      <Typography variant="caption">{value}</Typography>
      <Typography variant="caption" className="unit">
        {String(unit).toUpperCase()}
      </Typography>
    </div>
  );
};

AmountCell.propTypes = {
  value: propTypes.string.isRequired,
  unit: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
  className: propTypes.string,
};

export default memo(AmountCell);
