import { Grid, IconButton, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { useHistory } from "react-router";
import propTypes from "prop-types";
import { memo } from "react";
import _ from "lodash";

import UserCell from "components/DataTable/components/UserCell";
import { endpoints } from "routes";

const TitleComponent = (props) => {
  const { title, user } = props;

  const history = useHistory();

  /**
   * Back to users page
   */
  const backToUsersPage = () =>
    history.push(endpoints.dashboard.admin.users.index);

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <IconButton onClick={backToUsersPage} size="small">
          <ArrowBackIos fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="h6" className="bold">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <UserCell value={user} />
      </Grid>
    </Grid>
  );
};

TitleComponent.propTypes = {
  title: propTypes.string.isRequired,
  user: propTypes.string.isRequired,
};

export default memo(TitleComponent);
