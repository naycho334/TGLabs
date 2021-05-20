import { Box, Grid, Hidden, Tab, Tabs, Typography } from "@material-ui/core";
import { useResizeDetector } from "react-resize-detector";
import { memo, useCallback, useState } from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import _ from "lodash";

import useStyles from "./styles";

let timer;

const Plans = (props) => {
  const { title, levels, components, conditions } = props;
  const [activePlan, setActivePlan] = useState(1);
  const [elements, setElements] = useState({});
  const [heights, setHeights] = useState([]);
  const classes = useStyles();

  const plans = _.get(components, [0, "props"], []);

  const onResize = useCallback(() => {
    const getElementsSize = Array(levels)
      .fill(1)
      .map((e, index) => _.get(elements, [index], null))
      .filter((el) => el)
      .map((elms) =>
        [...elms].map((el) => {
          el.style.minHeight = "";
          return el.offsetHeight;
        })
      );

    const maxHeights = components.map((e, index) =>
      _.chain(getElementsSize)
        .map((array) => array[index])
        .max()
        .value()
    );

    if (timer) clearTimeout(timer);

    setTimeout(() => setHeights(maxHeights), 500);
  }, [elements, levels, components]);

  const { ref: containerRef } = useResizeDetector({
    onResize: onResize,
  });

  const storeElements = useCallback(
    (index, el) => {
      if (!el || _.has(elements, index)) return;
      setElements((state) => ({ ...state, [index]: el.children }));
    },
    [elements]
  );

  /**
   * Change active plan
   */
  const changeActivePlan = (_, index) => setActivePlan(index);

  return (
    <div className={classes.plans}>
      <Grid justify="space-between" spacing={3} container ref={containerRef}>
        <Grid item xs={12}>
          <Typography className="white-text" variant="body2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {/* Titles */}
            <Hidden mdDown>
              <Grid item xs>
                <div className="titles">
                  <Grid container>
                    {components.map(
                      ({ title, alignTitle = "center" }, index, { length }) => (
                        <Grid
                          style={{ minHeight: heights[index] }}
                          key={index}
                          xs={12}
                          item
                        >
                          <Box
                            className={clsx(
                              "feature-title",
                              index + 1 === length && "last-one"
                            )}
                            alignItems={alignTitle}
                            py={1.25}
                          >
                            <Typography className="white-text" variant="body2">
                              {title}
                            </Typography>
                          </Box>
                        </Grid>
                      )
                    )}
                  </Grid>
                </div>
              </Grid>
            </Hidden>

            {/* Tabs */}
            <Hidden lgUp>
              <Grid item xs={12}>
                <Tabs
                  onChange={changeActivePlan}
                  indicatorColor="primary"
                  value={activePlan}
                  className="tabs"
                  centered
                >
                  {plans.map(({ name, className }) => (
                    <Tab className={className} label={name} key={name} />
                  ))}
                </Tabs>
              </Grid>
            </Hidden>

            {/* Tabs content */}
            {Array(levels)
              .fill(1)
              .map((e, index) => (
                <Grid
                  className={clsx(
                    "plan-tab",
                    index === activePlan && "active-tab"
                  )}
                  key={index}
                  xs={12}
                  item
                  lg
                >
                  <div ref={storeElements.bind(null, index)} className="plan">
                    {components.map(({ component: Component, props }, key) => {
                      const { className, ...props_ } = _.get(props, index, {});
                      return (
                        <Component
                          style={{ minHeight: heights[key] + "px" }}
                          className={clsx("plan-feature", className)}
                          params={components[key]}
                          {...props_}
                          key={key}
                        />
                      );
                    })}
                  </div>
                </Grid>
              ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            alignItems="flex-end"
            direction="column"
            className="rules"
            container
          >
            {conditions.map((text, index) => (
              <Grid item key={index}>
                <Typography className="grey-text" variant="caption">
                  {Array(index + 1)
                    .fill("*")
                    .join("")}
                  &nbsp;
                  {text}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Plans.propTypes = {
  conditions: propTypes.arrayOf(propTypes.string),
  title: propTypes.string.isRequired,
};

Plans.defaultProps = {
  conditions: [],
};

export default memo(Plans);
