import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { FONTS } from '../../../../constants/theme';

const EmptyCheckIn = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.headerText}>Check In</Text>

            {/* Cards Section */}
            <View style={styles.frameParent1}>
                <Image
                    style={[styles.frameChild1]}
                    resizeMode="cover"
                    source={require("../../../../assets/image/Chat-Image-2.png")}
                />
                <Image
                    style={[styles.frameItem1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../../../../assets/image/Chat-Image.png")}
                />
                <Image
                    style={[styles.frameInner, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../../../../assets/image/Chat-Image-3.png")}
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerTitle}>Arrive at the Location</Text>
                <Text style={styles.footerText}>
                    Checking in at a location ensures that your presence is registered and relevant parties are informed.
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
    cardsContainer: {
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
    },
    card: {
        width: 120,
        height: 150,
        borderRadius: 15,
        marginRight: 15,
        overflow: 'hidden',
        backgroundColor: '#fff',
        elevation: 5, // For Android shadow
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    footer: {
        marginTop: 0,
        alignItems: 'center',
        justifyContent: "center"
    },
    footerTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: FONTS._500Medium.fontFamily
    },
    footerText: {
        color: '#ddd',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20
    },
    frameParent1: {
        width: "100%",
        height: 204,
        marginTop: 83,
    },
    frameChild1: {
        left: 124,
        width: 121,
        height: 177,
        overflow: "hidden",
        borderRadius: 9,
        position: "absolute",
        top: 0,
    },
    frameItem1: {
        marginLeft: -180.5,
        top: 0,
        height: 202,
        width: 163,
        left: "50%",
    },
    frameLayout: {
        height: 202,
        width: 163,
        left: "50%",
        overflow: "hidden",
        borderRadius: 9,
        position: "absolute",
    },
    frameInner: {
        marginLeft: 17.93,
        top: 2,
    }
});

export default EmptyCheckIn;
