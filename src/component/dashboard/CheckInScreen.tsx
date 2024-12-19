import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native';
import { COLORS } from '../../constants/theme';
import CheckInIcon from '../../assets/svg/menu/check_in';
import RightDropDown from '../../assets/svg/nav/right_dropdown';
import Time from '../../assets/svg/checkIn/time';
import Star from '../../assets/svg/checkIn/star';

const CheckInScreen = () => {

    const { width, height } = Dimensions.get("window")

    const fontSizeMoblie = width > 400 ? 14 : 12

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,

        },
        header: {
            marginTop: 20,
            marginBottom: 10,
        },
        headerText: {
            fontSize: 28,
            color: COLORS.white,
            fontWeight: '500',
            marginBottom: 27.5,
        },
        tabContainer: {
            flexDirection: 'row',
            marginBottom: 30,
        },
        activeTab: {
            padding: 10,
            width: "50%",
            borderBottomColor: COLORS.magenta_pink,
            borderBottomWidth: 1,
            marginRight: 5
        },
        inactiveTab: {
            backgroundColor: COLORS.charcoal_black,
            width: "50%",
            padding: 10,
            borderRadius: 10,
            marginLeft: 5
        },
        tabTextActive: {
            color: COLORS.magenta_pink,
            fontWeight: '400',
            fontSize: 14,
            textAlign: "center"
        },
        tabTextInactive: {
            color: COLORS.white,
            fontWeight: '400',
            fontSize: 14,
            textAlign: "center"
        },
        searchInput: {
            backgroundColor: '#222',
            padding: 10,
            borderRadius: 8,
            color: '#fff',
            marginBottom: 10,
        },
        content: {
            flex: 1,
        },
        card: {
            backgroundColor: '#111',
            borderRadius: 10,
            padding: 16,
            marginBottom: 20,
        },
        cardAdvert: {
            display: "flex",
            flexDirection: "row"
        },
        cardAdvertText: {
            fontSize: 16,
            fontWeight: "400",
            color: COLORS.white
        },
        cardTitle: {
            fontSize: 18,
            fontWeight: '400',
            color: COLORS.white,
            marginBottom: 4,
        },
        cardSubtitle: {
            fontSize: 14,
            color: '#888',
            marginBottom: 8,
        },
        cardAddress: {
            fontSize: 14,
            marginTop:24,
            color: COLORS.white,
            marginBottom: 8,
        },
        cardInfoRow: {
            flexDirection: 'row',
            marginBottom: 8,
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap"
        },
        infoText: {
            color: COLORS.silver_gray,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            fontSize: fontSizeMoblie
        },
        cardDescription: {
            color: COLORS.white,
            marginBottom: 16,
        },
        button: {
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-end"
        },
        buttonText: {
            color: COLORS.magenta_pink,
            fontWeight: '600',
            marginRight: 12.5,
            borderBottomColor: COLORS.magenta_pink,
            borderBottomWidth: 1,
            paddingBottom: 5
        },
    });

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Check-in</Text>
                <View style={styles.tabContainer}>
                    <TouchableOpacity style={styles.activeTab}>
                        <Text style={styles.tabTextActive}>Current Check-ins</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.inactiveTab}>
                        <Text style={styles.tabTextInactive}>Check-in History</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search Check-in History"
                    placeholderTextColor="#888"
                />
            </View>

            {/* Card Section */}
            <ScrollView style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>The Grand Oak Lounge & Rooftop Terrace</Text>
                    <View style={styles.cardAdvert}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <CheckInIcon height='16' width='16' color={COLORS.magenta_pink} />
                            <Text style={styles.cardAdvertText}>
                                5 users checked in
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.cardAddress}>123 Main Street, Orlando</Text>
                    <View style={styles.cardInfoRow}>
                        <Text style={styles.infoText}>🍸 Bar • </Text>
                        <Text style={styles.infoText}><Time /> Cuisine: American •</Text>
                        <Text style={styles.infoText}> <Star /> 4.7 from 250 reviews</Text>
                    </View>
                    <Text style={styles.cardDescription}>
                        A lively bar with a great selection of craft beers, signature cocktails, and live music on weekends.
                    </Text>
                    <View>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View Check-in</Text> <RightDropDown />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CheckInScreen;
