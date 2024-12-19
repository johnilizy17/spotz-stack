import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Pen({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"13"} height={height?height:"13"} viewBox="0 0 13 13" fill="none" >
            <Path d="M8.6445 1.5754C8.82597 1.38813 9.0429 1.23882 9.28263 1.13619C9.52237 1.03356 9.78013 0.979651 10.0409 0.9776C10.3017 0.975549 10.5602 1.0254 10.8016 1.12425C11.0429 1.2231 11.2621 1.36897 11.4465 1.55337C11.6309 1.73777 11.7768 1.95701 11.8757 2.19833C11.9745 2.43965 12.0244 2.69823 12.0223 2.959C12.0202 3.21977 11.9663 3.47753 11.8637 3.71727C11.7611 3.957 11.6118 4.17393 11.4245 4.3554L10.6545 5.1254L7.8745 2.3454L8.6445 1.5754ZM7.3445 2.8754L1.251 8.9689C1.031 9.1889 0.870997 9.4619 0.786997 9.7619L0.0134969 12.5244C-0.00437455 12.5884 -0.00489976 12.6561 0.0119751 12.7204C0.0288499 12.7847 0.062518 12.8434 0.10953 12.8904C0.156541 12.9374 0.215207 12.971 0.279514 12.9879C0.343822 13.0048 0.411459 13.0043 0.475497 12.9864L3.2375 12.2129C3.5377 12.1295 3.81111 11.9696 4.031 11.7489L10.125 5.6559L7.3445 2.8754Z" fill={color?color:"white"} />
        </Svg>
    )
}