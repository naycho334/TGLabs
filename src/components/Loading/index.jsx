import { CircularProgress, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Typography variant="h6" component="span">
          LOADING...
        </Typography>
        <div className={classes.loader}>
          <CircularProgress size={24} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
