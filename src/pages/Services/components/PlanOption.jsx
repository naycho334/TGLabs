import { Box, Hidden, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import { CheckedOutlineIcon, CloseIcon } from "components/Icons/Icons";

const PlanOption = (props) => {
  const { available, className, params, ...props_ } = props;

  return (
    <Box
      className={clsx(className, "plan-option", available && "available")}
      flexDirection="column"
      display="flex"
      {...props_}
    >
      <Hidden lgUp>
        <Typography className="grey-text" variant="overline">
          {params.title}
        </Typography>
      </Hidden>
      <Box alignItems="center" display="flex">
        <Box mr={1.5}>{available ? <CheckedOutlineIcon /> : <CloseIcon />}</Box>
        <div>
          <Typography className="title bold" component="span">
            {available ? "YES" : "NO"}
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

PlanOption.propTypes = {
  available: propTypes.bool.isRequired,
  className: propTypes.string,
};

PlanOption.defaultProps = {
  available: true,
};

export default memo(PlanOption);
