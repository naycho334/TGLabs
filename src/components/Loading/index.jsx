import { CircularProgress } from "@material-ui/core";

import { ReactComponent as Logo } from "../../assets/svgs/logo_tglab-inverse.svg";

import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <Logo className="logo" />
        <div className={classes.loader}>
          <CircularProgress size={24} style={{ color: "#FFF" }} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
