import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Message({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"19"} height={height?height:"21"} viewBox="0 0 19 21" fill="none" >
            <Path d="M18.235 2.6856C18.667 1.4906 17.509 0.332602 16.314 0.765602L1.70904 6.0476C0.510042 6.4816 0.365042 8.1176 1.46804 8.7566L6.13004 11.4556L10.293 7.2926C10.4816 7.11044 10.7342 7.00965 10.9964 7.01193C11.2586 7.01421 11.5095 7.11938 11.6949 7.30478C11.8803 7.49019 11.9854 7.741 11.9877 8.0032C11.99 8.2654 11.8892 8.518 11.707 8.7066L7.54404 12.8696L10.244 17.5316C10.882 18.6346 12.518 18.4886 12.952 17.2906L18.235 2.6856Z" fill={color?color:"white"} />
        </Svg>
    )
}