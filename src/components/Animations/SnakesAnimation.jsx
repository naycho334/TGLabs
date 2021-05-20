import { useEffect } from "react";

const SnakesAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/snakes-animation.js";

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
      <g id="icon_game-snakes-ladders" data-name="icon game-snakes-ladders">
        <g id="Group_2133" data-name="Group 2133">
          <path
            id="Path_6937"
            data-name="Path 6937"
            d="M87.67,36.77a5.85,5.85,0,0,0-5.9,5.9V45a6,6,0,0,0,2.9,5.1v2.4A12.08,12.08,0,0,1,77,63v6.3a18.12,18.12,0,0,0,13.7-16.5v-2.7a6,6,0,0,0,2.9-5.1v-2.3A5.85,5.85,0,0,0,87.67,36.77Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
          <path
            id="Path_6938"
            data-name="Path 6938"
            d="M63.07,67.07a17.7,17.7,0,0,0-9.4,11.6L51.77,86a3,3,0,1,0,5.8,1.6v-.1l1.9-7.3a11.72,11.72,0,0,1,3.6-5.9v-7.2Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
        </g>
        <g id="Group_2134" data-name="Group 2134">
          <line
            id="Line_194"
            data-name="Line 194"
            x1="70.47"
            y1="26.77"
            x2="76.17"
            y2="32.47"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_195"
            data-name="Line 195"
            x1="99.87"
            y1="32.67"
            x2="105.47"
            y2="27.07"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_196"
            data-name="Line 196"
            x1="87.97"
            y1="27.77"
            x2="87.97"
            y2="19.87"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
        </g>
        <path
          id="Path_6939"
          data-name="Path 6939"
          d="M98.6,77.8a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.65.65,0,0,0-.6-.6c-.3,0-.5.3-.6.6a4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,1,0,0,1.2A4.46,4.46,0,0,1,93,83.5a.58.58,0,0,0,.6.6.53.53,0,0,0,.6-.6v-.1a4.4,4.4,0,0,1,4.4-4.5.55.55,0,1,0,0-1.1Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <path
          id="Path_6940"
          data-name="Path 6940"
          d="M39.5,46.2a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2,1.06,1.06,0,0,0-.9-1c-.5-.1-.9.4-1,.9v.1a7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1,1,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3,1.06,1.06,0,0,0,.9,1c.5.1.9-.4,1-.9v-.1a7.17,7.17,0,0,1,7.1-7.3,1,1,0,0,0,.9-1.1c0-.5-.4-.8-.9-.9Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <line
          id="Line_197"
          data-name="Line 197"
          x1={63}
          y1="38.3"
          x2={63}
          y2="86.3"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <line
          id="Line_198"
          data-name="Line 198"
          x1={77}
          y1="38.3"
          x2={77}
          y2="86.3"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <g id="Group_2135" data-name="Group 2135">
          <line
            id="Line_199"
            data-name="Line 199"
            x1="63.07"
            y1="42.87"
            x2="77.07"
            y2="42.87"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_200"
            data-name="Line 200"
            x1="63.07"
            y1="52.17"
            x2="77.07"
            y2="52.17"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_201"
            data-name="Line 201"
            x1="63.07"
            y1="61.37"
            x2="77.07"
            y2="61.37"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_202"
            data-name="Line 202"
            x1="63.07"
            y1="70.67"
            x2="77.07"
            y2="70.67"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_203"
            data-name="Line 203"
            x1="63.07"
            y1="79.87"
            x2="77.07"
            y2="79.87"
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

export default SnakesAnimation;
