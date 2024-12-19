import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Symbol({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"8"} height={height?height:"8"} viewBox="0 0 8 8" fill="none" >
            <Path d="M3.15747 7.76782C2.89185 7.76782 2.69263 7.67236 2.51416 7.46069L0.372559 4.8667C0.223145 4.69653 0.169189 4.54297 0.169189 4.36865C0.169189 3.97852 0.459717 3.69214 0.862305 3.69214C1.09473 3.69214 1.26074 3.77515 1.41431 3.95776L3.13672 6.09521L6.53174 0.741211C6.69775 0.479736 6.86792 0.380127 7.14185 0.380127C7.54028 0.380127 7.83081 0.662354 7.83081 1.05249C7.83081 1.19775 7.78516 1.35132 7.67725 1.51733L3.80908 7.43164C3.65967 7.65991 3.4397 7.76782 3.15747 7.76782Z" fill={color?color:"#33CE59"} />
        </Svg>
    )
}