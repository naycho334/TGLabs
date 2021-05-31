import { Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

import useStyles from "components/DataTable/styles";

const StatusCell = (props) => {
  const { value, className, ...props_ } = props;
  const classes = useStyles();

  const statusClassName = (() => {
    const disabled = { class: "disabled", status: ["blocked", "pending"] };
    const info = { class: "info", status: ["approved", "complete"] };
    const danger = { class: "danger", status: ["unconfirmed"] };

    return _.chain([disabled, info, danger])
      .filter((item) => item.status.includes(String(value).toLowerCase()))
      .get([0, "class"], "disabled")
      .value();
  })();

  return (
    <Typography
      className={clsx(classes.status, statusClassName, className)}
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
