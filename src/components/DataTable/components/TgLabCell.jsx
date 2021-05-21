import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import { TGCryptoColorIcon } from "components/Icons/Crypto";
import useStyles from "components/DataTable/styles";

const TgLabCell = (props) => {
  const { value, className, ...props_ } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.date, className)} {...props_}>
      <div className={classes.tglab}>
        <Typography variant="caption">{value}</Typography>
        <TGCryptoColorIcon />
      </div>
    </div>
  );
};

TgLabCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(TgLabCell);
