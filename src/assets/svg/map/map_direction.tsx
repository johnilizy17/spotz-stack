import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function MapDirection({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"20"} height={height?height:"19"} viewBox="0 0 20 19" fill="none" >
            <Path d="M8.68593 10.4089V17.1653C8.68593 17.8472 9.28679 18.4 10.028 18.4C10.5363 18.4 11.001 18.1358 11.2283 17.7175L19.5433 2.41788L19.9424 1.31648C20.2253 0.5356 19.4178 -0.207308 18.569 0.0529865L17.3719 0.42012L0.741867 8.06992C0.287202 8.27907 0 8.70659 0 9.17426C0 9.85615 0.600856 10.4089 1.34205 10.4089H8.68593Z" fill={color?color:"#F1F5F9"} />
        </Svg>
    )
}