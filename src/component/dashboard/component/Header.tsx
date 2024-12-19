import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Setting from '../../../assets/svg/nav/settings';
import { COLORS, FONTS } from '../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import LeftArrow from '../../../assets/svg/nav/left_arrow';
import More from '../../../assets/svg/nav/more';
import Info from '../../../assets/svg/nav/Info';
import SettingsPopScreen from './Settings/SettingsPopScreen';

export function HeaderProfile({ setDisplay }: { setDisplay?: any }) {


    const { width } = Dimensions.get("window");
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            width: width

        },
        containerText: {
            fontSize: 28,
            fontWeight: "500",
            color: COLORS.white,
            fontFamily: FONTS._500Medium.fontFamily
        }
    })


    return (
        <>
            <View style={styles.container}>
                <Text style={styles.containerText}>
                    Profile
                </Text>
                <TouchableOpacity style={{ padding: 10 }}
                    onPress={() => setDisplay(true)}
                >
                    <Setting />
                </TouchableOpacity>
            </View>
        </>
    )
}

export function HeaderSettingProfile({ setActiveTab }: { setActiveTab: any }) {


    const { width } = Dimensions.get("window");

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            width: width

        },
        containerIcon: {
            width: 30,
            height: 30,
            backgroundColor: COLORS.white_60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
        }
    })


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setActiveTab("profile")}>
                <View style={styles.containerIcon}>
                    <LeftArrow />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export function HeaderSettingMenu({ title }: { title: string }) {


    const { width } = Dimensions.get("window");

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            width: width

        },
        containerIcon: {
            width: 30,
            height: 30,
            backgroundColor: COLORS.white_60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
        },
        containerText: {
            fontWeight: "600",
            fontSize: 18,
            fontFamily: FONTS._600Medium.fontFamily,
            color: COLORS.white
        }
    })


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.containerIcon}>
                    <LeftArrow />
                </View>
            </TouchableOpacity>
            <Text style={styles.containerText}>
                {title}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <More />
            </TouchableOpacity>
        </View>
    )
}

export function HeaderSettingInfo({ title, setMove }: { title: string, setMove: any }) {


    const { width } = Dimensions.get("window");

    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            width: width

        },
        containerIcon: {
            width: 30,
            height: 30,
            backgroundColor: COLORS.white_60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center"
        },
        containerText: {
            fontWeight: "600",
            fontSize: 18,
            fontFamily: FONTS._600Medium.fontFamily,
            color: COLORS.white
        }
    })


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.containerIcon}>
                    <LeftArrow />
                </View>
            </TouchableOpacity>
            <Text style={styles.containerText}>
                {title}
            </Text>
            <TouchableOpacity style={{paddingTop:16, paddingBottom:16}} onPress={() =>{setMove(true)}}>
                <More />
            </TouchableOpacity>
        </View>
    )
}