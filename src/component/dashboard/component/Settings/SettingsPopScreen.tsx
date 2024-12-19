import React, { useRef, useEffect, useState } from 'react';
import { Animated, StyleSheet, View, Button, Dimensions, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../../constants/theme';
import SettingsPop from './SettingsPop';
import Cancel from '../../../../assets/svg/nav/cancel';
import NotificationsSetting from './NotificationSetting';
import DeleteSettings from './DeleteSetting';
import DeleteAlert from './DeleteAlert';
import LogOutAlert from './LogOutAlert';

const SettingsPopScreen = ({ setMatchPage, CheckinPop }: { setMatchPage: any, CheckinPop: any }) => {
    const { width, height } = Dimensions.get("window")
    const slideAnim = useRef(new Animated.Value(height)).current; // Initial position outside screen
    const [display, setDisplay] = useState(-height)
    const [activate, setActivate] = useState(true)
    const [page, setPage] = useState("")

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
    }, [CheckinPop, page])


    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.slidingBox,
                    { transform: [{ translateY: slideAnim }] }, // Bind slideAnim to horizontal movement
                ]}
            >
                <View style={page === "deletePop" || page === "logout" ? { width: "100%", height: height - 356, justifyContent: "flex-end", paddingBottom: 20, alignItems: "center" } : { width: "100%", height: height - 500, justifyContent: "flex-end", paddingBottom: 20, alignItems: "center" }}>

                </View>

                {
                    page === "notification" ?
                        <NotificationsSetting setPage={setPage} />
                        :
                        page === "delete" ?
                            <DeleteSettings setPage={setPage} />
                            :
                            page === "deletePop" ?
                                <DeleteAlert setPage={setPage} />
                                :
                                page === "logout" ?
                                    <LogOutAlert setPage={setPage} />
                                    :
                                    <SettingsPop setPage={setPage} setMatchPage={setMatchPage} CheckinPop={CheckinPop} />
                }
            </Animated.View>
        </View>
    );
};

export default SettingsPopScreen;