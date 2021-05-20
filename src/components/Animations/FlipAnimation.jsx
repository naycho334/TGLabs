import { useEffect } from "react";

const FlipAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/flip-animation.js";

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
      <g id="icon_game-flip" data-name="icon game-flip">
        <path
          id="Path_6948"
          data-name="Path 6948"
          d="M98,73.8a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.6.6,0,1,0-1.2,0,4.82,4.82,0,0,1-1.3,3.2A4.39,4.39,0,0,1,88,73.8.6.6,0,1,0,88,75a4.46,4.46,0,0,1,4.4,4.5.6.6,0,0,0,1.2,0A4.4,4.4,0,0,1,98,75a.6.6,0,1,0,0-1.2Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <path
          id="Path_6949"
          data-name="Path 6949"
          d="M46.47,33.9a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,1,0-1.8,0,7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1.17,1.17,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3.9.9,0,0,0,1.8,0,7.17,7.17,0,0,1,7.1-7.3,1,1,0,0,0,.9-1,1.32,1.32,0,0,0-.9-1Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <g id="Group_2150" data-name="Group 2150">
          <ellipse
            id="Ellipse_250"
            data-name="Ellipse 250"
            cx="58.36"
            cy="56.53"
            rx="19.8"
            ry="5.3"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
          <path
            id="Path_6950"
            data-name="Path 6950"
            d="M78.16,63.43c0,2.9-8.9,5.3-19.8,5.3s-19.8-2.4-19.8-5.3"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_218"
            data-name="Line 218"
            x1="38.46"
            y1="63.43"
            x2="38.46"
            y2="56.53"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_219"
            data-name="Line 219"
            x1="78.16"
            y1="63.43"
            x2="78.16"
            y2="56.53"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeMiterlimit: 10,
              strokeWidth: "2px",
            }}
          />
        </g>
        <g id="Group_2151" data-name="Group 2151">
          <line
            id="Line_220"
            data-name="Line 220"
            x1="72.46"
            y1="41.63"
            x2="84.46"
            y2="41.63"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_221"
            data-name="Line 221"
            x1="80.36"
            y1="46.83"
            x2="84.46"
            y2="41.63"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_222"
            data-name="Line 222"
            x1="80.36"
            y1="36.43"
            x2="84.46"
            y2="41.63"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
        </g>
        <g id="Group_2152" data-name="Group 2152">
          <line
            id="Line_223"
            data-name="Line 223"
            x1="42.46"
            y1="78.63"
            x2="30.46"
            y2="78.63"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_224"
            data-name="Line 224"
            x1="34.46"
            y1="83.83"
            x2="30.46"
            y2="78.63"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_225"
            data-name="Line 225"
            x1="34.46"
            y1="73.43"
            x2="30.46"
            y2="78.63"
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

export default FlipAnimation;
