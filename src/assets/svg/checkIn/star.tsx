import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function Star({ width, height, color }: SVGDTO) {

    return (
        <Svg width={width ? width : "12"} height={height ? height : "12"} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M6.00005 9.5135L8.76671 11.1868C9.27338 11.4935 9.89338 11.0402 9.76005 10.4668L9.02672 7.32017L11.4734 5.20017C11.92 4.8135 11.68 4.08017 11.0934 4.0335L7.87338 3.76017L6.61338 0.786836C6.38671 0.246836 5.61338 0.246836 5.38671 0.786836L4.12671 3.7535L0.906715 4.02684C0.320048 4.0735 0.0800484 4.80684 0.526715 5.1935L2.97338 7.3135L2.24005 10.4602C2.10672 11.0335 2.72671 11.4868 3.23338 11.1802L6.00005 9.5135Z" fill={color ? color : "#B6B7B8"} />
        </Svg>
    )
}