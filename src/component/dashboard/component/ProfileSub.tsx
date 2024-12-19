import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import ProfileCirlce from './checkIn/ProfileCirlce';
import { COLORS, FONTS } from '../../../constants/theme';
import Pen from '../../../assets/svg/user/pen';
import SubPrice from './checkIn/SubPrice';
import { useNavigation } from '@react-navigation/native';
import SubPop from './SubPop/SubPop';
import { useSelector } from 'react-redux';
import calculateAge from '../../../service/url/variable/dataofBirth';

const ProfileSub = ({ subPop, setSubPage, setActiveTab }: { subPop: any, setSubPage: any, setActiveTab: any }) => {

    const navigation = useNavigation()
    const users = useSelector((a: { user: any }) => a.user)

    return (
        <>
            <View style={styles.container}>
                {/* User Profile Section */}
                <View style={styles.profileSection}>
                    <ProfileCirlce />
                    <Text style={styles.profileName}>
                        {users.onboardingData.name}, {calculateAge(users.onboardingData.dateOfBirth)}
                    </Text>
                    <TouchableOpacity onPress={() => setActiveTab("profileSettings")} style={styles.editButton}>
                        <Pen width='15.46' height='15.46' color={COLORS.magenta_pink} />
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Subscription Plans */}
                <Text style={styles.sectionTitle}>Get plans that best suit your needs</Text>
                <SubPrice setSubPage={setSubPage} />

                {/* Enhanced Profile Options */}
                <View style={styles.enhancedProfileSection}>
                    <Text style={styles.enhancedProfileText}>
                        Enhanced profile options
                    </Text>
                    <Text style={styles.enhancedProfileDescription}>
                        Upload multiple photos and include additional information, like
                        interests and hobbies.
                    </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileName: {
        color: COLORS.white,
        fontSize: 28,
        marginTop: 10,
        fontWeight: "500",
        fontFamily: FONTS._500Medium.fontFamily
    },
    editButton: {
        backgroundColor: COLORS.light_pink,
        width: 120,
        height: 40,
        display: "flex",
        flexDirection: "row",
        marginTop: 28,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },
    editButtonText: {
        color: COLORS.magenta_pink,
        fontWeight: '500',
        marginLeft: 5.6,
        fontSize: 16
    },
    sectionTitle: {
        color: COLORS.white,
        fontSize: 20,
        textAlign: "center",
        fontWeight: '500',
        marginBottom: 10,
    },
    plansList: {
        marginBottom: 20,
    },
    planContainer: {
        backgroundColor: '#1E1E1E',
        borderRadius: 10,
        padding: 15,
        marginRight: 10,
        alignItems: 'center',
        width: 150,
    },
    bestOfferBorder: {
        borderWidth: 2,
        borderColor: '#FF007A',
    },
    bestOfferText: {
        color: '#FF007A',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    planPrice: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    planDuration: {
        color: 'gray',
        fontSize: 14,
    },
    planFeatures: {
        color: 'white',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center',
    },
    enhancedProfileSection: {
        backgroundColor: COLORS.black,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginTop: 30
    },
    enhancedProfileText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    enhancedProfileDescription: {
        color: 'gray',
        fontSize: 14,
    },
});

export default ProfileSub;
