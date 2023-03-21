import React, { useEffect, useRef } from "react";
import KUTE from "kute.js";

export default function Home(props) {
  const firstSVGRef = useRef(null);
  const secondSVGRef = useRef(null);

  useEffect(() => {
    const firstPaths = firstSVGRef.current.querySelectorAll("path");
    const secondPaths = secondSVGRef.current.querySelectorAll("path");

    const morphAnimation1 = KUTE.fromTo(
      firstPaths[0],
      { path: firstPaths[0] },
      { path: secondPaths[0] },
      { duration: 4000, easing: "easingCubicInOut", repeat: 100, yoyo: true }
    );

    const morphAnimation2 = KUTE.fromTo(
      firstPaths[1],
      { path: firstPaths[1] },
      { path: secondPaths[1] },
      { duration: 4000, easing: "easingCubicInOut", repeat: 100, yoyo: true }
    );

    morphAnimation1.start();
    morphAnimation2.start();

    return () => {
      morphAnimation1.stop();
      morphAnimation2.stop();
    };
  }, []);

  return (
    <div className="w-100% h-screen flex items-center justify-center">
      <svg
        id="firstSVG"
        viewBox="0 0 900 500"
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={firstSVGRef}
      >
        <rect x="0" y="0" width="900" height="500" fill="#fff"></rect>
        <g transform="translate(900, 500)">
          <path
            d="M-270.4 0C-269.4 -38.1 -268.4 -76.3 -249.8 -103.5C-231.3 -130.7 -195.3 -147 -168.3 -168.3C-141.3 -189.6 -123.4 -215.9 -96.8 -233.7C-70.3 -251.6 -35.1 -261 0 -270.4L0 0Z"
            fill="#83d0c9"
          ></path>
        </g>
        <g transform="translate(0, 0)">
          <path
            d="M270.4 0C259.6 31.4 248.8 62.8 238.4 98.7C228 134.7 218 175.2 191.2 191.2C164.4 207.2 120.8 198.8 86.1 207.9C51.4 217 25.7 243.7 0 270.4L0 0Z"
            fill="#83d0c9"
          ></path>
        </g>
      </svg>

      <svg
        id="secondSVG"
        viewBox="0 0 900 500"
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ display: "none" }}
        ref={secondSVGRef}
      >
        <rect x="0" y="0" width="900" height="500" fill="#fff"></rect>
        <g transform="translate(900, 500)">
          <path
            d="M-270.4 0C-240.3 -24.3 -210.1 -48.6 -201.4 -83.4C-192.7 -118.2 -205.5 -163.5 -191.2 -191.2C-176.9 -218.9 -135.5 -229 -99.1 -239.3C-62.7 -249.6 -31.4 -260 0 -270.4L0 0Z"
            fill="#83d0c9"
          ></path>
        </g>
        <g transform="translate(0, 0)">
          <path
            d="M270.4 0C268.4 37.1 266.3 74.2 249.8 103.5C233.4 132.8 202.4 154.3 175.4 175.4C148.3 196.4 125 217 96.4 232.8C67.8 248.6 33.9 259.5 0 270.4L0 0Z"
            fill="#83d0c9"
          ></path>
        </g>
      </svg>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold">Horizon</h1>
        <h3 className="text-slate-400 font-semibold">
          The perfect place to find your dream job
        </h3>
      </div>
    </div>
  );
}
