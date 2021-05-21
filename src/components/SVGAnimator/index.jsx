import { memo, useCallback, useEffect, useState } from "react";
import propTypes from "prop-types";

const SVGAnimator = (props) => {
  const [scriptEl, setScriptEl] = useState(null);
  const { children, script } = props;

  const appendScript = useCallback(() => {
    return {
      append: function () {
        if (!scriptEl) {
          const animationScript = document.createElement("script");
          animationScript.src = script;
          setScriptEl(animationScript);
          document.body.append(animationScript);
        }
      },
      remove: function () {
        if (scriptEl) scriptEl.remove();
      },
    };
  }, [script, scriptEl]);

  useEffect(() => {
    const animationScript = appendScript();

    if (document.readyState === "complete") animationScript.append();
    else window.addEventListener("load", () => animationScript.append());

    return () => animationScript.remove();
  }, [appendScript]);

  return children;
};

SVGAnimator.propTypes = {
  script: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
};

export default memo(SVGAnimator);
