import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Button, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import SubDetails from './SubDetails';

const SubPop = ({ setSubPage, subPop }: { setSubPage: any, subPop: string }) => {
  const slideAnim = useRef(new Animated.Value(600)).current; // Initial position outside screen
  const [display, setDisplay] = useState(-600)
  const { width } = Dimensions.get("window")

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: display,
      opacity: 1,
      left: 0,
      zIndex: 100,
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slidingBox: {
      width: width,
      backgroundColor: COLORS.black,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
  });

  const startSliding = () => {
    Animated.timing(slideAnim, {
      toValue: 0, // Target position
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  const backSliding = () => {
    Animated.timing(slideAnim, {
      toValue: 600, // Target position
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for performance
    }).start();
  };

  useEffect(() => {
    if (subPop) {
      setDisplay(0)
      startSliding()
    } else {
      backSliding()
      setTimeout(() => {
        setDisplay(-600)
      }, 1200)
    }
  }, [subPop])
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slidingBox,
          { transform: [{ translateY: slideAnim }] }, // Bind slideAnim to horizontal movement
        ]}
      >
        <SubDetails setMatchPage={setSubPage} subPop={subPop} />
      </Animated.View>
    </View>
  );
};


export default SubPop;
