import { Box, Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import { endpoints } from "routes";
import useStyles from "./styles";

const HeaderSection = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Grid container alignItems="center" direction="column" spacing={1}>
        <Grid item>
          <Typography
            className={clsx("bold", classes.title)}
            component="h1"
            variant="h5"
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Breadcrumbs className={classes.breadcrumbs}>
            <Link
              to={endpoints.home.index}
              component={RouterLink}
              className="title"
              underline="none"
            >
              Home
            </Link>
            <Typography className="title">{title}</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={12}>
          <Box pt={5} pb={6}>
            {children}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

HeaderSection.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any,
};

HeaderSection.defaultProps = {
  title: "",
};

export default memo(HeaderSection);
