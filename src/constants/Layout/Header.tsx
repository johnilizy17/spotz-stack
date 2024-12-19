import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LeftArrow from '../../assets/svg/nav/left_arrow';
import Setting from '../../assets/svg/nav/settings';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../theme';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
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

export default function Header({ title, textColor }: { title: string, textColor: string }) {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                <View>
                    <LeftArrow />
                </View>
                <View>
                    <Text style={{ color: textColor, fontFamily: FONTS._500Medium.fontFamily }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export function Header2({ title, textColor }: { title: string, textColor: string }) {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.container}>
                <View style={styles.containerIcon}>
                    <LeftArrow />
                </View>
                <View>
                    <Text style={{ color: textColor, fontFamily: FONTS._500Medium.fontFamily }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

