import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Button, Dimensions } from 'react-native';
import GenderDetails from './GenderDetails';
import { COLORS } from '../../../../../constants/theme';

const GenderPop = ({ setProfilePop, profilePop }: { setProfilePop: any, profilePop: string }) => {
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
      backgroundColor: COLORS.black_card,
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
    if (profilePop === "gender") {
      setDisplay(-60)
      startSliding()
    } else {
      backSliding()
      setTimeout(() => {
        setDisplay(-600)
      }, 1200)
    }
  }, [profilePop])
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slidingBox,
          { transform: [{ translateY: slideAnim }] }, // Bind slideAnim to horizontal movement
        ]}
      >
        <GenderDetails setProfilePop={setProfilePop} />
      </Animated.View>
    </View>
  );
};


export default GenderPop;
