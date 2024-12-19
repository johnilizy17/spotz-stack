import React, { useEffect, useState } from 'react';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { Dimensions, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../constants/Layout/Header';
import { COLORS, FONTS } from '../../constants/theme';
import Button from '../../constants/Button';
import PhoneInput from '../../constants/PhoneInput';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from 'react-redux';
import { onboarding } from '../../features/slice/userSlice';

export default function DateVerification() {

    const { width } = Dimensions.get('window');
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date())
    const dispatch = useDispatch()
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)
    const [dateState, setDateState] = useState({
        year: "YYYY",
        month: "MM",
        day: "DD",
        dateOfBirth: ""
    })
    const [open, setOpen] = useState(false)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            paddingBottom: 0,
            position: "relative"
        },
        header: {
            color: "#fff",
            fontSize: 28,
            fontWeight: "500",
            marginBottom: 10,
            fontFamily: FONTS._500Medium.fontFamily
        },
        subHeader: {
            color: "#aaa",
            fontFamily: FONTS._500Medium.fontFamily,
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
        },
        dateContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        dateText: {
            color: COLORS.silver_gray,
            fontFamily: FONTS._600Medium.fontFamily,
            fontSize: 16
        },
        dateActiveText: {
            color: COLORS.white
        },
        dateday: {
            width: 70,
            height: 48,
            display: "flex",
            backgroundColor: COLORS.charcoal_black,
            borderRadius: 10,
            color: COLORS.white,
            justifyContent: "center",
            alignItems: "center"
        },
        dateMonth: {
            width: 70,
            height: 48,
            display: "flex",
            backgroundColor: COLORS.charcoal_black,
            borderRadius: 10,
            color: COLORS.white,
            justifyContent: "center",
            alignItems: "center"
        },
        dateYear: {
            width: width - 200,
            height: 48,
            display: "flex",
            backgroundColor: COLORS.charcoal_black,
            borderRadius: 10,
            color: COLORS.white,
            justifyContent: "center",
            alignItems: "center"
        },
    })

    const DateHolder = () => {
        if (dateState.day == "DD" && dateState.month == "MM" && dateState.year == "YYYY") {
            showMessage({
                message: "Date of Birth",
                description: `Click the card and add a date`,
                type: "warning",
            });
        } else {
            dispatch(onboarding({ ...onboardingData, dateOfBirth: dateState.dateOfBirth }))
            navigation.navigate("HeightSelectionScreen" as never)
        }
    }

    const showDatePicker = () => {
        setOpen(true);
    };

    const hideDatePicker = () => {
        setOpen(false);
        showMessage({
            message: "Date of Birth",
            description: `Date have be cancelled`,
            type: "warning",
        });
    };

    const handleConfirm = (date: any) => {
        setOpen(false);
        const birthDate = JSON.stringify(date)
        const startDate = birthDate.slice(1, 20)
        const year = birthDate.slice(1, 5)
        const month = birthDate.slice(6, 8)
        const day = birthDate.slice(9, 11)
        setDateState({ year: year, month: month, day: day, dateOfBirth: startDate })
    };

    return (
        <>
            <WithNoAuth>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding" // Adjust for header height if necessary
                >
                    <Header title="" textColor={COLORS.white} />
                    <View style={{ flex: 1, paddingTop: 29 }}>
                        <Text style={styles.header}>Nice to meet you Morty, when is your birthday?</Text>
                        <Text style={styles.subHeader}>
                            You must be +18 to explore Spotz. Your age will appear
                            on your profile. Your date of birth will remain private
                        </Text>
                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                        >
                            <View style={styles.dateContainer}>
                                <View style={styles.dateday}>
                                    <Text style={styles.dateText}>
                                        {dateState.month}
                                    </Text>
                                </View>
                                <View style={styles.dateMonth}>
                                    <Text style={styles.dateText}>
                                        {dateState.day}
                                    </Text>
                                </View>
                                <View style={styles.dateYear}>
                                    <Text style={styles.dateText}>
                                        {dateState.year}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ width: width, paddingHorizontal:16, left: 0, display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", position: "absolute", bottom: 16 }}>
                        <Button onPress={DateHolder} containerStyle={dateState.day != "DD" && dateState.month != "MM" && dateState.year != "YYYY" ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                    </View>
                </KeyboardAvoidingView>
            </WithNoAuth>
            <DateTimePickerModal
                isVisible={open}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    )
}
