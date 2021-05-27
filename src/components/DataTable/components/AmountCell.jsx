import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const AmountCell = (props) => {
  const { value, unit, icon: Icon, className, usd, ...props_ } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.amount, className)} {...props_}>
      <Icon />
      <Box display="flex" flexDirection={usd ? "column" : "row"}>
        <div>
          <Typography variant="caption">{value}</Typography>
          <Typography variant="caption" className="unit">
            {String(unit).toUpperCase()}
          </Typography>
        </div>
        {usd && (
          <Typography className="usdValue grey-text" variant="caption">
            (${Number(usd).toLocaleString()})
          </Typography>
        )}
      </Box>
    </div>
  );
};

AmountCell.propTypes = {
  value: propTypes.string.isRequired,
  unit: propTypes.string.isRequired,
  icon: propTypes.any.isRequired,
  className: propTypes.string,
  usd: propTypes.number,
};

export default memo(AmountCell);
