import * as React from "react";
import { css } from '@emotion/css'
import { useEffect } from 'react'

function SvgTheMask(props: React.SVGProps<SVGSVGElement>) {
/*  Render The mask once component loaded*/
/*Exclamation mark is too force typescript that dom IS existing*/
useEffect(() => {

  let ipkins = document.querySelector('.the-mask_svg__ipkins')!;
  let ipkinsChildren = ipkins.childNodes!;
  let ipkinsArr = Array.prototype.slice.call(ipkinsChildren);

     ipkins.addEventListener('animationstart', () => {

      for (const element of ipkinsArr) {

        if (element.tagName === 'g' ){
          const elNode = element.childNodes
          const elArr = Array.prototype.slice.call(elNode);

          for (const subEl of elArr) {
            if (subEl.tagName === 'g') {
              const subSubNode = subEl.childNodes
              for (const subSubEl of subSubNode) {
                subSubEl.style = "opacity: 1";
              }
            } else {
              subEl.style = "opacity: 1";
            }
          }
          
        } else {
      element.style = "opacity: 1";
        }
    }
  });

})
  return (
   /* RETURN THE SVG*/
    <svg
      id="the-mask_svg__mask-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="155 450 720 860"
      {...props}
      className={
            css`height: 100vh;
                position: absolute;
                top: 0;
                right: 0;`
          }
    >
      <defs>
        <clipPath
          id="the-mask_svg__clip-path"
          transform="translate(326.88 450.43)"
        >
          <path
            id="the-mask_svg__hide"
            fill="none"
            d="M0-.99h551.32v866.67H0z"
          />
        </clipPath>
        <style>
          {
            ".the-mask_svg__cls-16{fill:none}.the-mask_svg__cls-8{fill:#ffa700}.the-mask_svg__cls-4{fill:#bba800}.the-mask_svg__cls-5{fill:#008746}.the-mask_svg__cls-10,.the-mask_svg__cls-13,.the-mask_svg__cls-16,.the-mask_svg__cls-19,.the-mask_svg__cls-8{stroke-miterlimit:10}.the-mask_svg__cls-10,.the-mask_svg__cls-16,.the-mask_svg__cls-19,.the-mask_svg__cls-8{stroke:#000}.the-mask_svg__cls-10,.the-mask_svg__cls-8{stroke-width:.5px}.the-mask_svg__cls-10,.the-mask_svg__cls-13,.the-mask_svg__cls-15,.the-mask_svg__cls-19{fill:#fff}.the-mask_svg__cls-13{stroke:#fff}.the-mask_svg__cls-16{stroke-width:.25px}.the-mask_svg__cls-18{fill:#007561}"
          }
        </style>
      </defs>
      <g clipPath="url(#the-mask_svg__clip-path)">
        <g id="the-mask_svg__svg">
          <path
            d="M551.32 862.68s-25 79.88-275.66 79.62C11 942 0 859.58 0 859.58V-1h551.32z"
            transform="translate(326.88 450.43)"
            fill="#ffa700"
            className={
            css`animation: backgroundFadeIn 2500ms ease;
                animation-fill-mode: forwards;`
            }
          />
          <circle
            id="the-mask_svg__top-right-big"
            className={
            css`animation: circling 1500ms ease;
                animation-delay: 2s;
                animation-fill-mode: forwards;
                transform-box: fill-box;
                transform-origin:50% 50%;`
            + ' ' + "the-mask_svg__cls-4"}
            cx={849.76}
            cy={697.21}
            r={110.07}
          />
          <circle
            id="the-mask_svg__top-right-small"
            className={
            css`animation: circling 1500ms ease;
                animation-delay: 2.5s;
                animation-fill-mode: forwards;
                transform-box: fill-box;
                transform-origin:50% 50%;`
            + ' ' + "the-mask_svg__cls-5"}
            cx={849.76}
            cy={697.21}
            r={42.64}
          />
          <path
            id="the-mask_svg__big-wave"
            d="M1345.51 1518.69s-295.57-635.42-668.2-608.43C183.37 946.03 210.76 209.43 210.77 210.5"
            className={
            css`animation: wavingBig 1500ms ease;
                animation-delay: 1s;
                animation-fill-mode: forwards;
                stroke-dasharray: 2000;`
            }
            strokeMiterlimit={10}
            stroke="#0f9623"
            strokeWidth={421}
            fill="none"
          />
          <path
            id="the-mask_svg__medium-wave"
            d="M272.79 948.77s221.83 246.89 373 137c127.09-92.34 301.09 127.77 301.09 127.77"
            className={
            css`animation: wavingMedium 1500ms ease;
                animation-delay: 1.2s;
                animation-fill-mode: forwards;
                stroke-dasharray: 1000;`
            }
            strokeWidth={115}
            stroke="#008746"
            strokeMiterlimit={10}
            fill="none"
          />
          <g className={
            css`animation: ipkins 1200ms ease;
                animation-delay: 2.5s;
                animation-fill-mode: forwards;
                transform-box: fill-box;
                transform-origin: 50% 100%`
            + ' ' + "the-mask_svg__ipkins"}>
            <path
              className="the-mask_svg__cls-8"
              d="M391.82 669.28c-6-3.92-12-7.74-17.92-11.82-3.32-2.3-6.34-5-9.39-7.49.81 8.55 1.62 17.16 2.46 25.77.19 2 .52 4 .68 6.06a15.28 15.28 0 01-.19 2.69c-.24 2.37-.54 4.74-.71 7.11-.09 1.39 0 2.78.06 4.18-8.73-.76 73.38 6 73.41 1.05.02-3.96-38.87-21.08-48.4-27.55z"
              transform="translate(326.88 450.43)"
            />
            <path
              d="M291.53 680.1l8.24 15.25s-15.2 2.35-16.19 7.47l-4.76 5.3-.09 14.59-12.53-.08-12.53-.08.09-14.59-4.68-5.36c-.93-5.13-16.1-7.67-16.1-7.67l8.44-15.14.52-1.32s17.51 3.62 23.83 3.43 20.24-1.4 25.36-3.11z"
              transform="translate(326.88 450.43)"
            />
            <path
              d="M502.67 1053.61l-2.22 22.39v3.27s8.44 14.22 13.23 16.83c0 0 6 7.12 19.53 14.81s37.34 18.8 37.34 18.8 15.85 5.55 45.21.49c0 0 25.54-11 33.37-15.72s32-21 37.46-33.38l-.29-28.16-47.18 52.67s-10 17-17.64 19.7-25.42 3.55-28.3 1.65-19.23 3.81-30.09-3.19c0 0-11.52-10.94-14.74-17.63s-45.68-52.53-45.68-52.53z"
              fill="#ffeccc"
              strokeWidth={0.5}
              stroke="#000"
              strokeMiterlimit={10}
            />
            <path
              className="the-mask_svg__cls-8"
              d="M140.47 667.69c6-3.85 12.14-7.59 18.07-11.6 3.35-2.26 6.41-5 9.49-7.36-.92 8.53-1.84 17.13-2.79 25.73-.22 2-.57 4-.76 6a15.19 15.19 0 00.16 2.69c.21 2.38.48 4.75.62 7.13.08 1.38-.07 2.78-.11 4.17-8.25-.06 8.34 0 0 0 8.73-.65-73.45 5-73.42.12.03-3.91 39.13-20.57 48.74-26.88z"
              transform="translate(326.88 450.43)"
            />
            <path
              className="the-mask_svg__cls-10"
              d="M165.35 694.5c-.63-3.58-1.8-7.17-1.76-10.74.07-6.15.83-12.29 1.43-18.42.93-9.46 3.58-18.7 3.5-28.31 0-4.53.34-9.08.66-13.61.25-3.51 1.71-5.28 5.1-6.31-.25 2.91-.48 5.69-.71 8.46h-.46l-1.31-3.21-.35.09a34.6 34.6 0 001 3.82c3 7.78 8.41 13.78 14.31 19.36 10.73 10.16 23.35 17.56 36.4 24.22 6.81 3.48 13.91 6.4 20.47 9.39-2.59 4.58-5.3 9.36-8 14.15-.1.18 8.8 3.27 13 8.06 1.86 2.15 5.12 6.47 5.12 6.47s0 14.37-.09 14.59c-23.28-.11-65.02-27.86-88.31-28.01zM297.63 695.34a61.75 61.75 0 00-8.77-15.57c7-3.08 14-5.95 20.78-9.17a166.18 166.18 0 0031-18.81c8.3-6.47 15.91-13.75 20.26-23.68a13.1 13.1 0 001-4.53c-.46 1.06-.91 2.11-1.37 3.16h-.45c-.23-2.76-.46-5.51-.7-8.34 3.33.72 4.91 2.75 5 6.44.45 13.35 1 26.67 3.31 39.88 1 5.87 1.19 11.91 1.6 17.88a31 31 0 01-2.23 13.2c-23-.15-65.44 27.07-88.4 26.93-.09 0 .09-14.59.09-14.59s3.62-4.07 5.09-6.21c3.6-5.13 13.71-6.79 13.79-6.59z"
              transform="translate(326.88 450.43)"
            />
            <path
              d="M595.22 904.72c33.28 2.59 127.23-17.87 127.23-17.87-2.6 4.72.35 19.35.35 19.35 1.68 33.4-13.41 61.76-13.41 61.76l-.62 56.15s1.84 9.5-4.63 11.74-65.71 70.58-65.71 70.58-9.21 17-21 20.74-24.27-.16-24.27-.16-12.54 3.72-24.28-.15-20.73-21-20.73-21-58.38-69-64.81-71.36-4.46-11.84-4.46-11.84l.09-56.16s-14.73-28.55-12.62-61.93c0 0 3.13-14.58.59-19.34 0 0 93.68 21.65 127 19.49z"
              fill="#75a200"
              strokeWidth={0.5}
              stroke="#000"
              strokeMiterlimit={10}
            />
            <g id="the-mask_svg__hat">
              <path
                d="M723.28 768.31c-28.76-25.48-222.17-25.12-251.91-1.6 0 0 79.35 16.25 122.84 14.44s97.67-4.14 109.67-9.72z"
                fill="#d38200"
                strokeWidth={0.5}
                stroke="#000"
                strokeMiterlimit={10}
              />
              <path
                className="the-mask_svg__cls-8"
                d="M269.59 453.92c41.49 2 134.8-18.36 134.8-18.36s87.52-9.69 85.34-24.5-21.5-19.49-30.61-20.11-54.41-6-54.41-6l-5.62-40.44-2.68-26.77s-75.57 13.18-126 12.86-125.91-14.5-125.91-14.5l-3 26.73-6.14 40.37S90 388 80.86 388.55 52.37 393.49 50 408.27s85 25.59 85 25.59 93.07 21.5 134.59 20.06z"
                transform="translate(326.88 450.43)"
              />
              <path
                d="M402.52 369.14s.64.33 2.51 4.7.81 10.37.81 10.37c.4.41-1.13.7-1.13.7s-57.1 23.92-138.77 23.38c-55-.36-130.6-25.09-130.6-25.09s-7.11-6.37 2.53-16.63c0 0 145.95 48.76 264.65 2.57z"
                transform="translate(326.88 450.43)"
              />
            </g>
            <circle
              className="the-mask_svg__cls-13"
              cx={571.4}
              cy={1144.74}
              r={0.97}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={584.91}
              cy={1146.69}
              r={2.78}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={578.46}
              cy={1139.95}
              r={0.58}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={614.08}
              cy={1144.02}
              r={1.08}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={597.9}
              cy={1149.65}
              r={1.93}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={601.7}
              cy={1142.71}
              r={2.38}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={592.29}
              cy={1145.84}
              r={0.97}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={608}
              cy={1142.35}
              r={0.54}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={593.97}
              cy={1140.94}
              r={0.97}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={611.36}
              cy={1135.84}
              r={2.78}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={577.25}
              cy={1146.65}
              r={0.58}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={594.97}
              cy={1136.16}
              r={1.08}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={572.43}
              cy={1136.02}
              r={1.93}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={584.97}
              cy={1137.18}
              r={2.38}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={602.31}
              cy={1136.72}
              r={0.97}
            />
            <circle
              className="the-mask_svg__cls-13"
              cx={606.22}
              cy={1147.77}
              r={0.54}
            />
            <path
              d="M597.59 1016.97a123.34 123.34 0 00-27.42-3.68c-14-.09-29.32 2.71-36.2 2.82a76.11 76.11 0 01-14.79-1.62s1.48 6.57 3.3 9.33 13.73 24.36 15.4 26.51 7.68 17 21.68 24 37.71 6.65 37.71 6.65 29.63-.58 37.5-6.18 16.32-13.18 22.65-24.89 14.67-26 14.67-26l4-8.38a76.57 76.57 0 01-14.82 1.44c-6.86-.2-22.11-3.2-36.16-3.29a123.53 123.53 0 00-27.45 3.34z"
              strokeWidth={4}
              stroke="#008746"
              strokeMiterlimit={10}
              className={
              css`transform: rotateX(85deg);
                transform-box: fill-box;
                transform-origin: 50% 50%;
                animation: smile 0.7s ease;
                animation-delay: 2.7s;
                animation-fill-mode: forwards;`
                + ' ' + "mouth"}
            />
            <path
              d="M164 469s21.61 21.45 37.33 24.92 33.93 5.67 40 3.24 13-8.64 13-8.64.59-3.81-5.26-9.15-6.94-.48-20.5-7.32A105 105 0 01206 456.71s-18.08-6.28-24.83-3.48-12.69 3.59-14.93 9.68z"
              transform="translate(326.88 450.43)"
            />
            <g id="the-mask_svg__teeth" className={
              css`transform: rotateX(90deg);
                  transform-box: fill-box;
                  transform-origin: 50% 50%;
                  animation: smilingteeth 0.7s ease;
                  animation-delay: 2.7s;
                  animation-fill-mode: forwards;`
              }>
              <path
                className="the-mask_svg__cls-15"
                d="M245.27 568c7.44.13 13.86.31 20.12 1.95a5.5 5.5 0 014.4 5.74c-.16 6.9-.32 13.79-.61 20.68-.11 2.88-.25 2.89-3.16 3a96.18 96.18 0 01-28.86-3 3.21 3.21 0 01-2.78-2.83c-.43-3-1-6-1.18-9.07-.26-4.31-.28-8.63-.3-12.95 0-2.66.36-3 3-3.11 3.44-.21 6.92-.33 9.37-.41zM294.83 568.29c2.65.15 6.23.43 9.83.52 1.87 0 2.38 1.05 2.35 2.61-.1 4.31-.11 8.63-.39 12.93-.2 3.1-.75 6.18-1.2 9.25a3.58 3.58 0 01-3.1 3.19 98.83 98.83 0 01-29.43 2.6c-1.63-.1-2.38-.64-2.4-2.3-.09-7.37-.28-14.74-.31-22.11a5.24 5.24 0 014.24-4.94c6.39-1.64 12.93-1.69 20.41-1.75zM294.09 600c.15 5.86.05 11.71-2.58 17.19a12.66 12.66 0 01-18.87 4.47 5.42 5.42 0 01-2.45-4.71c.13-4.3.08-8.61.11-12.91h-1c0 4.17-.16 8.34 0 12.51a5.81 5.81 0 01-3.29 5.53c-5.55 3.22-15.21 3.13-18.71-6.59-1.84-5.13-1.93-10.43-1.7-15.79a280 280 0 0048.49.3zM328.84 571.07c-.31 5.41-.67 10.72-2.45 15.81-1.14 3.25-3 5.61-6.68 6.27-4.06.74-8.07 1.77-12.11 2.6-1.77.36-1.8.1-1.52-1.6.6-3.6 1.16-7.21 1.46-10.84s.28-7.55.44-11.32c.08-2.08.87-2.74 2.92-2.56zM211.29 570.23c4.58-.3 9.07-.59 13.55-.9 1.43-.1 2.86-.28 4.3-.41 2-.18 2.81.51 2.87 2.62.1 3.24 0 6.49.23 9.71.35 4.35.94 8.68 1.51 13 .12 1-.17 1.33-1 1.14-5.18-1.23-10.42-2.3-15.48-3.92-1.41-.46-2.55-2.48-3.32-4-1.85-3.8-3.05-12.47-2.66-17.24z"
                transform="translate(326.88 450.43)"
              />
              <path
                className="the-mask_svg__cls-15"
                d="M295.11 599.56l19.64-3.93c-.29 8.07-.27 15.93-6.64 21.82-4.68 4.33-9.89 4-14.23-.67a2 2 0 01-.59-1.49c1.6-4.94 1.71-10 1.68-15.12a4 4 0 01.14-.61zM244.44 599.21c.2 3.71.33 7.12.6 10.51a17.18 17.18 0 00.85 4.22 2.4 2.4 0 01-.79 3c-4.73 4.35-9.47 4.29-14.15-.22-3.57-3.45-4.94-7.88-5.54-12.59-.37-2.89-.42-5.81-.64-9.07zM210.2 570.27c.57 7 .62 13.92 4.2 20.19-4.26-1.86-8.87-3.09-10.67-8.29A40.41 40.41 0 01201 569.3zM325 591.39c3.9-6.48 4.13-13.4 4.74-20.35l9.25-.86c-.36 5.92-1.5 11.68-5.1 16.4-1.89 2.58-5.41 3.5-8.89 4.81z"
                transform="translate(326.88 450.43)"
              />
              <path
                className="the-mask_svg__cls-15"
                d="M325.33 593c-.45 4.37-1.14 8.72-3.44 12.63-1.88 3.18-4.6 4.64-7.69 4.32.44-3.59 1-7.17 1.29-10.78s.2-3.64 3.68-4.61c1.95-.55 3.9-1.13 5.86-1.69.04.03.1.13.3.13zM223.73 594.9c.51 4.9 1 9.64 1.54 14.62a6.75 6.75 0 01-6.39-2.9 33.21 33.21 0 01-3.39-7.42 51.79 51.79 0 01-1.29-7.12zM214.72 600.51c-1.94-3.39-5-6.24-5.73-10.89 1.59.72 2.78 1.2 3.9 1.81a1.78 1.78 0 01.61 1.15c.43 2.64.82 5.29 1.22 7.93zM330.69 590.4c-.54 4.61-3.84 7.32-5.78 10.77.46-2.83.86-5.66 1.43-8.46.1-.44 1-.77 1.52-1.06.8-.41 1.63-.73 2.83-1.25zM200.59 577c-1.29-2.86-2.57-5.73-4-8.91 3.39.61 3.38.61 3.64 3.27.09 1 .23 1.9.37 2.84s.3 1.75.45 2.62zM339.45 577.91l4.11-8.86c-3.4.56-3.39.57-3.69 3.23-.1 1-.25 1.89-.41 2.83s-.32 1.74-.48 2.61z"
                transform="translate(326.88 450.43)"
              />
            </g>
            <path
              className="the-mask_svg__cls-16"
              d="M170.16 505.59s8-6.43 16.23-6.91a56.92 56.92 0 0117.71 1.75c2.52.73 15.15 5.54 20.22 8.31M369.88 506.85s-7.93-6.52-16.14-7.11a56.91 56.91 0 00-17.74 1.53c-2.53.69-15.22 5.34-20.33 8.05M184 587.68a70.47 70.47 0 01-5.79-21.68c-1-11.6.09-14.41.09-14.41s24.95 2.38 38.9-17.74c0 0 14.34-11 28.3-10.52M359.12 588.79a70.66 70.66 0 006.08-21.65c1.11-11.59.09-14.42.09-14.42s-25 2.07-38.67-18.23c0 0-14.2-11.23-28.17-10.87M159.14 438.75s-10 17.49-1.21 25.6c0 0 4.29 4.47 5.64 4.76s1.6-4.9 1.6-4.9S173.56 453 185 452.74a45 45 0 0119.68 4 65.16 65.16 0 0023.16 15c14.06 5.14 30.46 10.16 33.33 6.19s5-18.75 1.86-23.54"
              transform="translate(326.88 450.43)"
            />
            <path
              d="M377.94 469.53S356.07 490.7 340.3 494s-34 5.24-40.05 2.73-12.84-8.8-12.84-8.8-.55-3.82 5.37-9.08 7-.4 20.59-7.06a105 105 0 0022.74-15.05s18.15-6 24.87-3.16 12.64 3.75 14.8 9.86z"
              transform="translate(326.88 450.43)"
            />
            <path
              className="the-mask_svg__cls-16"
              d="M382.78 440.19s9.75 17.61.88 25.61c0 0-4.35 4.41-5.7 4.69s-1.54-4.92-1.54-4.92-8.25-11.36-19.7-11.72a44.88 44.88 0 00-19.72 3.79 65.31 65.31 0 01-23.36 14.72c-14.11 5-30.58 9.76-33.4 5.76s-4.72-18.81-1.56-23.56M253.41 500.07s10.74 11.45 10.39 20.84-.08 14.78-.08 14.78-6.85 8.22-3.77 13.94M289.76 500.3s-10.88 11.31-10.66 20.7-.1 14.79-.1 14.79 6.74 8.31 3.6 14M248.47 538.67s-5.86 3.45-4.69 9.64 7.78 7.81 7.78 7.81M293.39 539.29s5.81 3.52 4.56 9.7-7.88 7.71-7.88 7.71"
              transform="translate(326.88 450.43)"
            />
            <path
              d="M270.81 560.25a8.17 8.17 0 007.54-4.06s5.49-5.06 9.5-5.15 6.07.58 1.17 2.07-6.15 2.19-8.7 3.85-5.6 3.71-5.6 3.71a15.39 15.39 0 01-5.5.54c-2.94-.28-6-3.41-7.66-4.84s-7.23-3.67-9.36-3.9-4.45-1.72-2-1.69a47.84 47.84 0 016.3.74s4 2.09 5 3.14 5.45 4.73 5.45 4.73z"
              transform="translate(326.88 450.43)"
            />
            <path
              className="the-mask_svg__cls-16"
              d="M315 632.05s-15.46 13.85-18.59 14.4l2 2.61a12.59 12.59 0 00-8.88-5.75s-11.45-4.15-22.4 2C256.24 639 244.74 643 244.74 643a12.55 12.55 0 00-9 5.63l2.54-3c-3.13-.59-18.41-14.63-18.41-14.63M265.86 654.94s4.08 8.28-.09 15.37M269.89 655s-4.17 8.22-.09 15.36"
              transform="translate(326.88 450.43)"
            />
            <g id="the-mask_svg__paupiere">
              <path
                className="the-mask_svg__cls-19"
                d="M326 492.58s-11.39.76-24.5-6.8c0 0-1.26-.51 0-1.64s11.84-7.83 23.7-8.44 18.1-.31 24.51 2.26c0 0-.11.83-2.14 4.65s-10.18 9.91-21.57 9.97zM212.6 491.62s11.39.77 24.5-6.79c0 0 1.26-.52 0-1.64s-11.84-7.83-23.7-8.44-18.1-.32-24.51 2.26c0 0 .11.83 2.14 4.64s10.18 9.91 21.57 9.97z"
                transform="translate(326.88 450.43)"
              />
            </g>
            <g id="the-mask_svg__eyes"
            className={
              css`animation: movingeyes 5500ms infinite ease;
                  animation-delay: 3.5s;`
              }>
              <g id="the-mask_svg__pupille-right">
                <ellipse cx={649.98} cy={931.25} rx={11.22} ry={8.44} />
                <path
                  className="the-mask_svg__cls-15"
                  d="M315.39 485a4.57 4.57 0 01-.28-1.84 1.38 1.38 0 011.42-.68 9.54 9.54 0 013.17 1.2 3 3 0 011.05 1.91c0 .48-.56 1-1.06 1.16-1.25.39-3.05-.31-4.3-1.75z"
                  transform="translate(326.88 450.43)"
                />
              </g>
              <g id="the-mask_svg__pupille-left">
                <ellipse cx={540.16} cy={929.58} rx={11.22} ry={8.44} />
                <path
                  className="the-mask_svg__cls-15"
                  d="M210.34 482.73a6.09 6.09 0 01.55 1.19c.09.41.17 1 0 1.25a1.39 1.39 0 01-1.2.21c-.94-.28-1.83-.7-2.74-1.05a2.9 2.9 0 01-1.72-3.92 1.23 1.23 0 01.93-.51c.66 0 1.32.21 2 .27 1.55.14 2.48 1.06 2.18 2.56z"
                  transform="translate(326.88 450.43)"
                />
              </g>
            </g>
          </g>
          <path
            id="the-mask_svg__small-wave"
            d="M286.46 1021.75s221.84 246.89 373 137c127-92.36 301 127.79 301 127.79"
            stroke="#bba800"
            strokeWidth={54}
            strokeMiterlimit={10}
            fill="none"
            className={
              css`animation: wavingSmall 1200ms ease;
                  animation-delay: 1.6s;
                  animation-fill-mode: forwards;
                  stroke-dasharray: 700;`
              }
          />
          <circle
            id="the-mask_svg__bottom-left-big"
            cx={356.81}
            cy={1284.9}
            r={110.07}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 1.6s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin:50% 50%;` + ' ' + 'the-mask_svg__cls-4'
              }
          />
          <circle
            id="the-mask_svg__bottom-left-small"
            cx={356.81}
            cy={1284.9}
            r={42.64}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 2s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin:50% 50%;` + ' ' + 'the-mask_svg__cls-5'
              }
          />
          <circle
            id="the-mask_svg__top-center-big"
            cx={586.7}
            cy={450.43}
            r={75.87}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 2.1s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin:50% 50%;` + ' ' + 'the-mask_svg__cls-5'
              }
          />
          <circle
            id="the-mask_svg__top-center-small"
            cx={587.7}
            cy={450.43}
            r={31.03}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 2.4s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin:50% 50%;` + ' ' + 'the-mask_svg__cls-18'
              }
          />
          <circle
            id="the-mask_svg__bottom-right-big"
            cx={862.2}
            cy={1302.11}
            r={45.86}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 2.7s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin:50% 50%;` + ' ' + 'the-mask_svg__cls-5'
              }
          />
          <circle
            id="the-mask_svg__bottom-right-small"
            cx={862.81}
            cy={1302.11}
            r={18.76}
            className={
              css`animation: circling 1500ms ease;
                  animation-delay: 2.9s;
                  animation-fill-mode: forwards;
                  transform-box: fill-box;
                  transform-origin: 50% 50%;` + ' ' + 'the-mask_svg__cls-18'
              }
          />
        </g>
      </g>
    </svg>
  );
}


export default SvgTheMask;