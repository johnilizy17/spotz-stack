import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../../../constants/theme';

const FavouriteEmpity = () => {
    return (
        <View style={styles.container}>
            {/* Illustration */}
            <Text style={styles.headerText}>Liked you</Text>
            <View style={{
                justifyContent: "center", alignItems: "center",
                marginTop: 23
            }}>
                <Image
                    source={require('../../../../assets/image/like.png')} // Replace with your image path
                    style={styles.image}
                />

                {/* Title */}
                <Text style={styles.title}>Welcome to Your Like Hub!</Text>

                {/* Description */}
                <Text style={styles.description}>
                    You haven’t liked anything yet.Start exploring location you love!
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 0,
    },
    image: {
        width: 280,
        height: 280,
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: COLORS.white,
        fontFamily: FONTS._500Medium.fontFamily
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.white,
        fontFamily: FONTS._500Medium.fontFamily,
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#000',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default FavouriteEmpity;
