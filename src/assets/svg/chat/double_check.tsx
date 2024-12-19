import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function DoubleCheck({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width ? width : "18"} height={height ? height : "18"} viewBox="0 0 18 18" fill="none" >
            <Path d="M13.5 4.5L5.25 12.75L1.5 9" stroke={color ? color : "#B6B7B8"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M16.5 7.5L10.875 13.125L9.75 12" stroke={color ? color : "#B6B7B8"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}