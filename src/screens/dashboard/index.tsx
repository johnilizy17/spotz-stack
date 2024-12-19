import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import SpotzIcon from '../../assets/svg/menu/spotz_icon';
import CheckInIcon from '../../assets/svg/menu/check_in';
import LikeIcon from '../../assets/svg/menu/like';
import ChatIcon from '../../assets/svg/menu/chat';
import ProfileIcon from '../../assets/svg/menu/profile';
import { COLORS } from '../../constants/theme';
import DashboardAuth from '../../constants/HOC/DashboardAuth';
import CheckInScreen from '../../component/dashboard/CheckInScreen';
import ProfileScreen from '../../component/dashboard/ProfileScreen';
import Chat from './Chat';
import Map from './Map';
import CheckIn from '../../component/dashboard/component/checkIn/indext';
import CheckInSelection from '../../component/dashboard/component/checkIn/CheckInSelection';
import { getProfile } from '../../service/url/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileService } from '../../service/url/auth/profile';
import { onboarding } from '../../features/slice/userSlice';
import ProfileSettingScreen from '../../component/dashboard/Profile/ProfileSettingScreen';
import CheckInButton from '../../component/checkIn';
import UserFavourite from '../../component/dashboard/component/checkIn/UserFavourite';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <CheckInButton />;
            case 'checkin':
                return <CheckInSelection />;
            case 'profile':
                return <ProfileScreen setActiveTab={setActiveTab} />;
            case 'profileSettings':
                return <ProfileSettingScreen setActiveTab={setActiveTab} />;
            case 'like':
                return <UserFavourite />;
            case 'chat':
                return <Chat />;
            default:
                return null;
        }
    };


    return (
        <DashboardAuth padding={activeTab === "home" ? true : false}>
            {/* <ScrollView style={styles.content}> */}
            <View style={styles.content}>{renderContent()}</View>
            {/* </ScrollView> */}
            <View style={styles.bottomNav}>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('home')}
                >
                    <SpotzIcon color={activeTab === 'home' ? COLORS.magenta_pink : COLORS.silver_gray} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('checkin')}
                >
                    <CheckInIcon color={activeTab === 'checkin' ? COLORS.magenta_pink : COLORS.silver_gray} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('like')}
                >
                    <LikeIcon color={activeTab === 'like' ? COLORS.magenta_pink : COLORS.silver_gray} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('chat')}
                >
                    <ChatIcon color={activeTab === 'chat' ? COLORS.magenta_pink : COLORS.silver_gray} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.tab}
                    onPress={() => setActiveTab('profile')}
                >
                    <ProfileIcon color={activeTab === 'profile' || activeTab === "profileSettings" ? COLORS.magenta_pink : COLORS.silver_gray} />
                </TouchableOpacity>
            </View>
        </DashboardAuth>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screen: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    bottomNav: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: COLORS.black
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 4,
    },
});

export default Dashboard;