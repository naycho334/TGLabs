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

const CustomDialog = withStyles((theme) => ({
  root: {
    "& .dialogContent": {
      paddingBottom: theme.spacing(4),
      paddingTop: theme.spacing(3),
      
      [theme.breakpoints.up("lg")]:{
        margin: "auto",
        maxWidth: 375,
      }
    },
  },
  container: {
    display: "block",
  },
  paper: {
    maxHeight: "unset",
    height: "100%",
    width: "100%",
    margin: 0,
  },
}))(Dialog);

const NavigationDialog = (_props) => {
  const { title, children, onClose, ...props } = _props;
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
            <span>{title}</span>
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent className="dialogContent">{children}</DialogContent>
    </CustomDialog>
  );
};

export default memo(NavigationDialog);
