import { Box, Grid, Typography } from "@material-ui/core";
import { getComponent } from "lib/helpers";
import propTypes from "prop-types";
import { memo } from "react";

const AllUsersCard = (props) => {
  const get = getComponent.bind(props);

  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={12}>
          <Box mb={1.5}>
            <Grid justify="space-between" alignItems="center" container>
              {get([0]).map(({ Component, props, title }, index) => (
                <Grid item key={index}>
                  <Component {...props} />
                </Grid>
              ))}
              <Grid item>
                <Grid container spacing={2}>
                  {get([6, 5]).map(({ Component, props, title }, index) => (
                    <Grid item key={index}>
                      <Component {...props} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs>
            <Grid container>
              {get([1, 2, 3, 4]).map(({ Component, props, title }, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container alignItems="center">
                    <Grid item xs={3}>
                      <Typography variant="overline" className="overline">
                        {title}
                      </Typography>
                    </Grid>
                    <Grid item xs={9}>
                      <Component {...props} />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item>
            {get([7]).map(({ Component, props, title }, index) => (
              <Grid item xs={12} key={index}>
                <Component {...props} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

AllUsersCard.propTypes = {
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes,
      props: propTypes.object,
    })
  ).isRequired,
  tableHead: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string.isRequired,
      props: propTypes.object,
    })
  ).isRequired,
  data: propTypes.object.isRequired,
};

export default memo(AllUsersCard);
