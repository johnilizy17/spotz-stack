import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import LeftArrow from '../../../../assets/svg/nav/left_arrow';
import { COLORS, FONTS } from '../../../../constants/theme';
import TabBorder from '../../../../assets/svg/menu/TabBorder';
import Button from '../../../../constants/Button';
import { useDispatch } from 'react-redux';
import { logout } from '../../../../features/slice/userSlice';
import { useNavigation } from '@react-navigation/native';
import LogOutIcon from '../../../../assets/svg/settings/logoutIcon';

const LogOutAlert = ({ setPage }: { setPage: any }) => {

    const dispatch = useDispatch()
    const navigation = useNavigation()
    async function Logout() {
        dispatch(logout())
        navigation.navigate("OnBoarding" as never)
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
                    <TabBorder />
                </View>
                <View style={styles.content}>
                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.headerText}>Log out</Text>
                        </View>
                        <View style={styles.headerCircle}>
                            <LogOutIcon />
                        </View>
                    </View>
                    <Text style={styles.subHeader}>
                        Are you sure you want to log out?
                    </Text>
                    <View style={styles.buttonContainer}>
                        <Button containerStyle={styles.buttonNo} onPress={() => setPage("")} textStyle={styles.buttonText} title='No' />
                        <Button containerStyle={styles.buttonYes} onPress={() => Logout()} textStyle={styles.buttonText} title='Yes' />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 416,
        backgroundColor: COLORS.black,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    containerIcon: {
        width: 30,
        height: 30,
        backgroundColor: COLORS.white_60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    header: {
        marginBottom: 10,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.white,
        fontFamily: FONTS._500Medium.fontFamily
    },
    subHeader: {
        color: COLORS.silver_gray,
        textAlign: "center",
        marginVertical: 24,
        fontSize: 14,
        marginBottom: 30,
    },
    headerCircle: {
        backgroundColor: COLORS.charcoal_black,
        borderRadius: 80,
        height: 80,
        width: 80,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        padding: 16
    },
    buttonNo: {
        borderRadius: 10,
        backgroundColor: COLORS.magenta_pink
    },
    buttonYes: {
        borderRadius: 10,
        backgroundColor: COLORS.charcoal_black,
        marginTop: 16
    },
    buttonText: {
        fontFamily: FONTS._500Medium.fontFamily,
        fontSize: 16,
        fontWeight: "500"
    }
});

export default LogOutAlert;