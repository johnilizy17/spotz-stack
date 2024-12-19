import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';
import Header from '../../../../../constants/Layout/Header';
import { COLORS, FONTS } from '../../../../../constants/theme';
import WithNoAuth from '../../../../../constants/HOC/withNoAuth';
import Button from '../../../../../constants/Button';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { onboarding } from '../../../../../features/slice/userSlice';
import { updateProfileService } from '../../../../../service/url/auth/profile';
import { showMessage } from 'react-native-flash-message';

const HEIGHT_DATA = [
    { "number": 1, "id": "1", "feet": 1.0, "inches": 30.5 },
    { "number": 2, "id": "2", "feet": 1.1, "inches": 33.5 },
    { "number": 3, "id": "3", "feet": 1.2, "inches": 36.6 },
    { "number": 4, "id": "4", "feet": 1.3, "inches": 39.6 },
    { "number": 5, "id": "5", "feet": 1.4, "inches": 42.7 },
    { "number": 6, "id": "6", "feet": 1.5, "inches": 45.7 },
    { "number": 7, "id": "7", "feet": 1.6, "inches": 48.8 },
    { "number": 8, "id": "8", "feet": 1.7, "inches": 51.8 },
    { "number": 9, "id": "9", "feet": 1.8, "inches": 54.9 },
    { "number": 10, "id": "10", "feet": 1.9, "inches": 57.9 },
    { "number": 11, "id": "11", "feet": 2.0, "inches": 61.0 },
    { "number": 12, "id": "12", "feet": 2.1, "inches": 64.0 },
    { "number": 13, "id": "13", "feet": 2.2, "inches": 67.1 },
    { "number": 14, "id": "14", "feet": 2.3, "inches": 70.1 },
    { "number": 15, "id": "15", "feet": 2.4, "inches": 73.2 },
    { "number": 16, "id": "16", "feet": 2.5, "inches": 76.2 },
    { "number": 17, "id": "17", "feet": 2.6, "inches": 79.2 },
    { "number": 18, "id": "18", "feet": 2.7, "inches": 82.3 },
    { "number": 19, "id": "19", "feet": 2.8, "inches": 85.3 },
    { "number": 20, "id": "20", "feet": 2.9, "inches": 88.4 },
    { "number": 21, "id": "21", "feet": 3.0, "inches": 91.4 },
    { "number": 22, "id": "22", "feet": 3.1, "inches": 94.5 },
    { "number": 23, "id": "23", "feet": 3.2, "inches": 97.5 },
    { "number": 24, "id": "24", "feet": 3.3, "inches": 100.6 },
    { "number": 25, "id": "25", "feet": 3.4, "inches": 103.6 },
    { "number": 26, "id": "26", "feet": 3.5, "inches": 106.7 },
    { "number": 27, "id": "27", "feet": 3.6, "inches": 109.7 },
    { "number": 28, "id": "28", "feet": 3.7, "inches": 112.8 },
    { "number": 29, "id": "29", "feet": 3.8, "inches": 115.8 },
    { "number": 30, "id": "30", "feet": 3.9, "inches": 118.9 },
    { "number": 31, "id": "31", "feet": 4.0, "inches": 121.9 },
    { "number": 32, "id": "32", "feet": 4.1, "inches": 125.0 },
    { "number": 33, "id": "33", "feet": 4.2, "inches": 128.0 },
    { "number": 34, "id": "34", "feet": 4.3, "inches": 131.1 },
    { "number": 35, "id": "35", "feet": 4.4, "inches": 134.1 },
    { "number": 36, "id": "36", "feet": 4.5, "inches": 137.2 },
    { "number": 37, "id": "37", "feet": 4.6, "inches": 140.2 },
    { "number": 38, "id": "38", "feet": 4.7, "inches": 143.3 },
    { "number": 39, "id": "39", "feet": 4.8, "inches": 146.3 },
    { "number": 40, "id": "40", "feet": 4.9, "inches": 149.4 },
    { "number": 41, "id": "41", "feet": 5.0, "inches": 152.4 },
    { "number": 42, "id": "42", "feet": 5.1, "inches": 155.4 },
    { "number": 43, "id": "43", "feet": 5.2, "inches": 158.5 },
    { "number": 44, "id": "44", "feet": 5.3, "inches": 161.5 },
    { "number": 45, "id": "45", "feet": 5.4, "inches": 164.6 },
    { "number": 46, "id": "46", "feet": 5.5, "inches": 167.6 },
    { "number": 47, "id": "47", "feet": 5.6, "inches": 170.7 },
    { "number": 48, "id": "48", "feet": 5.7, "inches": 173.7 },
    { "number": 49, "id": "49", "feet": 5.8, "inches": 176.8 },
    { "number": 50, "id": "50", "feet": 5.9, "inches": 179.8 },
    { "number": 51, "id": "51", "feet": 6.0, "inches": 182.9 },
    { "number": 52, "id": "52", "feet": 6.1, "inches": 185.9 },
    { "number": 53, "id": "53", "feet": 6.2, "inches": 189.0 },
    { "number": 54, "id": "54", "feet": 6.3, "inches": 192.0 },
    { "number": 55, "id": "55", "feet": 6.4, "inches": 195.1 },
    { "number": 56, "id": "56", "feet": 6.5, "inches": 198.1 },
    { "number": 57, "id": "57", "feet": 6.6, "inches": 201.2 },
    { "number": 58, "id": "58", "feet": 6.7, "inches": 204.2 },
    { "number": 59, "id": "59", "feet": 6.8, "inches": 207.3 },
    { "number": 60, "id": "60", "feet": 6.9, "inches": 210.3 },
    { "number": 71, "id": "71", "feet": 7.0, "inches": 213.4 },
    { "number": 72, "id": "72", "feet": 7.1, "inches": 216.4 },
    { "number": 73, "id": "73", "feet": 7.2, "inches": 219.5 },
    { "number": 74, "id": "74", "feet": 7.3, "inches": 222.5 },
    { "number": 75, "id": "75", "feet": 7.4, "inches": 225.6 },
    { "number": 76, "id": "76", "feet": 7.5, "inches": 228.6 },
    { "number": 77, "id": "77", "feet": 7.6, "inches": 231.6 },
    { "number": 78, "id": "78", "feet": 7.7, "inches": 234.7 },
    { "number": 79, "id": "79", "feet": 7.8, "inches": 237.7 },
    { "number": 80, "id": "80", "feet": 7.9, "inches": 240.8 },
    { "number": 81, "id": "81", "feet": 8.0, "inches": 243.8 }
];

