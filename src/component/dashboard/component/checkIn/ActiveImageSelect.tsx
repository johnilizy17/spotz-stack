import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { HeaderSettingMenu } from '../Header';
import LoveCircle from '../../../../assets/svg/user/LoveCircle';
import { COLORS, FONTS } from '../../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import calculateAge from '../../../../service/url/variable/dataofBirth';
import { useSelector } from 'react-redux';

const ActivImageSelect = ({ item }: any) => {

    const { width, height } = Dimensions.get("window")
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)

    const navigation = useNavigation()

    function CommonInterest() {
        const commonElements = onboardingData.interests
        const secondElements = item.userDto.interests
        const commonArray = commonElements.filter((element: any) => secondElements.includes(element));
        return commonArray.length
    }

    const styles = StyleSheet.create({
        card: {
            position: 'relative',
            width: width - 20,
            height: height - 150,
            borderRadius: 10,
            overflow: 'hidden',
            alignSelf: 'center',
            marginBottom: 10,
            resizeMode: 'cover',
            backgroundColor: '#000'
        },
        image: {
            width: '100%',
            height: height - 150
        },
        detailsFlex: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 53,
            flexDirection: "row",
            width: "100%"
        },
        details: {
            padding: 15,
            position: "absolute",
            zIndex: 100,
            bottom: -10
        },
        name: {
            fontSize: 28,
            fontWeight: '600',
            fontFamily: "Inter-Black",
            color: COLORS.white,
        },
        commonInterests: {
            fontSize: 14,
            color: COLORS.white,
            fontFamily: FONTS._400Regular.fontFamily
        },
        infoRow: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginVertical: 5,
        },
        tag: {
            fontSize: 12,
            color: COLORS.white,
            backgroundColor: COLORS.black_card,
            paddingHorizontal: 10,
            paddingVertical: 10,
            fontFamily: FONTS._400Regular.fontFamily,
            borderRadius: 8,
            marginRight: 5,
            marginBottom: 5,
        },
        height: {
            fontSize: 12,
            color: '#666',
            marginTop: 5,
        },
        commonContainer: {
            backgroundColor: COLORS.frame_sliver,
            borderRadius: 8,
            width: 158,
            height: 38,
            justifyContent: "center",
            alignItems: "center"
        },
        heartButton: {
            position: 'absolute',
            top: 10,
            right: 10,
            backgroundColor: '#fff',
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 4,
        },
        heartText: {
            fontSize: 18,
            color: '#ff5a5f',
        },
    });

    return (
        <ImageBackground
            source={{ uri: item.selfieUrl }}
            style={styles.card}
            resizeMode="cover">
            {/* User Image */}
            <TouchableOpacity onPress={() => navigation.navigate("CheckIn", item.userDto)}>
                <View
                    style={styles.image}
                />
            </TouchableOpacity>
            <View style={styles.details}>
                <View style={styles.detailsFlex}>
                    <Text style={styles.name}>{item.userDto.name}, {calculateAge(item.userDto.dateOfBirth)}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Match", item.userDto)}>
                        <LoveCircle />
                    </TouchableOpacity>
                </View>
                <View style={styles.commonContainer}>
                    <Text style={styles.commonInterests}>⚡ {CommonInterest()} Common Interests</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.tag}>{"♀"} {item.userDto.pronoun}</Text>
                    <Text style={styles.tag}>👩‍🦳 {item.userDto.preference.gender && item.userDto.preference.gender.length === 1 ? item.userDto.preference.gender[0] : `${item.userDto.preference.gender[0], item.userDto.preference.gender[1]}`}</Text>
                    <Text style={styles.tag}>👫 {item.userDto.gender}</Text>
                    <Text style={styles.tag}>📏 {item.userDto.height.feet}</Text>
                </View>
            </View>
        </ImageBackground>
    );
};


export default ActivImageSelect;