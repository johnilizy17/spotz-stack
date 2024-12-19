import React, { useEffect } from 'react';
import WithAuth from '../../constants/HOC/DashboardAuth';
import * as Location from 'expo-location';
import { showMessage } from 'react-native-flash-message';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { COLORS } from '../../constants/theme';
import Button from '../../constants/Button';
import { useNavigation } from '@react-navigation/native';
import DashboardAuth from '../../constants/HOC/DashboardAuth';

export default function Permission() {

    const navigaton = useNavigation();
    const {height} = Dimensions.get("window")

    const styles = StyleSheet.create({
        container: {
            height:height,
            justifyContent: "center",
            alignItems: "center"
        },
        dashboardAlert: {
            height: 415.15,
            width: 270,
            paddingTop: 20,
            paddingBlockStart: 20,
            backgroundColor: COLORS.charcoal_black
        },
        permissionTitle: {
            fontSize: 17,
            color: COLORS.white,
            fontWeight: "600",
            textAlign: "center"
        },
        permissionDetails: {
            fontSize: 12,
            color: COLORS.white,
            marginBottom:16,
            fontWeight: "400",
            paddingLeft: 10,
            paddingRight: 10,
            marginTop:2,
            textAlign: "center"
        }
    })

    const requestLocationPermission = async () => {
        try {
            // Request foreground location permissions
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                showMessage({
                    message: "Permission",
                    description: `Permission to access location was denied`,
                    type: "danger",
                });
            } else {
                showMessage({
                    message: "Permission",
                    description: `Permission to access location was denied`,
                    type: "danger",
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    // useEffect(() => {
    //     requestLocationPermission()
    // }, [])

    return (
        <DashboardAuth>
            <View style={styles.container}>
                <View style={styles.dashboardAlert}>
                    <Text style={styles.permissionTitle}>
                        Allow “Spotz” to use
                        your location?
                    </Text>
                    <Text style={styles.permissionDetails}>
                        We’ll only use your location to find connections and check-in to locations
                    </Text>
                    <Image style={{width:270, height:174}} source={require("../../assets/image/map/Map.png")} />
                  <Button onPress={()=>navigaton.navigate("Dashboard" as never)} title="Allow Once" containerStyle={{background:COLORS.charcoal_black}} textStyle={{color:COLORS.white}}/>
                  <Button onPress={()=>navigaton.navigate("CheckIn" as never)} title="Allow While Using the App" containerStyle={{background:COLORS.charcoal_black}} textStyle={{color:COLORS.white}}/>
                  <Button onPress={()=>navigaton.navigate("Dashboard" as never)} title="Don't Allow" containerStyle={{background:COLORS.charcoal_black}} textStyle={{color:COLORS.white}}/>
                </View>
            </View>
        </DashboardAuth>
    )


}