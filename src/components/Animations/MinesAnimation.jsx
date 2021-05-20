import { useEffect } from "react";

const MinesAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/mines-animation.js";

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
      <g id="icon_game-mines" data-name="icon game-mines">
        <path
          id="Path_6933"
          data-name="Path 6933"
          d="M23.7,49.9a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.6.6,0,1,0-1.2,0h0a4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,1,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.6.6,0,0,0,1.2,0,4.4,4.4,0,0,1,4.4-4.5.65.65,0,0,0,.6-.6q0-.45-.6-.6Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <path
          id="Path_6934"
          data-name="Path 6934"
          d="M114,76a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,1,0-1.8,0h0a7.34,7.34,0,0,1-2.1,5.2A6.72,6.72,0,0,1,98,76a1.09,1.09,0,0,0-.9,1.1,1.06,1.06,0,0,0,.9.9,7.23,7.23,0,0,1,7.1,7.3.9.9,0,1,0,1.8,0A7.17,7.17,0,0,1,114,78a1.09,1.09,0,0,0,.9-1.1,1.06,1.06,0,0,0-.9-.9Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <g id="Group_2129" data-name="Group 2129">
          <circle
            id="Ellipse_243"
            data-name="Ellipse 243"
            cx="57.42"
            cy="64.05"
            r="24.9"
            transform="translate(-0.65 0.59) rotate(-0.58)"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <path
            id="Path_6935"
            data-name="Path 6935"
            d="M70.32,42l3.1-3.1a1.27,1.27,0,0,1,1.8,0h0l7.6,7.6a1.27,1.27,0,0,1,0,1.8h0l-3.1,3.1"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_191"
            data-name="Line 191"
            x1="78.82"
            y1="42.45"
            x2="84.92"
            y2="36.35"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
        </g>
        <path
          id="Path_6936"
          data-name="Path 6936"
          d="M77.9,30.8l1.5-10.2,5.7,7.2L91.8,21,90.5,31.8h11.9l-7.1,6,4.9,5.4-11-1.5"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <g id="Group_2130" data-name="Group 2130">
          <line
            id="Line_192"
            data-name="Line 192"
            x1="50.62"
            y1="56.95"
            x2="65.82"
            y2="72.25"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_193"
            data-name="Line 193"
            x1="50.62"
            y1="72.25"
            x2="65.82"
            y2="56.95"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
        </g>
      </g>
    </svg>
  );
};

export default MinesAnimation;
