import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Circle } from "react-native-svg";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { COLORS, FONTS } from "../../../../constants/theme";
import { useSelector } from "react-redux";
import calculatePercentages from "../../../../service/url/variable/objectPercentage";

const ProfileCirlce = () => {
    const {onboardingData} = useSelector((a:{user:{onboardingData:any}})=>a.user)
    const [percentage, setPercentage] = useState(19); // Set the percentage dynamically if needed

    return (
        <View style={styles.container}>
            {/* Circular Progress */}
            <AnimatedCircularProgress
                size={150} // Diameter of the circle
                width={10} // Thickness of the circular bar
                fill={calculatePercentages(onboardingData)} // Progress percentage

                tintColor={COLORS.magenta_pink} // Color of the progress bar
                rotation={180} // Start angle of the circle
                lineCap="round" // Ends of the circle
            >
                {() => (
                    <View style={styles.content}>
                        {/* Profile Image */}
                        <Image
                            source={onboardingData.selfieUrls && onboardingData.selfieUrls[0]?{uri:onboardingData.selfieUrls[0]}: { uri: "data:image/jpeg;base64,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" }}
                            style={styles.image}
                        />
                    </View>
                )}
            </AnimatedCircularProgress>

            {/* Percentage Label */}
            <View style={styles.percentage}>
                <Text style={{color:COLORS.white, fontSize: 11.38}}>{`${calculatePercentages(onboardingData)}%`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    percentage: {
        position: "absolute",
        bottom: 0,
        fontSize: 11.38,
        fontFamily: FONTS._500Medium.fontFamily,
        backgroundColor: COLORS.magenta_pink,
        width: 55,
        height: 19.5,
        borderRadius: 19.5,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontWeight: "500",
        color: COLORS.white,
    },
});

export default ProfileCirlce;
