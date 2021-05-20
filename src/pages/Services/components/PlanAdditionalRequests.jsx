import { Box, Hidden, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import { LXRIcon } from "components/Icons/Icons";

const PlanAdditionalRequests = (props) => {
  const { price, requests, className, params, ...props_ } = props;

  return (
    <Box
      flexDirection="column"
      className={className}
      display="flex"
      {...props_}
    >
      <Hidden lgUp>
        <Box>
          <Typography className="grey-text" variant="overline">
            {params.title}
          </Typography>
        </Box>
      </Hidden>
      <Box
        className="plan-additional-requests"
        alignItems="center"
        display="flex"
      >
        <Box mr={1}>
          <LXRIcon />
        </Box>
        <Box mr={1}>
          <Typography>
            <strong>{Number(price).toFixed(2)}</strong>
          </Typography>
        </Box>
        <Box mr={1}>
          <Typography className="bold grey-text" variant="subtitle2">
            LXR
          </Typography>
        </Box>
        {_.gt(requests, 0) && (
          <>
            <Box mr={1}>
              <Typography className="bold">/</Typography>
            </Box>
            <Box>
              <Typography className="bold">{requests}K requests</Typography>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

PlanAdditionalRequests.propTypes = {
  price: propTypes.number.isRequired,
  className: propTypes.string,
  requests: propTypes.any,
};

export default memo(PlanAdditionalRequests);
