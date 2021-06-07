import {
  CardContent,
  Typography,
  useTheme,
  Divider,
  Grid,
  Box,
} from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import CustomCard from "./CustomCard";
import useStyles from "./styles";

const Section = (props) => {
  const { title, headerProps, className, maxHeight, header, footer, children } =
    props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <CustomCard
      className={className}
      {...(_.isNumber(maxHeight) ? { style: { maxHeight } } : {})}
    >
      <CardContent>
        <Box
          justifyContent="space-between"
          flexDirection="column"
          display="flex"
        >
          <Box
            display="flex"
            flexDirection="column"
            flexWrap="nowrap"
            height="100%"
          >
            <Box flex="none">
              <Grid
                className={classes.header}
                alignItems="center"
                container
                {...headerProps}
              >
                {/* Title */}
                <Grid item>
                  <Typography
                    className="section-title bold"
                    component="span"
                    variant="body1"
                    gutterBottom
                  >
                    {title}
                  </Typography>
                </Grid>

                {/* Header */}
                {header}
              </Grid>
            </Box>
            {/* Content */}
            {/* <PerfectScrollbar>
              
            </PerfectScrollbar> */}
            <Box
              height={`calc(100% - ${theme.spacing(2)}px)`}
              overflow="hidden"
              maxHeight="100%"
            >
              {children}
            </Box>
          </Box>

          {footer && (
            <Box flex="none">
              <Divider className="footer" />
              {footer}
            </Box>
          )}
        </Box>
      </CardContent>
    </CustomCard>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  headerProps: propTypes.object,
  className: propTypes.string,
  maxHeight: propTypes.number,
  children: propTypes.any,
  header: propTypes.any,
  footer: propTypes.any,
};

export default memo(Section);
