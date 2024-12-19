import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

export default function HeartBreak({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"144"} height={height?height:"5"} viewBox="0 0 144 5" fill="none" >
            <Rect width={width?width:"144"} height={height?height:"5"} rx="2.5" transform="matrix(-1 0 0 1 144 0)" fill={color?color:"white"} />
        </Svg>
    )
}