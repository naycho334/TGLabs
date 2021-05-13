import {
  Typography,
  IconButton,
  Divider,
  Paper,
  Grid,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";

import useStyles from "../styles";

const Notification = (props) => {
  const { title, content, type, deleteNotification } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={clsx(classes.notification, type)} elevation={0}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography className="bold" component="span">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton size="small" onClick={deleteNotification}>
              <Close />
            </IconButton>
          </Grid>
        </Grid>
        <Divider className="separator" />
        <div>
          <Typography variant="body2">{content}</Typography>
        </div>
      </Paper>
    </Grid>
  );
};

Notification.propTypes = {
  deleteNotification: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.any.isRequired,
  type: propTypes.string.isRequired,
};

export default memo(Notification);
