import React, { useEffect, useState } from 'react';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../constants/Layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import Button from '../../constants/Button';
import PhoneInput from '../../constants/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import InputField from '../../constants/InputField';
import { EmailVerfy } from '../../service/url/auth';
import { useSelector } from 'react-redux';

export default function EmailVerification({ route }: any) {

    const { width } = Dimensions.get('screen');
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const { user } = useSelector((a: { user: any }) => a)
    const [loading, setLoading] = useState(false)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            paddingBottom: 0,
            position: "relative"
        },
        getStartedContainer: {
            flex: 1
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

    const emailHolder = async () => {
        setLoading(true)
        if (email.length > 7 && email.includes("@")) {
            const emailUser = user.user
            try {
                const VerifyEmail = await EmailVerfy({ id: emailUser.userId, email: email })
                showMessage({
                    message: "Email",
                    description: `Email successfullt submitted`,
                    type: "success",
                });
                navigation.navigate("NameVerification", { email: email })
            } catch (err) {
                console.log(err, "error")
            }
        } else {
            showMessage({
                message: "Email",
                description: `enter a correct email account`,
                type: "warning"
            });
        }
        setLoading(false)
    }

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <WithNoAuth>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding" // Adjust for header height if necessary
            >
                <View style={styles.getStartedContainer}>
                    <Header title="" textColor={COLORS.white} />
                    <View style={{ flex: 1, paddingTop: 29 }}>
                        <Text style={styles.header}>Whats your Email?</Text>
                        <Text style={styles.subHeader}>
                            We'll text you a code to verify you're really you. Message and data
                            rates may apply.
                        </Text>
                        <InputField contaynerStyle={{ outline: "none" }} change={setEmail} placeholder='Enter your email' />
                        <View style={{ width: "100%", left: 0, position: "absolute", bottom: 16 }}>
                            <Button loading={loading} onPress={emailHolder} containerStyle={email.length > 5 ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </WithNoAuth>
    )
}
