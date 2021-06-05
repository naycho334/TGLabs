import { Divider, Grid, Typography } from "@material-ui/core";
import { getComponent } from "lib/helpers";
import propTypes from "prop-types";
import { memo } from "react";
import clsx from "clsx";
import _ from "lodash";

const LivePlatformPoolsCard = (props) => {
  const get = getComponent.bind(props);

  const currencies = _.chain(props)
    .get("data.expand", {})
    .values()
    .filter((item) => _.isObject(item))
    .value();

  const isOpen = _.get(props, "data.expand.open", false);

  return (
    <Grid item xs={12}>
      <Grid container className={clsx("extendCard", isOpen && "open")}>
        <Grid item xs={12}>
          <Grid container  alignItems="center">
            <Grid item xs>
              {get([0, 1, 2]).map(({ Component, props, title }, index) => (
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
            <Grid item>
              {get([4]).map(({ Component, props }, index) => (
                <Grid item xs={12} key={index}>
                  <Grid container justify="center">
                    <Grid item>
                      <Component {...props} />
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Grid>
        {get([3]).map(({ Component, props, title }, index) => (
          <Grid item xs={12} key={index}>
            <Grid container justify="center">
              <Grid item>
                <Component {...props} />
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12} className="separator">
          <Divider />
        </Grid>

        <Grid item xs={12} className="currencies">
          <Grid container spacing={2}>
            {currencies.map(({ component: Component, props }, index) => (
              <Grid item xs={6} key={index}>
                <Component {...props} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

LivePlatformPoolsCard.propTypes = {
  components: propTypes.arrayOf(
    propTypes.shape({
      component: propTypes.any.isRequired,
      tableCellProps: propTypes.object,
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

export default memo(LivePlatformPoolsCard);
