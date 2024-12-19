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
import { authRegister } from '../../service/url/auth';
import { useDispatch, useSelector } from 'react-redux';
import { onboarding } from '../../features/slice/userSlice';

export default function NameVerification({ route }: any) {

    const { width, height } = Dimensions.get('screen');
    const {email} = route.params
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const user = useSelector((a) => a)
    const [fullName, setName] = useState("");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            paddingBottom:0,
            height: height,
            position: "relative"
        },
        getStartedContainer: {
            flex: 1
        },
        header: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "500",
            fontFamily: FONTS._500Medium.fontFamily,
            marginBottom: 10,
        },
        subHeader: {
            color: "#aaa",
            fontSize: 14,
            fontFamily: FONTS._500Medium.fontFamily,
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

    const NameHolder = async () => {
        if (fullName.length > 2) {
            dispatch(onboarding({ name: fullName, email:email }))
            navigation.navigate("DateVerification" as never)
        }
    }

    return (
        <WithNoAuth>
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding" // Adjust for header height if necessary
            >
                <View style={styles.getStartedContainer}>
                    <Header title="" textColor={COLORS.white} />
                    <View style={{ flex: 1, paddingTop: 29 }}>
                        <Text style={styles.header}>Lets setup your account, what is your name?</Text>
                        <Text style={styles.subHeader}>
                            This is how you will appear on SpotZ
                        </Text>
                        <InputField change={setName} placeholder='Your name' />
                        <View style={{ width: "100%", left: 0, position: "absolute", bottom: 16 }}>
                            <Button onPress={NameHolder} containerStyle={fullName.length > 5 ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </WithNoAuth>
    )
}
