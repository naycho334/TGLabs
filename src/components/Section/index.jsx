import { CardContent, Typography, Divider, Grid, Box } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import CustomCard from "./CustomCard";
import useStyles from "./styles";

const Section = (props) => {
  const { title, headerProps, className, header, footer, children } = props;
  const classes = useStyles();

  return (
    <CustomCard className={className}>
      <CardContent>
        <Box
          justifyContent="space-between"
          flexDirection="column"
          display="flex"
        >
          <Box display="flex" flexDirection="column" flexWrap="nowrap" flex="1">
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
            <Box flex="1">{children}</Box>
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
  children: propTypes.any,
  header: propTypes.any,
  footer: propTypes.any,
};

export default memo(Section);
