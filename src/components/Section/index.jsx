import { CardContent, Divider, Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import CustomCard from "./CustomCard";
// import useStyles from "./styles";

const Section = (props) => {
  const { title, className, header, footer, children } = props;
  // const classes = useStyles();

  return (
    <CustomCard className={className}>
      <CardContent>
        <Grid container direction="column" justify="space-between">
          <Grid item>
            {/* Title */}
            <Grid item>
              <Typography
                className="bold section-title"
                variant="body1"
                component="h2"
                gutterBottom
              >
                {title}
              </Typography>
            </Grid>

            {/* Header */}
            {header}

            {/* Content */}
            <Grid item xs={12}>
              {children}
            </Grid>
          </Grid>

          <Grid item>
            {footer && <Divider className="footer" />}
            <Grid item>{footer}</Grid>
          </Grid>
        </Grid>
      </CardContent>
    </CustomCard>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  className: propTypes.string,
  children: propTypes.any,
  header: propTypes.any,
  footer: propTypes.any,
};

export default memo(Section);
