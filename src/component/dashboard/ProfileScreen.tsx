import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { HeaderProfile } from './component/Header';
import ProfileSub from './component/ProfileSub';
import { StripeProvider } from '@stripe/stripe-react-native';
import { stripKey } from '../../service/url/variable/key';
import SubPop from './component/SubPop/SubPop';
import SettingsPopScreen from './component/Settings/SettingsPopScreen';

export default function ProfileScreen({setActiveTab}:{setActiveTab:any}) {

    const { height } = Dimensions.get("window")
    const [subPop, setSubPage] = useState<any>({ price: null })
    const [display, setDisplay] = useState<any>(null)
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: "relative"
        },
        containerScroll: {
            height: height - 550
        },
    })
    return (
        <StripeProvider publishableKey={stripKey}>
          {display && <SettingsPopScreen setMatchPage={setDisplay} CheckinPop={display} />}
            <View style={styles.container}>
                <HeaderProfile setDisplay={setDisplay}/>
                <ScrollView nestedScrollEnabled={true} style={styles.containerScroll}>
                    <ProfileSub setActiveTab={setActiveTab} subPop={subPop} setSubPage={setSubPage} />
                </ScrollView>
            </View>
     {display && <SubPop setSubPage={setSubPage} subPop={subPop.price} />}
        </StripeProvider>
    )
}