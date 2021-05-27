import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@material-ui/core";

const useSmallScreen = () => {
  const smallScreenWidth = useTheme().breakpoints.width("lg");
  const [isSmallScreen, setSmallScreen] = useState(null);

  /**
   * Handle window size change
   */
  const handleResizeWindow = useCallback(() => {
    setSmallScreen(window.innerWidth <= smallScreenWidth)
  }, [smallScreenWidth]);

  useEffect(() => {
    handleResizeWindow();
    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, [handleResizeWindow]);

  return isSmallScreen;
};

export default useSmallScreen;
