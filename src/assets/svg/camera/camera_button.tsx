import * as React from 'react';
import Svg, { Circle, SvgProps } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      {...props}>
      <Circle cx={35.8908} cy={35.8908} r={29.4894} fill="#fff" />
      <Circle
        cx={35.8908}
        cy={35.8908}
        r={33.8908}
        stroke="#fff"
        strokeWidth={3.52113}
      />
    </Svg>
  );
}

export default SvgComponent;
