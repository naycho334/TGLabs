import {
  DialogContent,
  DialogTitle,
  IconButton,
  withStyles,
  Divider,
  Dialog,
  Grid,
} from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { memo } from "react";

import useSmallScreen from "hooks/useSmallScreen";

const NavigationDialog = (_props) => {
  const { title, children, onClose, header, ...props } = _props;
  const isSmallScreen = useSmallScreen();

  return (
    <CustomDialog onClose={onClose} {...props}>
      <DialogTitle classes={{ root: "title" }}>
        <Grid container spacing={2} alignItems="center">
          {isSmallScreen && (
            <Grid item xs="auto">
              <IconButton onClick={onClose}>
                <ArrowBackIos />
              </IconButton>
            </Grid>
          )}
          <Grid item xs>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <span className="title">{title}</span>
              </Grid>
              {header}
            </Grid>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent className="dialogContent">{children}</DialogContent>
    </CustomDialog>
  );
};

const CustomDialog = withStyles((theme) => ({
  root: {
    "& .title": {
      fontWeight: 'bold',
      color: '#8F96A5',
    },
    "& .dialogContent": {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(3),

      [theme.breakpoints.down("md")]: {
      },
      
      [theme.breakpoints.up("lg")]: {
        margin: "auto",
        maxWidth: 375,
      },
    },
  },
  container: {
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  paper: {
    [theme.breakpoints.down("md")]: {
      maxHeight: "unset",
      maxWidth: "unset",
      borderRadius: 0,
      height: "100%",
      width: "100%",
      margin: 0,
    },
  },
}))(Dialog);

export default memo(NavigationDialog);
