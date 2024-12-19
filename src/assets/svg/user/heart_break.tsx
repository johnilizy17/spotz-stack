import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function HeartBreak({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"20"} height={height?height:"19"} viewBox="0 0 20 19" fill="none" >
            <Path d="M11.164 0.732415L8.75024 3.74991L10.6252 8.74992L8.12524 12.4999L10.0002 18.7499C28.1677 6.74491 17.1965 -2.76259 11.164 0.732415ZM9.19774 0.962415L6.87524 3.74991L8.75024 8.74992L6.87524 12.4999L9.14399 18.1712C-8.16601 6.19991 3.35649 -3.08384 9.19774 0.962415Z" fill={color?color:"#FF2D89"} />
        </Svg>
    )
}