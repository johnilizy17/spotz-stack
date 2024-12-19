import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function CancelButton({ width, height, color }: SVGDTO) {

    return (
        <Svg width={width ? width : "12"} height={height ? height : "12"} viewBox="0 0 12 12" fill="none">
            <Path d="M1.15396 11.4517L0.00976562 10.3075L4.58655 5.73074L0.00976562 1.15396L1.15396 0.00976562L5.73074 4.58655L10.3075 0.00976562L11.4517 1.15396L6.87494 5.73074L11.4517 10.3075L10.3075 11.4517L5.73074 6.87494L1.15396 11.4517Z" fill={color ? color : "#FEF7FF"} />
        </Svg>
    )
}