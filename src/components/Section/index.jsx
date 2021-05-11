import { CardContent, Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

import CustomCard from "./CustomCard";
import useStyles from "./styles";

const Section = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <CustomCard>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography
              gutterBottom
              variant="body1"
              className="bold"
              component="h2"
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </CardContent>
    </CustomCard>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any,
};

export default memo(Section);
