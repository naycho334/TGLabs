import { Grid, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { memo } from "react";

import UserRelatedAnimation from "components/Animations/UserRelatedAnimation";
import useStyles from "./styles";

const Features = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.features}
      justify="space-between"
      spacing={2}
      container
    >
      <Grid className="animation" item xs={12} lg={6}>
        <UserRelatedAnimation />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ul className="list">
          <Typography
            className="white-text title bold"
            component="li"
            variant="h6"
          >
            Game Dev Suite Features
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>
              User Registrations/Logins and Profiles
              <br />
              (with 2FA Security and Email Notifications)
            </span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>User notifications</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>User Chats*</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>User Ranks*</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>Daily Tasks*</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>Mining and Profit sharing system</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>Create Competition and Giveaways</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>User Management systems</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>Crypto Currency Payment Gateway (powered by True Pay)</span>
          </Typography>
          <Typography className="white-text" component="li">
            <Add />
            <span>Access To TG Labs Casino Style Games*</span>
          </Typography>
          <Typography
            className="grey-text condition"
            variant="caption"
            component="li"
          >
            *based on subscription type
          </Typography>
        </ul>
      </Grid>
    </Grid>
  );
};

export default memo(Features);
