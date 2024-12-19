import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Button, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import CheckDetails from './CheckDetails';
import Cancel from '../../../../assets/svg/nav/cancel';

const CheckinPop = ({ setMatchPage, CheckinPop, selectedQuestion }: { setMatchPage: any, CheckinPop: any, selectedQuestion: number }) => {
    const { width, height } = Dimensions.get("window")
    const slideAnim = useRef(new Animated.Value(height)).current; // Initial position outside screen
    const [display, setDisplay] = useState(-height)

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
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
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
            toValue: 600, // Target position
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for performance
        }).start();
    };

    useEffect(() => {
        if (CheckinPop) {
            setDisplay(0)
            startSliding()
        } else {
            backSliding()
            setTimeout(() => {
                setDisplay(-600)
            }, 1200)
        }
    }, [CheckinPop])
    return (
        <KeyboardAvoidingView
            behavior="padding" // Adjust for header height if necessary
        >
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.slidingBox,
                        { transform: [{ translateY: slideAnim }] }, // Bind slideAnim to horizontal movement
                    ]}
                >
                    <View style={{ width: "100%", height: height - 300, justifyContent: "flex-end", paddingBottom: 20, alignItems: "center" }}>
                        <TouchableOpacity onPress={() => setMatchPage()}>
                            <Cancel />
                        </TouchableOpacity>
                    </View>
                    <CheckDetails selectedQuestion={selectedQuestion} setMatchPage={setMatchPage} CheckinPop={CheckinPop} />
                </Animated.View>
            </View>
        </KeyboardAvoidingView>
    );
};


export default CheckinPop;
