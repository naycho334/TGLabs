import { Grid, Typography } from "@material-ui/core";
import propTypes from "prop-types";
import { memo } from "react";

const CompletionProgress = (props) => {
  const { progress } = props;

  return (
    <Grid className="completionProgress" item xs={12}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Typography className="purple-text" variant="caption">
            {progress}% Complete
          </Typography>
        </Grid>
        <Grid item xs>
          <div className="progressBar">
            <div style={{ width: `${progress}%` }} />
          </div>
        </Grid>
        <Grid item>
          <Typography className="grey-text" variant="caption">
            {100 - progress}% Remaining
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

CompletionProgress.propTypes = {
  progress: propTypes.number.isRequired,
};

CompletionProgress.defaultProps = {
  progress: 0,
};

export default memo(CompletionProgress);
