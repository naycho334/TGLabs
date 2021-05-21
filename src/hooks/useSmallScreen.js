import { useCallback, useEffect } from "react";
import { useTheme } from "@material-ui/core";

import useForceUpdate from "hooks/useForceUpdate";

let currentScreen = false;

const useSmallScreen = () => {
  const smallScreenWidth = useTheme().breakpoints.width("md");
  const forceUpdate = useForceUpdate();

  /**
   * Handle window size change
   */
  const handleResizeWindow = useCallback(() => {
    const isSmallScreen = window.innerWidth <= smallScreenWidth;
    if (currentScreen !== isSmallScreen) {
      currentScreen = isSmallScreen;
      forceUpdate();
    }
  }, [forceUpdate, smallScreenWidth]);

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, [handleResizeWindow]);

  return window.innerWidth <= smallScreenWidth;
};

export default useSmallScreen;