const HEIGHT_ITEM_HEIGHT = 60;

const HeightSelectionScreen = ({ setProfilePop }: { setProfilePop: any }) => {
    const [selectedHeight, setSelectedHeight] = useState(HEIGHT_DATA[19]);

    const handleSelectHeight = (item: any) => {
        setSelectedHeight(item);
    };

    const { width } = Dimensions.get("window")
    const [displayPage, setDisplayPage] = useState(0)
    const [value, setValue] = useState({ "number": 1, "id": "1", "feet": 1.2, "inches": 36.6 })
    const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const HeightSubmit = async () => {
        setLoading(true)
        try {
            const result = await updateProfileService({
                userId: user.userId, data: {
                    ...onboardingData,
                    height: { "feet": value.feet, "inches": value.inches }
                }
            })
            showMessage({
                message: "Height",
                description: `Height successfully updated`,
                type: "success"
            });
            dispatch(onboarding({
                ...onboardingData,
                height: { "feet": value.feet, "inches": value.inches }

            }))
            setProfilePop("")

        } catch (err) {
            showMessage({
                message: "Height",
                description: `Height failed to update`,
                type: "warning"
            });
            console.log(JSON.stringify(err))
        }
        setLoading(false)
    }

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        title: {
            color: COLORS.white,
            fontSize: 24,
            fontFamily: FONTS._500Medium.fontFamily,
            fontWeight: '500',
            marginBottom: 10,
            paddingTop: 26
        },
        subtitle: {
            color: COLORS.silver_gray,
            fontSize: 14,
            marginBottom: 40,
            fontFamily: FONTS._500Medium.fontFamily
        },
        heightSelector: {
            height: HEIGHT_ITEM_HEIGHT * 5,
            alignSelf: 'center',
            marginBottom: 40,
        },
        heightList: {
            alignItems: 'center',
        },
        heightItem: {
            height: HEIGHT_ITEM_HEIGHT,
            opacity: 0.5,
            fontSize: 15,
            justifyContent: 'center',
            fontFamily: FONTS._600Medium.fontFamily,
            alignItems: 'center',
            width: Dimensions.get('window').width - 32,
        },
        heightItem1: {
            height: HEIGHT_ITEM_HEIGHT,
            opacity: 0.6,
            fontSize: 19,
            justifyContent: 'center',
            fontFamily: FONTS._600Medium.fontFamily,
            alignItems: 'center',
            width: Dimensions.get('window').width - 32,
        },
        heightItem2: {
            height: HEIGHT_ITEM_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.charcoal_black,
            fontSize: 46,
            borderRadius: 10,
            fontFamily: FONTS._600Medium.fontFamily,
            width: Dimensions.get('window').width - 32,
        },
        heightItem3: {
            height: HEIGHT_ITEM_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 21.6,
            opacity: 0.6,
            fontFamily: FONTS._600Medium.fontFamily,
            width: Dimensions.get('window').width - 32,
        },
        heightItem4: {
            height: HEIGHT_ITEM_HEIGHT,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 11.77,
            opacity: 0.5,
            fontFamily: FONTS._600Medium.fontFamily,
            width: Dimensions.get('window').width - 32,
        },
        heightItemSelected: {
            backgroundColor: '#333',
            borderRadius: 10,
        },
        heightItemText: {
            color: '#aaa',
            fontSize: 16,
        },
        heightItemTextSelected: {
            opacity: 0.5,
            color: COLORS.white,
            fontSize: 14,
            fontFamily: FONTS._600Medium.fontFamily,
        },
        heightItemTextSelected1: {
            opacity: 0.6,
            color: COLORS.white,
            fontSize: 18,
            fontFamily: FONTS._600Medium.fontFamily,
        },
        heightItemTextSelected2: {
            fontSize: 22,
            color: COLORS.white
        },
        heightItemTextSelected3: {
            opacity: 0.6,
            color: COLORS.white,
            fontSize: 18
        },
        heightItemTextSelected4: {
            opacity: 0.5,
            color: COLORS.white,
            fontSize: 14
        },
        continueContainer: {
            position: "absolute",
            bottom: 32,
            width: width,
            left: 0,
            paddingLeft: 16,
            paddingRight: 16
        },
        continueButton: {
            backgroundColor: COLORS.magenta_pink,
            width: "100%",
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: "center"
        },
        continueButtonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold'
        },
        skipText: {
            color: '#aaa',
            textAlign: 'center',
            marginTop: 20,
            fontSize: 16,
        },
    });

    const renderHeightItem = ({ item }: { item: { id: string, feet: number, inches: number, number: number } }) => (
        <TouchableOpacity
            style={
                (item.number - 1) === displayPage ? styles.heightItem : (item.number - 1) - 1 == displayPage ? styles.heightItem1 : (item.number - 1) - 2 == displayPage ? styles.heightItem2 : (item.number - 1) - 3 == displayPage ? styles.heightItem3 : styles.heightItem4}
            onPress={() => handleSelectHeight(item)}
        >
            <Text
                style={
                    (item.number - 1) === displayPage ? styles.heightItemTextSelected : (item.number - 1) - 1 == displayPage ? styles.heightItemTextSelected1 : (item.number - 1) - 2 == displayPage ? styles.heightItemTextSelected2 : (item.number - 1) - 3 == displayPage ? styles.heightItemTextSelected3 : styles.heightItemTextSelected4}
            >
                {item.feet} ({item.inches})CM
            </Text>
        </TouchableOpacity>
    );

    function updateCurrentSlideIndex(e: any) {
        const contentOffsetX = e.nativeEvent.contentOffset.y;
        const currentIndex = Math.round(contentOffsetX / 60);
        setValue(HEIGHT_DATA[currentIndex + 2])
        setDisplayPage(currentIndex);
    }

    function updateCurrentIndex(e: any) {
        const scrollPosition = e.nativeEvent.contentOffset.y;
        const index = Math.round(scrollPosition / 60); // assuming item height is 50
        setValue(HEIGHT_DATA[index + 2])
        console.log("fjkdfnjkdf")
        setDisplayPage(index);
    }

    return (
        <View style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>How tall are you?</Text>
            <Text style={styles.subtitle}>
                Let’s get to know you! Please enter your height to personalise your
                experience.
            </Text>

            {/* Height Selection */}
            <View style={styles.heightSelector}>
                <FlatList
                    data={HEIGHT_DATA}
                    renderItem={renderHeightItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.heightList}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    onScroll={updateCurrentIndex}
                    getItemLayout={(data, index) => ({
                        length: HEIGHT_ITEM_HEIGHT,
                        offset: HEIGHT_ITEM_HEIGHT * index,
                        index,
                    })}
                />
            </View>

            {/* Continue and Skip Buttons */}
            <View style={styles.continueContainer}>
                <Button title="Continue" loading={loading} onPress={HeightSubmit} containerStyle={styles.continueButton} textStyle={styles.continueButtonText} />
            </View>
        </View>
    );
};

export default HeightSelectionScreen;
