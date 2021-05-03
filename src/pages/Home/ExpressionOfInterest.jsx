import { Grid, Box, Typography, Button } from "@material-ui/core";

import LightBlueTypography from "../../components/Typography/LightBlueTypography";
import RoundedTextField from "../../components/TextFields/RoundedTextField";
import useStyles from "./styles";

const ExpressionOfInterest = () => {
  const classes = useStyles();

  return (
    <Box className={classes.expression} pt={5} mb={10}>
      <LightBlueTypography
        className="underline underlineCenter normal"
        align="center"
        variant="h6"
      >
        Expression of Interest
      </LightBlueTypography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className="white-text mb-3" align="center">
            <strong>
              Are you interested in setting up your own gaming platform?
            </strong>{" "}
            Fill in the form below and one of our team members will get back to
            you as soon as possible. You can also include you Skype or Telegram
            username if you would like to chat through there.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <RoundedTextField
                className="whiteText"
                placeholder="Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <RoundedTextField
                className="whiteText"
                placeholder="Name"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <div className="message">
            <RoundedTextField
              style={{ height: "100%" }}
              placeholder="Message..."
              className="whiteText"
              fullWidth
              multiline
              rows={3}
            />

            {/* Send */}
            <Button className="white-text">Send</Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExpressionOfInterest;
