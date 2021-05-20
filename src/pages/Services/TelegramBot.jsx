import { Grid, Typography } from "@material-ui/core";
import { memo } from "react";

import TelegramBotAnimation from "components/Animations/TelegramBotAnimation";
import useStyles from "./styles";

const TelegramBot = () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.telegramBot}
      alignItems="center"
      spacing={2}
      container
    >
      <Grid className="animation" item xs={12} lg={6}>
        <TelegramBotAnimation />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className="white-text bold">
              Telegram Bot Gaming Creation
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className="white-text">
              Give a wider range of accessibility to your users by integrating a
              custom-built Telegram bot that allows users to login, register,
              deposit, withdraw and play your games* through Telegram!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(TelegramBot);
