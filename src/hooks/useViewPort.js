import { useTheme } from '@material-ui/core';
import React from 'react';

const useViewPort = (breakpoints = {}) => {
  const [currentBreakpoint, setBreakpoint] = React.useState("md");
  const { breakpoints: breakpoints_ } = useTheme();
  const values = Object.values(breakpoints_.values);
  const breakpointsKeys = {
    ...breakpoints_.keys
      .map((key) => ({ [key]: 1 }))
      .reduce((p, n) => ({ ...p, ...n }), {}),
    ...breakpoints
  };
  const scale = breakpointsKeys[currentBreakpoint] || 1;

  const breakpointsRange = values
    .map((val, i) => ({ [breakpoints_.keys[i]]: [val, values[i + 1] || Infinity] }))
    .reduce((p, n) => ({ ...p, ...n }), {});

  const onResizePage = React.useCallback(() => {
    const { width } = window.screen;
    Object.keys(breakpointsRange).forEach(key => {
      const [start, end] = breakpointsRange[key];
      if (width > start && width < end && key !== currentBreakpoint) {
        setBreakpoint(key);
      }
    });
  }, [currentBreakpoint, breakpointsRange]);

  React.useEffect(() => {
    onResizePage();
    window.addEventListener("resize", onResizePage);
    return () => window.removeEventListener("resize", onResizePage);
  }, [onResizePage]);

  return (
    <meta content={`width=device-width, initial-scale=${scale}`} name="viewport" />
  )
}

export default useViewPort;