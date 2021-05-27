import { Container, Grid, Typography } from "@material-ui/core";
import HelmetExport from "react-helmet";
import propTypes from "prop-types";
import { memo } from "react";

import useSmallScreen from "hooks/useSmallScreen";
import SidebarFooter from "./SidebarFooter";
import useStyles from "./styles";

const Page = (props) => {
  const { title, children, icon: Icon, header } = props;
  const isSmallScreen = useSmallScreen();
  const classes = useStyles();

  return (
    <>
      <HelmetExport>
        <title>{title} - TG Labs</title>
      </HelmetExport>
      <Container component="main" maxWidth={false} className={classes.content}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="space-between" spacing={2}>
              <Grid item>
                <Typography
                  className="bold page-title"
                  component="h1"
                  variant="h6"
                >
                  {title}
                </Typography>

                {Icon && <Icon className="fixedIcon" />}
              </Grid>
              <Grid item>{header}</Grid>
            </Grid>
          </Grid>
          {children}
          {isSmallScreen && (
            <Grid container justify="center">
              <Grid item>
                <SidebarFooter className="page" />
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

Page.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.any,
  header: propTypes.any,
  icon: propTypes.any,
};

Page.defaultProps = {
  title: "",
};

export default memo(Page);
