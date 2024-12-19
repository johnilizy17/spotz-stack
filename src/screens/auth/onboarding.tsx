import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import OnboardingComponent from '../../component/authentication/onboarding/onboadingComponent';
import Slider from '../../assets/svg/logo/slider';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { getDataJSON } from '../../service/url/variable/asyncStorage';
import * as SplashScreen from 'expo-splash-screen';
import { RefreshToken } from '../../service/url/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/slice/userSlice';

export default function OnBoarding() {

    const { height } = Dimensions.get("window")

    const adjustment = height > 650 ? 1 : 1
    const adjustment2 = height > 650 ? 0.4: 0.5

    const dispatch = useDispatch()

    const navigation = useNavigation()

    const styles = StyleSheet.create({
        container: {
            flex: adjustment,
            position: "relative"
        },
        logoContainer: {
            position: "absolute",
            width: "100%",
            display: "flex",
            paddingTop: 20,
            zIndex: 100,
            justifyContent: "center",
            alignItems: "center"
        },
        logo: {
            width: 111,
            height: 76,
        },
        imageOnboarding: {
            height: "100%",
            objectFit: "cover",
            width: "100%",
        },
        sliderCenter: {
            alignItems: "center",
            marginTop: 24
        }
    })

    async function ConfirmPage() {
        const data = await getDataJSON("login")
           
        if (data && data.access_token) {
           try{ 
            const refresh = await RefreshToken({ refreshToken: data.refresh_token });
            if (data.userId && refresh.data && refresh.data.userId) {
                dispatch(login(refresh.data));
                navigation.navigate("Dashboard" as never);
                setTimeout(() => { SplashScreen.hideAsync(); }, 1500)
            } else {
                SplashScreen.hideAsync();
            }
        }catch(err){
            console.log(err, "error")
        }
        } else {
            SplashScreen.hideAsync();
        }
    }

    useEffect(() => {
        ConfirmPage()
    }, [])

    return (
        <WithNoAuth padding={true}>
            <ImageBackground
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/image/logo/logo.png')}
                        style={styles.logo} />
                </View>
                <Image
                    style={styles.imageOnboarding}
                    source={require('../../assets/image/user/onboarding_image.png')}
                />
                <View style={styles.sliderCenter}>
                    <Slider />
                </View>
            </ImageBackground>
            <OnboardingComponent adjustment2={adjustment2}/>
        </WithNoAuth>
    )
}

