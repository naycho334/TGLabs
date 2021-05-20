import { useEffect } from "react";

const RouletteLiveAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/roulette-live-animation.js";

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
      viewBox="0 0 128.1 109.57"
    >
      <g id="icon_game-roulette-live" data-name="icon game-roulette-live">
        <g id="Group_2234" data-name="Group 2234">
          <path
            id="Path_6992"
            data-name="Path 6992"
            d="M32.3,80.12a4.31,4.31,0,0,1-3.1-1.32,4.56,4.56,0,0,1-1.28-3.2.58.58,0,0,0-1.16,0,4.61,4.61,0,0,1-1.29,3.2,4.31,4.31,0,0,1-3.1,1.32.6.6,0,1,0,0,1.2,4.46,4.46,0,0,1,4.39,4.53.58.58,0,1,0,1.16,0,4.46,4.46,0,0,1,4.38-4.53.6.6,0,0,0,0-1.2Z"
            style={{
              fill: "#fff",
              opacity: "0.20000000298023224",
              isolation: "isolate",
            }}
          />
          <circle
            id="Ellipse_291"
            data-name="Ellipse 291"
            cx="68.18"
            cy="51.93"
            r="32.39"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <g id="Group_2229" data-name="Group 2229">
            <line
              id="Line_277"
              data-name="Line 277"
              x1="72.38"
              y1="51.93"
              x2="75.1"
              y2="51.93"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_278"
              data-name="Line 278"
              x1="61.25"
              y1="51.93"
              x2="63.98"
              y2="51.93"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
          </g>
          <g id="Group_2230" data-name="Group 2230">
            <line
              id="Line_279"
              data-name="Line 279"
              x1="68.18"
              y1="47.73"
              x2="68.18"
              y2="45.01"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_280"
              data-name="Line 280"
              x1="68.18"
              y1="58.86"
              x2="68.18"
              y2="56.13"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
          </g>
          <g id="Group_2232" data-name="Group 2232">
            <line
              id="Line_283"
              data-name="Line 283"
              x1="50.8"
              y1="69.16"
              x2="56.27"
              y2="63.7"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_284"
              data-name="Line 284"
              x1="79.79"
              y1="40.17"
              x2="85.66"
              y2="34.31"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_281"
              data-name="Line 281"
              x1="68.23"
              y1="76.38"
              x2="68.23"
              y2="69.09"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_282"
              data-name="Line 282"
              x1="68.23"
              y1="35.38"
              x2="68.23"
              y2="27.09"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_285"
              data-name="Line 285"
              x1="50.8"
              y1="34.31"
              x2="56.67"
              y2="40.17"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_286"
              data-name="Line 286"
              x1="79.79"
              y1="63.3"
              x2="85.66"
              y2="69.16"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_275"
              data-name="Line 275"
              x1="43.58"
              y1="51.74"
              x2="51.88"
              y2="51.74"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <line
              id="Line_276"
              data-name="Line 276"
              x1="84.58"
              y1="51.74"
              x2="92.88"
              y2="51.74"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <circle
              id="Ellipse_292"
              data-name="Ellipse 292"
              cx="68.18"
              cy="51.93"
              r="25.09"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <circle
              id="Ellipse_293"
              data-name="Ellipse 293"
              cx="68.18"
              cy="51.93"
              r="16.3"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
            <circle
              id="Ellipse_294"
              data-name="Ellipse 294"
              cx="68.18"
              cy="51.93"
              r="4.2"
              style={{
                fill: "none",
                stroke: "#fab893",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2px",
              }}
            />
          </g>
          <circle
            id="Ellipse_295"
            data-name="Ellipse 295"
            cx="108.01"
            cy="36.34"
            r="3.41"
            style={{
              fill: "none",
              stroke: "#fff",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <g
            id="icon25_my-account"
            data-name="icon my-account"
            style={{ opacity: "0.20000000298023224" }}
          >
            <g id="Group_798" data-name="Group 798">
              <circle
                id="Ellipse_122"
                data-name="Ellipse 122"
                cx="27.34"
                cy="16.62"
                r="4.43"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "2px",
                }}
              />
              <path
                id="Path_5611"
                data-name="Path 5611"
                d="M34.14,26.77a9.88,9.88,0,0,0-13.62,0"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "2px",
                }}
              />
              <circle
                id="Ellipse_123"
                data-name="Ellipse 123"
                cx="27.34"
                cy="18.7"
                r="10.65"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "2px",
                }}
              />
            </g>
          </g>
          <g
            id="icon25_my-account-2"
            data-name="icon my-account-2"
            style={{ opacity: "0.20000000298023224" }}
          >
            <g id="Group_798-2" data-name="Group 798-2">
              <circle
                id="Ellipse_122-2"
                data-name="Ellipse 122-2"
                cx="84.58"
                cy="92.5"
                r="3.14"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "1.4160000085830688px",
                }}
              />
              <path
                id="Path_5611-2"
                data-name="Path 5611-2"
                d="M89.4,99.69a7,7,0,0,0-9.64,0"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "1.4160000085830688px",
                }}
              />
              <circle
                id="Ellipse_123-2"
                data-name="Ellipse 123-2"
                cx="84.58"
                cy="93.98"
                r="7.54"
                style={{
                  fill: "none",
                  stroke: "#fff",
                  strokeMiterlimit: 10,
                  strokeWidth: "1.4160000085830688px",
                }}
              />
            </g>
          </g>
        </g>
        <circle
          id="Ellipse_296"
          data-name="Ellipse 296"
          cx="102.64"
          cy="63.54"
          r="7.41"
          style={{ fill: "#71cde2" }}
        />
      </g>
    </svg>
  );
};

export default RouletteLiveAnimation;
