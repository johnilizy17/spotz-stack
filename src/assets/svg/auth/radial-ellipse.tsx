import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { BlurView } from '@react-native-community/blur';
import Svg, { G, Ellipse, Defs, SvgProps } from 'react-native-svg';

// import { COLORS } from '../../../constants/theme';

function RadialEllipse(props: SvgProps) {
  return (
    <View>
      <Svg
        width={274}
        height={369}
        // viewBox="0 0 274 369"
        fill="none"
        {...props}>
        <G opacity={0.8}>
          <Ellipse
            cx={0}
            cy={0}
            rx={128.774}
            ry={126.415}
            transform="rotate(45 -66.554 28.446)"
            fill="#FF2D89"
          />
        </G>
        <Defs />
      </Svg>
      {/* <BlurView
        blurType="dark"
        style={styles.blurView}
        blurAmount={212}
        blurRadius={25}
        reducedTransparencyFallbackColor={COLORS.charcoal_black}
      /> */}
    </View>
  );
}

export default RadialEllipse;

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
