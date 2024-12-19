import React, { useState } from 'react';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../constants/Layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import Button from '../../constants/Button';
import PhoneInput from '../../constants/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { authRegister } from '../../service/url/auth';

export default function GetStarted() {

    const { width, height } = Dimensions.get('screen');
    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16, 
            paddingBottom:0,
            position:"relative"
        },
        getStartedContainer: {
            height: height - 180,
            position: "relative",
        },
        header: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "500",
            marginBottom: 10,
            fontFamily: "Inter-Black"
        },
        subHeader: {
            color: "#aaa",
            fontSize: 14,
            marginBottom: 20,
             fontFamily: "Inter-Black"
        },
        button: {
            backgroundColor: COLORS.charcoal_black,
            width: "100%"
        },
        button2: {
            backgroundColor: COLORS.magenta_pink,
            width: "100%"
        },
        buttonText: {
            color: "#fff",
            fontSize: 16,
            fontFamily: "Inter-Black",
            fontWeight: "bold",
        }
    })

    const loginHolder = async () => {
        setLoading(true)
        try {
            if (phoneNumber.length > 7) {
                const result = await authRegister({ "phone": phoneNumber })
                
                
                if (result.status == 201 || result.status == 200) {
                    showMessage({
                        message: "OTP",
                        description: `An SMS has been sent to you`,
                        type: "success",
                    });
                    navigation.navigate("OTPVerificationScreen", { phoneNumber })
                    setLoading(false)
                } else {
                    showMessage({
                        message: "OTP",
                        description: result.message,
                        type: "danger",
                    });
                    setLoading(false)
                }
            } else {
                showMessage({
                    message: "OTP",
                    description: `Incorrect phone number entered`,
                    type: "danger",
                });
                setLoading(false)
            }
        } catch (e: any) {
            showMessage({
                message: "OTP",
                description: e.message,
                type: "danger",
            });
            setLoading(false)
        }
    }

    return (
        <WithNoAuth>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding" // Adjust for header height if necessary
            >
                <Header title="" textColor={COLORS.white} />
                <View style={{ flex: 1, paddingTop: 29 }}>
                    <Text style={styles.header}>Enter your phone number to sign up.</Text>
                    <Text style={styles.subHeader}>
                        We'll text you a code to verify you're really you. Message and data
                        rates may apply.
                    </Text>
                    <PhoneInput phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
                    <View style={{ width: "100%", left: 0, position: "absolute", bottom: 16 }}>
                        <Button loading={loading} onPress={loginHolder} containerStyle={phoneNumber.length > 10 ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                    </View>
                </View>
            </KeyboardAvoidingView> 
            
        </WithNoAuth>
    )
}
