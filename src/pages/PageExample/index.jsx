import { Container, Grid } from "@material-ui/core";
import { memo } from "react";

import useStyles from "./styles";

const Register = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item>Register Page</Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default memo(Register);
