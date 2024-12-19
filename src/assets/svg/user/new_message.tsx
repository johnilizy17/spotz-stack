import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export default function NewMessage({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"12"} height={height?height:"12"} viewBox="0 0 12 12" fill="none" >
            <Circle cx="6" cy="6" r="6" fill={color?color:"#FF2D89"} />
        </Svg>
    )
}