import { useEffect } from "react";

const WheelAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/wheel-animation.js";

    window.addEventListener("load", () =>
      document.body.append(animationScript)
    );

    // unmount scripts elements
    return () => animationScript.remove();
  }, []);

  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128.1 109.6"
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".I7cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.I7cls-2,.I7cls-3{fill:#fff;}.I7cls-2{opacity:0.2;isolation:isolate;}.I7cls-4{fill:#fab893;}",
          }}
        />
      </defs>
      <g id="icon_game-wheel" data-name="icon game-wheel">
        <g id="Group_2119" data-name="Group 2119">
          <line
            id="Line_185"
            data-name="Line 185"
            className="I7cls-1"
            x1="71.75"
            y1="15.77"
            x2="71.75"
            y2="23.77"
          />
          <line
            id="Line_186"
            data-name="Line 186"
            className="I7cls-1"
            x1="88.35"
            y1="40.67"
            x2="96.35"
            y2="40.67"
          />
          <line
            id="Line_187"
            data-name="Line 187"
            className="I7cls-1"
            x1="83.45"
            y1="28.87"
            x2="89.05"
            y2="23.17"
          />
        </g>
        <path
          id="Path_6914"
          data-name="Path 6914"
          className="I7cls-2"
          d="M93.28,87.53a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.6.6,0,0,0-1.2,0h0a4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,0,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.6.6,0,0,0,1.2,0,4.4,4.4,0,0,1,4.4-4.5.65.65,0,0,0,.6-.6.53.53,0,0,0-.6-.6Z"
        />
        <path
          id="Path_6915"
          data-name="Path 6915"
          className="I7cls-2"
          d="M66.48,52.83a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,1,0-1.8,0h0a7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1,1,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3.9.9,0,0,0,1.8,0,7.17,7.17,0,0,1,7.1-7.3,1,1,0,0,0,.9-1.1,1.06,1.06,0,0,0-.9-.9Z"
        />
        <g id="Group_2120" data-name="Group 2120">
          <path
            id="Path_6922"
            data-name="Path 6922"
            className="I7cls-3"
            d="M78.25,42.47a3,3,0,0,1-3.3-1.1,22.41,22.41,0,0,0-5.3-4.9,3,3,0,0,1,3.2-5h0a27.16,27.16,0,0,1,6.8,6.3,2.93,2.93,0,0,1-.6,4.2c-.1.3-.5.4-.8.5Z"
          />
          <path
            id="Path_6920"
            data-name="Path 6920"
            className="I7cls-4"
            d="M83.15,58.07a3,3,0,0,1-3.8-2,3.4,3.4,0,0,1-.1-1,21.33,21.33,0,0,0-.9-7.1,3,3,0,0,1,2-3.8,3,3,0,0,1,3.7,1.9h0a29,29,0,0,1,1.2,9.3A2.91,2.91,0,0,1,83.15,58.07Z"
          />
          <path
            id="Path_6918"
            data-name="Path 6918"
            className="I7cls-4"
            d="M76.75,73.07a3,3,0,0,1-3.8-2,2.87,2.87,0,0,1,.7-2.9,20.5,20.5,0,0,0,3.9-6.1,3.06,3.06,0,0,1,3.9-1.6,3,3,0,0,1,1.6,3.9,26.66,26.66,0,0,1-5,7.8A2.38,2.38,0,0,1,76.75,73.07Z"
          />
          <path
            id="Path_6916"
            data-name="Path 6916"
            className="I7cls-4"
            d="M66.35,79.57h0a24.24,24.24,0,0,1-4.5,1,3,3,0,1,1-.8-6,13.71,13.71,0,0,0,3.5-.8h0a20.25,20.25,0,0,0,3.4-1.4,3,3,0,1,1,2.9,5.3.1.1,0,0,0-.1.1A18.54,18.54,0,0,1,66.35,79.57Z"
          />
          <path
            id="Path_6917"
            data-name="Path 6917"
            className="I7cls-4"
            d="M54.15,80.07a2.86,2.86,0,0,1-1.6.1,28.1,28.1,0,0,1-8.6-3.6,3,3,0,1,1,3.2-5h.1a20.23,20.23,0,0,0,6.6,2.8,3.13,3.13,0,0,1,2.3,3.6,2.84,2.84,0,0,1-2,2.1Z"
          />
          <path
            id="Path_6919"
            data-name="Path 6919"
            className="I7cls-4"
            d="M40.45,71.27a3,3,0,0,1-3.3-1.1,28.5,28.5,0,0,1-4.3-8.3,3,3,0,0,1,2-3.8h0a3,3,0,0,1,3.8,2,19.49,19.49,0,0,0,3.3,6.4,2.93,2.93,0,0,1-.6,4.2,1.33,1.33,0,0,1-.9.6Z"
          />
          <path
            id="Path_6921"
            data-name="Path 6921"
            className="I7cls-4"
            d="M35.65,55.77a3,3,0,0,1-3.8-2,3.4,3.4,0,0,1-.1-1,24.17,24.17,0,0,1,2.1-9.1,3,3,0,0,1,5.5,2.3,21,21,0,0,0-1.6,7A3,3,0,0,1,35.65,55.77Z"
          />
          <path
            id="Path_6923"
            data-name="Path 6923"
            className="I7cls-4"
            d="M42,40.77a3,3,0,0,1-3.8-2,2.87,2.87,0,0,1,.7-2.9,25.39,25.39,0,0,1,7.4-5.6,3,3,0,1,1,2.9,5.3h-.1a20.27,20.27,0,0,0-5.7,4.4A3.36,3.36,0,0,1,42,40.77Z"
          />
          <path
            id="Path_6924"
            data-name="Path 6924"
            className="I7cls-4"
            d="M64.55,33.77a3.81,3.81,0,0,1-1.5.1,21.81,21.81,0,0,0-7.2-.3,3.09,3.09,0,0,1-3.4-2.6,3,3,0,0,1,2.6-3.4,26.49,26.49,0,0,1,9.3.4,3.13,3.13,0,0,1,2.3,3.6,2.93,2.93,0,0,1-2.1,2.2Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default WheelAnimation;
