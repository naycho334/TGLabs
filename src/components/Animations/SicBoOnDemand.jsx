import { useEffect } from "react";

const SicBoOnDemand = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/sic-bo-on-demand-animation.js";

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
      <g id="icon_game-sicbo" data-name="icon game-sicbo">
        <g id="Group_2169" data-name="Group 2169">
          <path
            id="Rectangle_3753"
            data-name="Rectangle 3753"
            d="M74.08,63.51h28.4a4.8,4.8,0,0,1,4.8,4.8v28.4a4.8,4.8,0,0,1-4.8,4.8H74.08a4.8,4.8,0,0,1-4.8-4.8V68.31A4.74,4.74,0,0,1,74.08,63.51Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_263"
            data-name="Ellipse 263"
            cx="79.08"
            cy="73.61"
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
            id="Ellipse_264"
            data-name="Ellipse 264"
            cx="79.08"
            cy="92.21"
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
            id="Ellipse_265"
            data-name="Ellipse 265"
            cx="98.28"
            cy="73.61"
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
            id="Ellipse_266"
            data-name="Ellipse 266"
            cx="98.28"
            cy="92.21"
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
            id="Ellipse_267"
            data-name="Ellipse 267"
            cx="88.58"
            cy="82.41"
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
        <g id="Group_2170" data-name="Group 2170">
          <path
            id="Rectangle_3754"
            data-name="Rectangle 3754"
            d="M58.68,8.11l27.1,8.5a4.75,4.75,0,0,1,3.1,6l-8.5,27.1a4.75,4.75,0,0,1-6,3.1l-27.1-8.5a4.75,4.75,0,0,1-3.1-6l8.5-27.1A5,5,0,0,1,58.68,8.11Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_268"
            data-name="Ellipse 268"
            cx="62.58"
            cy="25.51"
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
            id="Ellipse_269"
            data-name="Ellipse 269"
            cx="71.18"
            cy="36.81"
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
        <g id="Group_2171" data-name="Group 2171">
          <path
            id="Rectangle_3755"
            data-name="Rectangle 3755"
            d="M15.18,65.71,41.88,56a4.75,4.75,0,0,1,6.1,2.9l9.7,26.7a4.78,4.78,0,0,1-2.8,6.1l-26.7,9.7a4.75,4.75,0,0,1-6.1-2.9l-9.7-26.7A4.7,4.7,0,0,1,15.18,65.71Z"
            style={{
              fill: "none",
              stroke: "#fab893",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2px",
            }}
          />
          <circle
            id="Ellipse_270"
            data-name="Ellipse 270"
            cx="23.38"
            cy="73.51"
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
            id="Ellipse_271"
            data-name="Ellipse 271"
            cx="34.98"
            cy="78.71"
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
            id="Ellipse_272"
            data-name="Ellipse 272"
            cx="47.78"
            cy="84.41"
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
        <path
          id="Path_6962"
          data-name="Path 6962"
          d="M28.28,34.65a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.55.55,0,0,0-1.1-.1h0a4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,0,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.55.55,0,1,0,1.1.1h0a4.4,4.4,0,0,1,4.4-4.5.65.65,0,0,0,.6-.6.58.58,0,0,0-.6-.6Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
        <path
          id="Path_6963"
          data-name="Path 6963"
          d="M115.18,40a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,1,0-1.8,0h0a7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1,1,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3.9.9,0,1,0,1.8,0,7.17,7.17,0,0,1,7.1-7.3,1,1,0,0,0,.9-1.1,1.06,1.06,0,0,0-.9-.9Z"
          style={{
            fill: "#fff",
            opacity: "0.20000000298023224",
            isolation: "isolate",
          }}
        />
      </g>
    </svg>
  );
};

export default SicBoOnDemand;
