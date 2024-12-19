import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Button, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import Cancel from '../../../../assets/svg/nav/cancel';
import LocationDetails from './LocationDetails';

const LocationPop = ({ setMatchPage, CheckinPop }: { setMatchPage: any, CheckinPop: any }) => {
    const { width, height } = Dimensions.get("window")
    const slideAnim = useRef(new Animated.Value(height)).current; // Initial position outside screen
    const [display, setDisplay] = useState(-height)
    const [activate, setActivate] = useState(true)

    const styles = StyleSheet.create({
        container: {
            position: "absolute",
            bottom: display,
            opacity: 1,
            left: 0,
            zIndex: 1000,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
        },
        slidingBox: {
            width: width,
            height: height,
            backgroundColor: COLORS.black_transparent,
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
            toValue: height, // Target position
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for performance
        }).start();
    };

    const backSliding2 = () => {
        Animated.timing(slideAnim, {
            toValue: height, // Target position
            duration: 0, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for performance
        }).start();
    };

    useEffect(() => {
        if (CheckinPop) {
            setDisplay(0)
            startSliding()
            setActivate(true)
        } else {
            backSliding()
            setActivate(false)
            setTimeout(() => {
                setDisplay(-height)
            }, 1200)
        }
    }, [CheckinPop])


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.slidingBox,
                    { transform: [{ translateY: slideAnim }] }, // Bind slideAnim to horizontal movement
                ]}
            >
                <View style={{ width: "100%", height: height - 466, justifyContent: "flex-end", paddingBottom: 20, alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setMatchPage(false)}>
                        <Cancel />
                    </TouchableOpacity>
                </View>
                <LocationDetails setMatchPage={setMatchPage} />
            </Animated.View>
        </View>
    );
};

export default LocationPop;