import { Container, Grid } from "@material-ui/core";
import useStyles from "./styles";

const ICOInfo = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item>ICOInfo Page</Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default ICOInfo;
