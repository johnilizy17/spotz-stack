import React, { useState } from 'react';
import WithNoAuth from '../../../constants/HOC/withNoAuth';
import { Alert, Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../../constants/Layout/Header';
import { COLORS, FONTS } from '../../../constants/theme';
import Button from '../../../constants/Button';
import PhoneInput from '../../../constants/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import { authLogin } from '../../../service/url/auth';
import BeautifulAlert from '../../../constants/alert';

export default function Login() {

    const { width, height } = Dimensions.get('screen');
    const navigation = useNavigation()
    const [phoneNumber, setPhoneNumber] = useState("");
    const [loading, setLoading] = useState(false)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            paddingBottom: 0,
            position: "relative"
        },
        getStartedContainer: {
            flex: 1,
            height: height - 180
        },
        header: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "500",
            marginBottom: 10,
        },
        subHeader: {
            color: "#aaa",
            fontSize: 14,
            marginBottom: 20,
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
            fontFamily: FONTS._700Bold.fontFamily,
            fontWeight: "bold",
        }
    })

    const loginHolder = async () => {
        setLoading(true)
        if (phoneNumber.length > 7) {
            const result = await authLogin({ "phoneNumber": phoneNumber })
            Alert.alert(
                "OTP",
                `An SMS has been sent to you`);
            navigation.navigate("OTPLoginScreen", { phoneNumber })
            setLoading(false)
        } else {
            Alert.alert(
                "OTP",
                `Incorrect phone number entered`);
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
                    <Text style={styles.header}>Welcome Back</Text>
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
            <BeautifulAlert />
        </WithNoAuth>
    )
}
