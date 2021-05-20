import { useEffect } from "react";

const DiceProAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/dice-pro-animation.js";

    window.addEventListener('load', () => document.body.append(animationScript));;

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
      <g id="icon_game-dice-pro" data-name="icon game-dice-pro">
        <g id="Group_2096" data-name="Group 2096">
          <line
            id="Line_164"
            data-name="Line 164"
            x1="86.56"
            y1="16.55"
            x2="86.56"
            y2="24.55"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_165"
            data-name="Line 165"
            x1="103.16"
            y1="41.45"
            x2="111.16"
            y2="41.45"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <line
            id="Line_166"
            data-name="Line 166"
            x1="98.26"
            y1="29.65"
            x2="103.86"
            y2="23.95"
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
          id="Path_6896"
          data-name="Path 6896"
          d="M79.21,89.7a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.6.6,0,0,0-1.2,0,4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,0,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.6.6,0,1,0,1.2,0,4.4,4.4,0,0,1,4.4-4.5.6.6,0,0,0,0-1.2Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <path
          id="Path_6897"
          data-name="Path 6897"
          d="M50.41,21.8a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,1,0-1.8,0,7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1,1,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3.9.9,0,0,0,1.8,0,7.17,7.17,0,0,1,7.1-7.3,1,1,0,0,0,.9-1.1c-.1-.5-.4-.9-.9-.9Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <g id="Group_2097" data-name="Group 2097">
          <mask id="Group_2098_Msk">
            <path
              d="M-29.86-30.68V138H159.29V-30.68ZM93.2,71.5l-28,5a4.7,4.7,0,0,1-5.5-3.9l-5-28.1A4.82,4.82,0,0,1,58.6,39l28-5a4.7,4.7,0,0,1,5.5,3.9l5,28.1A4.7,4.7,0,0,1,93.2,71.5Z"
              style={{ fill: "#fff" }}
            />
          </mask>
          <path
            id="Rectangle_3735"
            data-name="Rectangle 3735"
            d="M58.76,39.15l28-5a4.7,4.7,0,0,1,5.5,3.9l5,28.1a4.7,4.7,0,0,1-3.9,5.5l-28,5a4.7,4.7,0,0,1-5.5-3.9l-5-28.1A4.82,4.82,0,0,1,58.76,39.15Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.000499963760376px",
            }}
          />
          <circle
            id="Ellipse_216"
            data-name="Ellipse 216"
            cx="65.46"
            cy="48.25"
            r="3.5"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_217"
            data-name="Ellipse 217"
            cx="68.66"
            cy="66.65"
            r="3.5"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_218"
            data-name="Ellipse 218"
            cx="84.46"
            cy="44.85"
            r="3.5"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_219"
            data-name="Ellipse 219"
            cx="87.66"
            cy="63.25"
            r="3.5"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
        </g>
        <g mask="url(#Group_2098_Msk)">
          <g id="Group_2098" data-name="Group 2098">
            <path
              id="Path_6898"
              data-name="Path 6898"
              d="M36.56,40.05l25.5,12.7a4.7,4.7,0,0,1,2.1,6.4l-12.7,25.5a4.7,4.7,0,0,1-6.4,2.1l-25.5-12.7a4.7,4.7,0,0,1-2.1-6.4l12.7-25.5A4.87,4.87,0,0,1,36.56,40.05Z"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2.000499963760376px",
              }}
            />
            <circle
              id="Ellipse_220"
              data-name="Ellipse 220"
              cx="42.46"
              cy="71.35"
              r="3.5"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <circle
              id="Ellipse_221"
              data-name="Ellipse 221"
              cx="37.76"
              cy="57.05"
              r="3.5"
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
      </g>
    </svg>
  );
};

export default DiceProAnimation;
