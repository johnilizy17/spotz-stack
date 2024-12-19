import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={41} height={40} viewBox="0 0 41 40" fill="none" {...props}>
      <Circle cx={20.7817} cy={20} r={20} fill="#181C23" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.232 10.287a.75.75 0 01.518.713v6.25H28a.751.751 0 01.607 1.19l-8 11A.75.75 0 0119.25 29v-6.25H14a.75.75 0 01-.607-1.191l8-11a.75.75 0 01.84-.272z"
        fill={props.fill ?? '#fff'}
      />
    </Svg>
  );
}

export default SvgComponent;
