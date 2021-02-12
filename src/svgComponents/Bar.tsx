import * as React from "react";

function SvgBar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.4 30"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none" strokeMiterlimit={10} strokeWidth={30}>
        <path stroke="#007561" d="M545.94 15H784.4" />
        <path stroke="#75a200" d="M283.12 15h262.82" />
        <path stroke="#ffa700" d="M0 15h283.12" />
      </g>
    </svg>
  );
}

export default SvgBar;
