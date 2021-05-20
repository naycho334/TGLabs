import { useEffect } from "react";

const RingAnimation = () => {
  useEffect(() => {
    // Create script element
    const animationScript = document.createElement("script");
    animationScript.src = "/assets/js/ring-animation.js";

    window.addEventListener('load', () => document.body.append(animationScript));
    
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
              ".I5cls-1,.I5cls-3{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}.I5cls-1{stroke:#fff;}.I5cls-2{fill:#fff;opacity:0.2;isolation:isolate;}.I5cls-3{stroke:#fab893;}.I5cls-4{fill:#71cde2;}",
          }}
        />
      </defs>
      <g id="icon_game-ring-live" data-name="icon game-ring-live">
        <g id="Group_2113" data-name="Group 2113">
          <line
            id="Line_182"
            data-name="Line 182"
            className="I5cls-1"
            x1="75.48"
            y1="16.73"
            x2="75.48"
            y2="24.63"
          />
          <line
            id="Line_183"
            data-name="Line 183"
            className="I5cls-1"
            x1="91.98"
            y1="41.63"
            x2="99.98"
            y2="41.63"
          />
          <line
            id="Line_184"
            data-name="Line 184"
            className="I5cls-1"
            x1="87.08"
            y1="29.73"
            x2="92.68"
            y2="24.13"
          />
        </g>
        <path
          id="Path_6912"
          data-name="Path 6912"
          className="I5cls-2"
          d="M37.65,21.45a4.39,4.39,0,0,1-3.1-1.3,4.82,4.82,0,0,1-1.3-3.2.65.65,0,0,0-.6-.6.56.56,0,0,0-.5.6,4.82,4.82,0,0,1-1.3,3.2,4.39,4.39,0,0,1-3.1,1.3.6.6,0,1,0,0,1.2,4.46,4.46,0,0,1,4.4,4.5.55.55,0,1,0,1.1.1h0a4.4,4.4,0,0,1,4.4-4.5.65.65,0,0,0,.6-.6.67.67,0,0,0-.6-.7Z"
        />
        <path
          id="Path_6913"
          data-name="Path 6913"
          className="I5cls-2"
          d="M100,83.05A7.12,7.12,0,0,1,95,81a7.69,7.69,0,0,1-2-5.2.9.9,0,0,0-1.8,0h0a7.34,7.34,0,0,1-2.1,5.2,6.72,6.72,0,0,1-5,2.1,1.09,1.09,0,0,0-.9,1.1c0,.5.4.8.9.9a7.23,7.23,0,0,1,7.1,7.3.9.9,0,1,0,1.8,0,7.17,7.17,0,0,1,7.1-7.3A1.09,1.09,0,0,0,101,84a1.06,1.06,0,0,0-1-.9Z"
        />
        <g id="Group_2116" transform="translate(-802.673 -3469.521)">
          <circle
            id="Ellipse_232"
            className="I5cls-1"
            cx="864.9"
            cy="3501.4"
            r="4.2"
          />
          <circle
            id="Ellipse_234"
            className="I5cls-1"
            cx={849}
            cy={3508}
            r="4.2"
          />
          <circle
            id="Ellipse_236"
            className="I5cls-1"
            cx="842.5"
            cy="3523.8"
            r="4.2"
          />
          <circle
            id="Ellipse_238"
            className="I5cls-1"
            cx={849}
            cy="3539.6"
            r="4.2"
          />
          <circle
            id="Ellipse_233"
            className="I5cls-1"
            cx="864.9"
            cy="3546.2"
            r="4.2"
          />
          <circle
            id="Ellipse_235"
            className="I5cls-1"
            cx="880.8"
            cy="3539.6"
            r="4.2"
          />
          <circle
            id="Ellipse_237"
            className="I5cls-1"
            cx="887.3"
            cy="3523.8"
            r="4.2"
          />
          <circle
            id="Ellipse_239"
            className="I5cls-3"
            cx="880.7"
            cy="3507.9"
            r="4.2"
          />
        </g>
        <circle
          id="Ellipse_240"
          data-name="Ellipse 240"
          className="I5cls-4"
          cx="61.55"
          cy="54.95"
          r="7.4"
        />
      </g>
    </svg>
  );
};

export default RingAnimation;
