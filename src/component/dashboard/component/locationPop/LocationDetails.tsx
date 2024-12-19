import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Star from '../../../../assets/svg/checkIn/star';
import Button from '../../../../constants/Button';
import { COLORS, FONTS } from '../../../../constants/theme';
import CheckInIcon from '../../../../assets/svg/menu/check_in';
import TabBorder from '../../../../assets/svg/menu/TabBorder';
import { useDispatch, useSelector } from 'react-redux';
import { checkOut } from '../../../../service/url/checkin/usersCheckin';
import { logoutCheckIn } from '../../../../features/slice/checkinSlice';
import { handleApiError } from '../../../../service/url/variable/handle';

const LocationDetails = ({ setMatchPage }: { setMatchPage: any }) => {

    const { location } = useSelector((a: { checkin: { location: any } }) => a.checkin)
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleCheckoutSpot = async () => {
        try {
            setLoading(true)
            const result = await checkOut(onboardingData.userId)
            setMatchPage(false)
            dispatch(logoutCheckIn())
            setLoading(false)
        } catch (err) {
            setLoading(false)
            handleApiError(err, "Check In")
        }
    }

    return (
        <View style={styles.container}>
            {/* Title and Check-ins */}
            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 6, marginBottom: 16 }}>
                <TabBorder />
            </View>
            <View style={styles.header}>
                <Text style={styles.title}>{location.name}</Text>
                <View style={styles.checkInRow}>
                    <CheckInIcon color={COLORS.magenta_pink} />
                    <Text style={styles.checkInText}>{location.activeUserCount} users checked in</Text>
                </View>
            </View>

            {/* Location and Details */}
            <View style={styles.infoSection}>
                <Text style={styles.address}>{location.address}</Text>
                {/* <View style={styles.metaRow}>
                    <Text style={styles.metaText}>Bar • Open until 2 AM • </Text>
                    <Star />
                    <Text style={styles.metaText}> 4.7 from 250 reviews</Text>
                </View> */}
                <Text style={styles.description}>
                    {location.editorialSummary}
                </Text>
            </View>

            {/* Images */}
            <View style={styles.imageSection}>
                <Image
                    source={{ uri: location.photoUrls[0] }} // Replace with your interior image URL
                    style={styles.mainImage}
                />
                <View style={styles.rowImages}>
                    <Image
                        source={{ uri: location.photoUrls[1] }} // Replace with your food image URL
                        style={styles.smallImage}
                    />
                    <View style={{ height: 10 }} />
                    <Image
                        source={{ uri: location.photoUrls[2] }} // Replace with your drinks image URL
                        style={styles.smallImage}
                    />
                </View>
            </View>
            <Button loading={loading} onPress={handleCheckoutSpot} title={"Check-out from location"} containerStyle={styles.button} textStyle={styles.buttonText} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 530,
        backgroundColor: COLORS.black_card,
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    header: {
        marginBottom: 16,
    },
    title: {
        color: COLORS.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 13,
        fontFamily: FONTS._500Medium.fontFamily
    },
    checkInRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkInText: {
        color: COLORS.white,
        fontSize: 15,
        marginLeft: 4,
        fontFamily: FONTS._500Medium.fontFamily
    },
    infoSection: {
        marginBottom: 16,
    },
    address: {
        color: COLORS.white,
        fontFamily: FONTS._500Medium.fontFamily,
        fontSize: 14,
        marginBottom: 4,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    metaText: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    description: {
        color: COLORS.white,
        fontFamily: FONTS._500Medium.fontFamily,
        fontSize: 14,
        lineHeight: 20,
    },
    imageSection: {
        flexDirection: "row",
        width: "100%",
        height: 210,
        overflow: "hidden",
        justifyContent: "space-between"
    },
    mainImage: {
        width: '50%',
        height: 210,
    },
    rowImages: {
        width: "48%"
    },
    smallImage: {
        width: '100%',
        height: 100,
    },
    button: {
        backgroundColor: COLORS.magenta_pink,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LocationDetails;
