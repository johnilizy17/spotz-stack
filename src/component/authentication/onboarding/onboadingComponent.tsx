import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import Button from '../../../constants/Button';
import { COLORS, FONTS } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';

export default function OnboardingComponent({ adjustment2 }: { adjustment2: number }) {

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        layoutOnboarding: {
            height:330,
            width: "100%"
        },
        layoutOnboardingComponent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: 22,
            width: "100%",
            paddingLeft: 10,
            paddingRight: 10
        },
        description: {
            fontSize: 26,
            color: "#fff",
            fontFamily: "Inter-Black",
            fontWeight: "500",
            textAlign: "center",
            marginBottom: 10,
        },
        terms: {
            fontSize: 13,
            color: COLORS.silver_gray,
            fontFamily: "Inter-Black",
            fontWeight: "400",
            textAlign: "center"
        },
        link: {
            textDecorationLine: "underline",
            fontFamily: FONTS._500Medium.fontFamily,
            fontWeight: "500",
        },
        getStartedButton: {
            marginTop: 20,
            backgroundColor: COLORS.magenta_pink,
            padding: 15,
            borderRadius: 8,
            width: '100%',
            alignItems: 'center',
        },
        getStartedText: {
            color: COLORS.white,
            fontSize: 16,
            fontWeight: "bold",
            fontFamily: "Inter-Black",
        },
        loginButton: {
            backgroundColor: COLORS.charcoal_black,
            marginTop: 16,
            padding: 15,
            borderRadius: 8,
            width: '100%',
            alignItems: "center",
            borderColor: COLORS.white,
            fontFamily: "Inter-Black",
        }
    })

    return (
        <View style={styles.layoutOnboarding}>
            <View style={styles.layoutOnboardingComponent}>
                <Text style={styles.description}>
                    Find real connections in real places.
                </Text>

                <View>
                    <Text style={styles.terms}>
                        By tapping get started you agree to our <Text style={styles.link}>Terms and Conditions. </Text>
                    </Text>
                </View>
                <View>
                    <Text style={styles.terms}>
                        Learn how we use your data in our <Text style={styles.link}>Privacy Policy</Text>
                    </Text>
                </View>

                <Pressable
                    style={styles.getStartedButton}
                    onPress={() => navigation.navigate("GetStarted" as never)}>
                    <Text style={styles.getStartedText}>Get Started</Text>
                </Pressable>

                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Login" as never)}>
                    <Text style={styles.getStartedText}>Login</Text>
                </Pressable>

            </View>
        </View>
    )
}