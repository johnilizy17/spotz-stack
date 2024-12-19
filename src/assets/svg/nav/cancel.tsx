import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Cancel({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"18"} height={height?height:"18"} viewBox="0 0 18 18" fill="none" >
            <Path d="M2.46667 17.1668L0.833332 15.5335L7.36667 9.00016L0.833332 2.46683L2.46667 0.833496L9 7.36683L15.5333 0.833496L17.1667 2.46683L10.6333 9.00016L17.1667 15.5335L15.5333 17.1668L9 10.6335L2.46667 17.1668Z" fill={color?color:"#FEF7FF"} />
        </Svg>
    )
}