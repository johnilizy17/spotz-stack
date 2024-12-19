import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS } from './theme';
import DropDown from '../assets/svg/nav/dropDown';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import CountryCode from '../service/url/variable/countryCode';
import CountryFlag from "react-native-country-flag";

export default function PhoneInput({ phoneNumber, setPhoneNumber }: { phoneNumber: string, setPhoneNumber: any }) {

    const handleContinue = () => {
        // Add your logic here (e.g., validation, API call)
    };
    const { width, height } = Dimensions.get("screen")
    const [subPhone, setSubPhone] = useState("")
    const [flag, setFlag] = useState("US")
    const [display, setDisplay] = useState(false)
    const styles = StyleSheet.create({

        inputContainer: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 10,
            marginBottom: 20,
            position: "relative"
        },
        countryCode: {
            color: "#fff",
            fontSize: 12,
            marginRight: 10,
        },
        codeContainer: {
            backgroundColor: COLORS.charcoal_black,
            flexDirection: "row",
            height: 45,
            marginRight: 20,
            borderRadius: 10,
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
            alignItems: "center",
            width: 92
        },
        input: {
            flex: 1,
            color: "#fff",
            backgroundColor: COLORS.charcoal_black,
            width: "100%",
            fontSize: 16,
            borderRadius: 10,
            padding: 10,
            height: 45
        },
        dropDownInput: { height: 200, width: 92, position: "absolute", top: 0, zIndex: 100 }
    })

    const reorganise = CountryCode.sort((a: any, b: any) => (a.dial_code > b.dial_code) ? 1 : ((b.dial_code > a.dial_code) ? -1 : 0));

    useEffect(() => {
        setPhoneNumber(`+1${phoneNumber.replace(subPhone, "")}`)
        setSubPhone("+1")
    }, [])
    return (
        <>

            <View style={styles.inputContainer}>
                {display &&
                    <ScrollView style={styles.dropDownInput}>
                        <View style={{ height: "100%" }}>
                            {reorganise.map((a: { dial_code: string, code: string }, b) => (
                                <TouchableOpacity onPress={() => {
                                    setPhoneNumber(`${a.dial_code}${phoneNumber.replace(subPhone, "")}`)
                                    setSubPhone(a.dial_code)
                                    setFlag(a.code)
                                    setDisplay(false)
                                }}>
                                    <View style={{ height: 50, display: "flex", flexDirection: "row", alignItems: "center", padding: 5, width: 100, backgroundColor: COLORS.charcoal_black }}>
                                        <CountryFlag isoCode={a.code} size={10} />
                                        <Text style={{ color: COLORS.white, marginLeft: 10 }}>
                                            {a.dial_code}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                }
                <TouchableOpacity onPress={() => setDisplay(true)}>
                    <View style={styles.codeContainer}>
                        <CountryFlag isoCode={flag} size={10} />
                        <View style={{marginLeft:5}}>
                            <Text style={styles.countryCode}>{subPhone}</Text>
                        </View>
                        <View>
                            <DropDown />
                        </View>
                    </View>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your phone number"
                    keyboardType="numeric"
                    placeholderTextColor="#aaa"
                    value={phoneNumber.replace(subPhone, "")}
                    onChangeText={(e) => setPhoneNumber(`${subPhone}${e}`)}
                />
            </View>
        </>
    )
}