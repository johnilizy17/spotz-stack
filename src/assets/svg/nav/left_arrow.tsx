import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function LeftArrow({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M20 12.9859H7.8L12.5 17.6197L11.1 19L4 12L11.1 5L12.5 6.38028L7.8 11.0141H20V12.9859Z" fill="white" />
        </Svg>
    )
}