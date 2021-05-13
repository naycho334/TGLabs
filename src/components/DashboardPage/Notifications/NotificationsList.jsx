import {
  Typography,
  Popover,
  Divider,
  Button,
  Paper,
  Grid,
} from "@material-ui/core";
import PerfectScrollbar from "react-perfect-scrollbar";
import propTypes from "prop-types";
import { memo } from "react";

import useStyles from "../styles";

const NotificationsList = (props) => {
  const classes = useStyles();

  const { id, open, count, onClose, anchorEl, clearAll, children } = props;

  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ paper: classes.notifications }}
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      id={id}
    >
      <Paper>
        <Grid container direction="column">
          <Grid item xs={12} className="header">
            <Typography className="bold">
              <span>Notifications</span>
              <span className="badge">{count}</span>
            </Typography>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <PerfectScrollbar className="content">
              <Grid container spacing={2}>
                {children}
              </Grid>
            </PerfectScrollbar>
          </Grid>
          <Grid item xs={12} className="footer">
            <Button onClick={clearAll} fullWidth>
              Clear All
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Popover>
  );
};

Notification.propTypes = {
  clearAll: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired,
  anchorEl: propTypes.any.isRequired,
  count: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
  open: propTypes.bool.isRequired,
};

export default memo(NotificationsList);
