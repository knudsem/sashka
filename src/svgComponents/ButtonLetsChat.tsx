import * as React from "react"
import { css } from '@emotion/css'

function SvgButtonLetsChat(props: any) {
   const isMobile = props.mobile_screen;
   if(isMobile){
    console.log('mobile');
   }
  return (
    <svg
      id="button-lets-chat_svg__chat-button"
      preserveAspectRatio="xMinYMax"
      data-name="Calque 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1083 272"
      {...props}
    >
      <defs>
        <style>
          {
            ".button-lets-chat_svg__cls-3-button{fill:none;stroke:#fff;stroke-miterlimit:10;stroke-width:5px}"
          }
        </style>
      </defs>
      <g id="button-lets-chat_svg__button-general" className={
        css`cursor: pointer;`
      }>
        <path
          fill="#fff"
          stroke="#0f9623"
          strokeWidth={15}
          d="M350.5 272H1083V0H350.5"
          className={isMobile ? css`transform: scaleX(0);
                animation: buttonfade 0.5s linear;
                animation-fill-mode: forwards;
                transform-origin: center;animation-delay: 1.8s;` : css`transform: scaleX(0);
                animation: buttonfade 0.5s linear;
                animation-fill-mode: forwards;
                transform-origin: center;animation-delay: 3.8s;`
              }/>

        <text x={500} y={160} fill="#0f9623" fontSize={85}
                className={isMobile ? css`opacity: 0;
                animation: fadeIn 0.3s linear;
                animation-fill-mode: forwards;
                transform-origin: center; animation-delay: 2.4s;` : css`opacity: 0;
                animation: fadeIn 0.3s linear;
                animation-fill-mode: forwards;
                transform-origin: center; animation-delay: 4.1s;`
          }>
          {"Let's chat!"}
        </text>
        <g id="button-lets-chat_svg__button-chat">
          <path fill="#0f9623" d="M350.5 0H0v272h350.5"
           className={isMobile ? css`transform: scaleX(0);
                animation: buttonfade 0.5s linear;
                animation-delay: 1.8s;
                animation-fill-mode: forwards;
                transform-origin: center;` : css`transform: scaleX(0);
                animation: buttonfade 0.5s linear;
                animation-delay: 3.8s;
                animation-fill-mode: forwards;
                transform-origin: center;`
          }/>
          <g id="button-lets-chat_svg__chat-bubble"
          className={isMobile ? css`animation: chatting 1s linear;
                animation-delay: 2.3s;
                opacity: 0;
                animation-fill-mode: forwards;
                transform-box: fill-box;
                transform-origin: 50% 50%;
                stroke-dasharray: 800;` : css`animation: chatting 1s linear;
                animation-delay: 4.2s;
                opacity: 0;
                animation-fill-mode: forwards;
                transform-box: fill-box;
                transform-origin: 50% 50%;
                stroke-dasharray: 800;`
          }>
            <path
              className="button-lets-chat_svg__cls-3-button"
              d="M520.73 418.31h-95a12 12 0 00-12 12v73l12-11h95a12 12 0 0012-12v-50a12 12 0 00-12-12z"
              transform="translate(-338.5 -349.5)"
            />
            <g id="button-lets-chat_svg__chat-lines">
              <path
                className="button-lets-chat_svg__cls-3-button"
                d="M106.23 91.81h65.51M106.46 110.24h44.77"
              />
            </g>
            <path
              className="button-lets-chat_svg__cls-3-button"
              d="M542.39 468.81h58.84a12 12 0 0112 12v73l-12-11h-95a12 12 0 01-12-12v-30"
              transform="translate(-338.5 -349.5)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgButtonLetsChat;
