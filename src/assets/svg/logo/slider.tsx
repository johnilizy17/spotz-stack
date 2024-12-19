import * as React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export default function Slider() {
    return (
        <Svg width="50" height="5" viewBox="0 0 50 5" fill="none">
            <Rect width="20" height="5" rx="2" fill="white" />
            <Circle cx="27.5" cy="2.5" r="2.5" fill="white" />
            <Circle cx="37.5" cy="2.5" r="2.5" fill="white" />
            <Circle cx="47.5" cy="2.5" r="2.5" fill="white" />
        </Svg>
    )
}