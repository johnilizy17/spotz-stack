import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install via 'expo install @expo/vector-icons'
import { COLORS, FONTS } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import Love from '../../assets/svg/user/love';
import LoveFill from '../../assets/svg/user/loveFill';

export default function Match() {

    const navigation = useNavigation()

    return (
        <ImageBackground
            source={require("../../assets/image/Demo/profile.png")} // Replace with your image URL or local image
            style={styles.background}
        >
            <TouchableOpacity
                onPress={() => navigation.navigate("MatchGenerate" as never)}
                style={styles.closeButton}>
                <Ionicons name="close" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.content}>
                <LoveFill width='40' height='40' />
                <Text style={styles.subtitle}>You got a</Text>
                <View style={styles.row}>
                    <Text style={styles.mainText}>Match</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 50,
        left: 0,
        borderRadius: 20,
        padding: 5,
    },
    content: {
        alignItems: 'center',
        position: "absolute",
        fontFamily: FONTS._400Regular.fontFamily,
        bottom: 40
    },
    subtitle: {
        fontSize: 25.05,
        color: COLORS.white,
        marginBottom:-10,
        fontFamily: FONTS._400Regular.fontFamily,
        fontStyle: 'italic'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heartIcon: {
        marginRight: 5,
    },
    mainText: {
        fontSize: 96,
        fontWeight: '400',
        color: COLORS.white,
        fontFamily: "Salsa", // Customize font as needed
        lineHeight:117.7
    },
});
