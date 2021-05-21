import { AccountCircleOutlined } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "components/DataTable/styles";

const UserCell = (props) => {
  const { value, unit, icon: Icon, className, ...props_ } = props;
  const classes = useStyles();

  return (
    <div className={clsx(classes.user, className)} {...props_}>
      <AccountCircleOutlined />
      <Typography variant="subtitle2">{value}</Typography>
    </div>
  );
};

UserCell.propTypes = {
  value: propTypes.string.isRequired,
  className: propTypes.string,
};

export default memo(UserCell);
