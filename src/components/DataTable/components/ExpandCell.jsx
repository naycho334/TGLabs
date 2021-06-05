import { Button, IconButton } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

import useStyles from "components/DataTable/styles";

const ExpandCell = (props) => {
  const { iconProps, open, withText, ...props_ } = props;
  const classes = useStyles();

  return withText ? (
    <Button
      className={clsx(classes.action, open && "open")}
      size="small"
      {...props_}
      endIcon={
        <ExpandMore fontSize="inherit" {..._.defaultTo(iconProps, {})} />
      }
    >
      {open ? "Collapse" : "Expand"}
    </Button>
  ) : (
    <IconButton
      className={clsx(classes.action, open && "open")}
      size="small"
      {...props_}
    >
      <ExpandMore fontSize="inherit" {..._.defaultTo(iconProps, {})} />
    </IconButton>
  );
};

ExpandCell.propTypes = {
  open: propTypes.bool.isRequired,
};

export default memo(ExpandCell);
