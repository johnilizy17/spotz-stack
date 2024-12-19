import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    ActivityIndicator,
} from 'react-native';
import Header from '../../../constants/Layout/Header';
import { COLORS, FONTS } from '../../../constants/theme';
import { showMessage } from 'react-native-flash-message';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../constants/Button';
import WithNoAuth from '../../../constants/HOC/DashboardAuth';
import { authLogin, authVerifySMS, getProfile } from '../../../service/url/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../../features/slice/userSlice';

const OTPLoginScreen = ({ route }: any) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const { phoneNumber } = route.params;
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const [resendSMS, setResendSMS] = useState(false)
    const navigation = useNavigation()
    const handleCodeChange = (index: any, value: any) => {
        if (value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            // Automatically focus next input
            if (value && index < 5) {
                inputs[index + 1]?.focus();
            }
        }
    };

    const inputs: any = [];

    const loginHolder = async () => {
        setResendSMS(true)
        const result = await authLogin({ "phoneNumber": phoneNumber })
        showMessage({
            message: "OTP",
            description: `An SMS has been sent to you`,
            type: "success",
        });
        setResendSMS(false)
    }


    const OTPHolder = async () => {
        setLoading(true)
        try {
            if (code[5] !== "") {
                const result = await authVerifySMS({
                    "phoneNumber": phoneNumber,
                    "verificationCode": code[0] + code[1] + code[2] + code[3] + code[4] + code[5]
                })
                dispatch(login(result.data))
                setLoading(false)
                if (result.status === 200) {
                    showMessage({
                        message: "OTP",
                        description: `${result.message}`,
                        type: "success",
                    });
                    navigation.navigate("Dashboard", phoneNumber)
                } else {
                    showMessage({
                        message: "OTP",
                        description: `incorrect pin`,
                        type: "danger",
                    });
                    setLoading(false)
                }
            } else {
                showMessage({
                    message: "OTP",
                    description: `Error OTP Incorrect`,
                    type: "danger",
                });
                setLoading(false)
            }
        } catch (err) {
            showMessage({
                message: "OTP",
                description: `Error OTP Incorrect`,
                type: "danger",
            });
            setLoading(false)
        }
    }

    useEffect(() => {
        if (code[5] && code[4] && code[3] && code[2] && code[1] && code[0] !== "") {
            OTPHolder()
        }
    }, [code[5]])

    return (
        <WithNoAuth>
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={{ flex: 1 }}>
                    <Header title="" textColor='white' />
                    <Text style={styles.title}>Enter your code</Text>
                    <Text style={styles.subtitle}>
                        Please enter the verification code we just sent to your phone number
                        <Text style={styles.phoneNumber}> {phoneNumber}</Text>
                    </Text>

                    <View style={styles.codeInputContainer}>
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={styles.codeInput}
                                value={digit}
                                onChangeText={(value) => handleCodeChange(index, value)}
                                keyboardType="numeric"
                                maxLength={1}
                                ref={(ref) => (inputs[index] = ref)}
                            />
                        ))}
                    </View>

                    <TouchableOpacity>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <View style={{ width: 150 }}>
                                <Text style={styles.resendCodeText}>
                                    Didn’t receive the SMS?
                                </Text>
                            </View>
                            <View style={{ width: 100 }}>
                                <TouchableOpacity onPress={loginHolder}>
                                    {resendSMS ? <ActivityIndicator size="small" color={COLORS.white} /> : <Text style={styles.resendButton}>Resend code</Text>}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{ width: "100%", left: 0, position: "absolute", bottom: 16 }}>
                        <Button loading={loading} onPress={OTPHolder} containerStyle={code[5] !== "" ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </WithNoAuth>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingBottom: 0
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backButtonText: {
        fontSize: 24,
        color: '#fff',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: FONTS._700Bold.fontFamily,
        fontWeight: "bold",
    },
    title: {
        color: '#fff',
        fontFamily: FONTS._700Bold.fontFamily,
        fontSize: 28,
        fontWeight: "500",
        textAlign: 'left',
        paddingTop: 28,
        marginBottom: 10,
    },
    subtitle: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'left',
        marginBottom: 40,
    },
    phoneNumber: {
        color: '#fff',
        fontWeight: 'bold',
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    codeInput: {
        width: 50,
        height: 50,
        backgroundColor: '#1a1a1a',
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 8,
    },
    resendCodeText: {
        color: '#aaa',
        textAlign: "center"
    },
    resendButton: {
        color: COLORS.magenta_pink,
        fontFamily: FONTS._700Bold.fontFamily,
        fontWeight: 'bold',
        marginLeft: 10
    },
    button: {
        backgroundColor: COLORS.charcoal_black,
        width: "100%"
    },
    button2: {
        backgroundColor: COLORS.magenta_pink,
        width: "100%"
    }
});

export default OTPLoginScreen;
