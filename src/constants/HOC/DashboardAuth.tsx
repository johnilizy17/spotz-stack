import React, { ReactNode, useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileService } from '../../service/url/auth/profile';
import { onboarding, storingInterest } from '../../features/slice/userSlice';
import Navigation from '../../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';
import { getInterest } from '../../service/url/auth/interest';
import { getAllUserChecked, getSingleSpot } from '../../service/url/checkin/usersCheckin';
import { storeCheckData, storeCheckInLocation } from '../../features/slice/checkinSlice';
// Define the props type for AppLayout
interface AppLayoutProps {
    children: ReactNode; // Allows rendering any valid React element as children
    padding?: boolean;
}

const DashboardAuth: React.FC<AppLayoutProps> = ({ children, padding }) => {

    const { height } = Dimensions.get("screen")
    const navigation = useNavigation()
    const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: { userId: string } } }) => a.user)
    const dispatch = useDispatch()
    const numberPadding = padding ? 0 : 10
    const styles = StyleSheet.create({
        safeArea: {
            flex: 1,
            paddingTop: numberPadding
        }
    });


    async function ProfileDetails() {
        try {
            const result = await getProfileService({ userId: user.userId })
            if (result.data.name === null) {
                navigation.navigate("EmailVerification" as never)
            } else {
                dispatch(onboarding(result.data))
            }
        } catch (err: any) {
            console.log(err)
        }
    }

    async function FetchInterest() {
        try {
            const result: any = await getInterest()
            if (result.data) {
                dispatch(storingInterest(result.data.MISCELLANEOUS))
            }
        } catch (err) {
            console.log(err, "STRINGs")
        }
    }

    useEffect(() => {
        ProfileDetails()
        FetchInterest()
    }, [])


    async function FetchCheckIn() {
        const result = await getAllUserChecked();
        const location = await getSingleSpot();
        dispatch(storeCheckInLocation(location.data))
        dispatch(storeCheckData(result))
    }
    useEffect(() => {
        FetchCheckIn()
    }, [])

    return (
        <ImageBackground
            source={require('./background.png')} // Path to your image
            style={styles.safeArea}
            resizeMode="stretch" // Makes the image cover the entire container
        >
            {/* Main Body Content Section */}
            {children}
        </ImageBackground>
    );
};


export default DashboardAuth;