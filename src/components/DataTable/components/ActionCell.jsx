import { IconButton } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import useStyles from "components/DataTable/styles";

const ActionCell = (props) => {
  const { icon: Icon, iconProps, ...props_ } = props;
  const classes = useStyles();

  return (
    <IconButton size="small" className={classes.action} {...props_}>
      <Icon fontSize="inherit" {..._.defaultTo(iconProps, {})} />
    </IconButton>
  );
};

ActionCell.propTypes = {
  icon: propTypes.any.isRequired,
};

export default memo(ActionCell);
