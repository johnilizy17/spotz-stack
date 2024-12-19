import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Info({ width, height, color }: { width?: string, height?: string, color?: string }) {
    return (
        <Svg width={width?width:"20"} height={height?height:"21"} viewBox="0 0 20 21" fill="none" >
            <Path d="M10.0001 13.8332V10.4998M10.0001 7.1665H10.0084M18.3334 10.4998C18.3334 15.1022 14.6025 18.8332 10.0001 18.8332C5.39771 18.8332 1.66675 15.1022 1.66675 10.4998C1.66675 5.89746 5.39771 2.1665 10.0001 2.1665C14.6025 2.1665 18.3334 5.89746 18.3334 10.4998Z" stroke={color?color:"white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}