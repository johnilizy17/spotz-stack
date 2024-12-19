import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PenFilled from '../../../../assets/svg/user/pen_filled_star';
import { COLORS } from '../../../../constants/theme';
import Copy from '../../../../assets/svg/user/copy';
import { showMessage } from 'react-native-flash-message';
import Redo from '../../../../assets/svg/ice_breaker/redo';
import Cancel from '../../../../assets/svg/nav/cancel';
import Svg, { Path } from 'react-native-svg';
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import { stripKey } from '../../../../service/url/variable/key';

const SubDetails = ({ setMatchPage, subPop }) => {

    const stripe = useStripe();

    const { initGooglePay, presentGooglePay } = useStripe();

    const handleGooglePay = async () => {
      try{
        await initGooglePay({
            testEnv: true,
            merchantName: 'Your Merchant Name',
            countryCode: 'US',
        });

        const { error } = await presentGooglePay();
        if (error) {
            console.error(error);
        } else {
            console.log('Google Pay transaction successful');
        }
    }catch(err){
        console.log(err)
    }

    };

    const { presentApplePay } = useStripe();

    const handleApplePay = async () => {
        const { error } = await presentApplePay({
            cartItems: [
                { label: 'Product', amount: '10.00' },
                { label: 'Total', amount: '10.00' },
            ],
            country: 'US',
            currency: 'USD',
        });

        if (error) {
            console.error(error);
        } else {
            console.log('Apple Pay transaction successful');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setMatchPage({ price: null })} style={{ position: "absolute", top: -30 }}>
                <Cancel />
            </TouchableOpacity>
            <View style={styles.containerTitle}>
                <Svg width="16" height="16" fill={COLORS.magenta_pink} viewBox="0 0 16 16">
                    <Path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                </Svg>
                <Text style={styles.title}>Payment Options</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.question}>Your financial information stays private and protected.</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleApplePay}>
                <Svg width="26" height="26" fill={COLORS.white} viewBox="0 0 16 16">
                    <Path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <Path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                </Svg>
                <Text style={styles.buttonText}>Apple Pay</Text>
                <View />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={handleGooglePay}>
                <Svg width="26" height="26" fill={COLORS.white} viewBox="0 0 16 16">
                    <Path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </Svg>
                <Text style={styles.buttonText}>Google Pay</Text>
                <View />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black,
        padding: 20,
    },
    containerTitle: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.white,
        marginLeft: 10
    },
    card: {
        backgroundColor: COLORS.charcoal_black,
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        marginBottom: 20,
        width: '100%',
    },
    question: {
        fontSize: 18,
        color: COLORS.white,
        textAlign: 'center',
    },
    questionTitle: {
        fontWeight: "400",
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 14,
        marginBottom: 26
    },
    button: {
        backgroundColor: COLORS.charcoal_black,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        flexDirection: "row"
    },
    button2: {
        backgroundColor: COLORS.charcoal_black,
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        flexDirection: "row"
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20
    },
    cardCopy: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    cardCopyButton: {
        backgroundColor: COLORS.light_pink,
        height: 33,
        width: 33,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    }
});

export default SubDetails;