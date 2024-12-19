import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function DropDown({ width, height, color }: SVGDTO) {

    return (
        <Svg width={width ? width : "16"} height={height ? height : "16"} viewBox="0 0 16 16" fill="none">
            <Path d="M4 6L8 10L12 6" stroke={color ? color : "white"} stroke-linecap="round" stroke-linejoin="round" />
        </Svg>
    )
}