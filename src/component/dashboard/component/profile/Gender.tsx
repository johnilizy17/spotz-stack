import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Pen from '../../../../assets/svg/user/pen';
import { useSelector } from 'react-redux';

const ProfileDetails = ({ setProfilePop }: { setProfilePop: any }) => {
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)

    const ProfileItem = ({ emoji, label, nav }: { emoji: any, label: string, nav: string }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity onPress={() => { setProfilePop(nav) }} style={{ padding: 5 }}>
                <Pen />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <ProfileItem emoji="♀" label={onboardingData.pronoun} nav="pronouns" />
            <ProfileItem emoji="👩‍🦳" label={onboardingData.gender} nav="type" />
            <ProfileItem emoji="👫" label={onboardingData.preference.gender.length == 1? onboardingData.preference.gender[0]:onboardingData.length == 2? `${onboardingData.preference.gender[0]} and ${onboardingData.preference.gender[1]}`:`${onboardingData.preference.gender[0]}, ${onboardingData.preference.gender[1]} and ${onboardingData.preference.gender[2]}`} nav="gender" />
            <ProfileItem emoji="📏" label={onboardingData.height.feet} nav="height" />
            <ProfileItem emoji="🦸🏾‍♀️" label={onboardingData.ethnicity} nav="ethnicity" />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#333',
    },
    emoji: {
        fontSize: 20,
        marginRight: 16,
        width:30,
        color: '#fff',
    },
    label: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    editIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff', // Adjust the icon color
    },
});

export default ProfileDetails;
