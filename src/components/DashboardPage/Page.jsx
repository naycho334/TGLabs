import { Container, Grid, Typography } from "@material-ui/core";
import HelmetExport from "react-helmet";
import propTypes from "prop-types";
import { memo } from "react";

import useStyles from "./styles";

const Page = (props) => {
  const { title, children } = props;
  const classes = useStyles();

  return (
    <>
      <HelmetExport>
        <title>{title} - TG Labs</title>
      </HelmetExport>
      <Container component="main" maxWidth={false} className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="bold pageTitle" component="h1" variant="h6">
              {title}
            </Typography>
          </Grid>
          {children}
        </Grid>
      </Container>
    </>
  );
};

Page.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any,
};

Page.defaultProps = {
  title: "",
};

export default memo(Page);
