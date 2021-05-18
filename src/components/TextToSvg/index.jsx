import { memo, useCallback, useState } from "react";
import { Box } from "@material-ui/core";
import propTypes from "prop-types";

const TextToSvg = (props) => {
  const { text } = props;
  const [view, setView] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const handleTextSize = useCallback((text) => {
    if (!text) return;

    const { width: w, height: h, x, y } = text.getBBox();
    setView((state) => ({ ...state, w, h, x, y }));
  }, []);

  if (!text) return null;

  return (
    <Box
      viewBox={`${view.x} ${view.y} ${view.w} ${view.h}`}
      xmlns="http://www.w3.org/2000/svg"
      component="svg"
      height={30}
    >
      <text height={30} ref={handleTextSize}>
        {text}
      </text>
    </Box>
  );
};

TextToSvg.propTypes = {
  text: propTypes.string.isRequired,
};

export default memo(TextToSvg);
