import { Box, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const AmountCell = (props) => {
  const {
    icon: Icon,
    className,
    iconRight,
    value,
    unit,
    usd,
    ...props_
  } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.amount, className)} {...props_}>
      {!iconRight && <Icon />}
      <Box display="flex" flexDirection={usd ? "column" : "row"}>
        <div>
          <Typography className="amountValue" variant="caption">
            {value}
          </Typography>
          {unit && (
            <Typography variant="caption" className="unit">
              {String(unit).toUpperCase()}
            </Typography>
          )}
        </div>
        {usd && (
          <Typography className="usdValue grey-text" variant="caption">
            (${Number(usd).toLocaleString()})
          </Typography>
        )}
      </Box>
      {iconRight && <Icon />}
    </div>
  );
};

AmountCell.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired,
  icon: propTypes.any.isRequired,
  className: propTypes.string,
  unit: propTypes.string,
  usd: propTypes.number,
};

export default memo(AmountCell);
