import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Eye({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"16"} height={height?height:"16"} viewBox="0 0 16 16" fill="none" >
            <Path d="M10.3871 7.99995C10.3871 9.31995 9.32044 10.3866 8.00044 10.3866C6.68044 10.3866 5.61377 9.31995 5.61377 7.99995C5.61377 6.67995 6.68044 5.61328 8.00044 5.61328C9.32044 5.61328 10.3871 6.67995 10.3871 7.99995Z" stroke={color?color:"white"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M8.00038 13.5133C10.3537 13.5133 12.5471 12.1266 14.0737 9.72665C14.6737 8.78665 14.6737 7.20665 14.0737 6.26665C12.5471 3.86665 10.3537 2.47998 8.00038 2.47998C5.64705 2.47998 3.45372 3.86665 1.92705 6.26665C1.32705 7.20665 1.32705 8.78665 1.92705 9.72665C3.45372 12.1266 5.64705 13.5133 8.00038 13.5133Z" stroke={color?color:"white"} stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}