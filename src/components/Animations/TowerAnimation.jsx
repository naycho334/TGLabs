import { useEffect } from "react";

const TowerAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/tower-animation.js";

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
      <path
        id="Path_6941"
        data-name="Path 6941"
        d="M109.4,70.5a4.39,4.39,0,0,1-3.1-1.3A4.82,4.82,0,0,1,105,66a.6.6,0,1,0-1.2,0,4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,1,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.6.6,0,0,0,1.2,0,4.4,4.4,0,0,1,4.4-4.5.6.6,0,0,0,0-1.2Z"
        style={{
          fill: "#fff",
          opacity: "0.20000000298023224",
          isolation: "isolate",
        }}
      />
      <path
        id="Path_6942"
        data-name="Path 6942"
        d="M35,30.2a7.12,7.12,0,0,1-5-2.1,7.6,7.6,0,0,1-2.1-5.2.9.9,0,0,0-1.8,0A7.34,7.34,0,0,1,24,28.1a6.72,6.72,0,0,1-5,2.1,1,1,0,0,0-.9,1.1,1.06,1.06,0,0,0,.9.9,7.23,7.23,0,0,1,7.1,7.3.9.9,0,0,0,1.8,0h0A7.17,7.17,0,0,1,35,32.2a1,1,0,0,0,.9-1.1,1.06,1.06,0,0,0-.9-.9Z"
        style={{
          fill: "#fff",
          opacity: "0.20000000298023224",
          isolation: "isolate",
        }}
      />
      <path
        id="Rectangle_3740"
        data-name="Rectangle 3740"
        d="M50.9,41.4H78a5,5,0,0,1,5,5h0V87.6H45.9V46.4a5,5,0,0,1,5-5Z"
        style={{
          fill: "none",
          stroke: "#fab893",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <line
        id="Line_204"
        data-name="Line 204"
        x1="39.7"
        y1="87.6"
        x2="89.1"
        y2="87.6"
        style={{
          fill: "none",
          stroke: "#fab893",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2px",
        }}
      />
      <g id="Group_2138" data-name="Group 2138">
        <rect
          id="Rectangle_3746"
          data-name="Rectangle 3746"
          x="67.39"
          y="73.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fab893",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <rect
          id="Rectangle_3744"
          data-name="Rectangle 3744"
          x="67.39"
          y="61.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <rect
          id="Rectangle_3742"
          data-name="Rectangle 3742"
          x="67.39"
          y="49.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fab893",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <rect
          id="Rectangle_3745"
          data-name="Rectangle 3745"
          x="52.59"
          y="73.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fab893",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <rect
          id="Rectangle_3743"
          data-name="Rectangle 3743"
          x="52.59"
          y="61.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fab893",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <rect
          id="Rectangle_3741"
          data-name="Rectangle 3741"
          x="52.59"
          y="49.78"
          width="8.9"
          height="6.1"
          style={{
            fill: "none",
            stroke: "#fab893",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
      </g>
      <g id="Group_2139" data-name="Group 2139">
        <line
          id="Line_205"
          data-name="Line 205"
          x1="96.29"
          y1="49.78"
          x2="96.29"
          y2="31.18"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <line
          id="Line_206"
          data-name="Line 206"
          x1="91.09"
          y1="35.28"
          x2="96.29"
          y2="31.18"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
        <line
          id="Line_207"
          data-name="Line 207"
          x1="101.49"
          y1="35.28"
          x2="96.29"
          y2="31.18"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2px",
          }}
        />
      </g>
    </svg>
  );
};

export default TowerAnimation;
