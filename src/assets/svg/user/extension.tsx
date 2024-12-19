import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Extension({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"6"} height={height?height:"10"} viewBox="0 0 6 10" fill="none" >
            <Path d="M1.5 8.75L5.25 5L1.5 1.25" stroke={color?color:"#FF2D89"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}