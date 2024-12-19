import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install via 'expo install @expo/vector-icons'
import DashboardAuth from '../../constants/HOC/DashboardAuth';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/theme';
import PenFilled from '../../assets/svg/user/pen_filled_star';
import MatchPop from '../../component/dashboard/component/matchPop/matchPop';
import Love from '../../assets/svg/user/love';

export default function MatchGenerate() {

    const navigation = useNavigation()
    const [matchPop, setMatchPage] = useState("")

    return (
        <DashboardAuth>
            <MatchPop setMatchPage={setMatchPage} matchPop={matchPop} />
            <View style={styles.container}>
                {/* Close Button */}
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>

                {/* Title Section */}
                <Text style={styles.subtitle}>You got a</Text>
                <Text style={styles.title}>Match</Text>

                {/* Images Section */}
                <View style={styles.imagesContainer}>
                    <Image
                        source={require("../../assets/image/Demo/profile.png")} // Replace with the actual image URL
                        style={[styles.image, { transform: [{ rotate: '-10deg' }] }]}
                    />
                    <View style={{position:"absolute", zIndex:1, bottom:0}}>
                        <Love />
                    </View>
                    <Image
                        source={require("../../assets/image/Demo/profile.png")} // Replace with the actual image URL
                        style={[styles.image, { transform: [{ rotate: '10deg' }] }]}
                    />
                </View>

                {/* Description */}
                <Text style={styles.description}>
                    You just recently matched with Chloe, break the ice and send a message
                </Text>

                {/* Button */}
                <TouchableOpacity onPress={() => setMatchPage("match")} style={styles.button}>
                    <Text style={styles.buttonText}>Generate ice breaker</Text>
                    <PenFilled color={COLORS.white} />
                </TouchableOpacity>
            </View>
        </DashboardAuth>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        position: "relative"
    },
    closeButton: {
        position: 'absolute',
        top: 20,
        left: 0,
        padding: 10,
        borderRadius: 20,
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 18.67,
        marginTop: 60,
        fontFamily: "Salsa",
        marginBottom: 5,
    },
    title: {
        color: '#fff',
        fontSize: 71.53,
        fontWeight: 'bold',
        fontFamily: 'Cursive', // Replace with custom font if available
        marginBottom: 20,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        position:"relative"
    },
    image: {
        width: 120,
        height: 150,
        borderRadius: 10,
        marginHorizontal: -20,
    },
    description: {
        color: '#aaa',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.magenta_pink, // Pink button
        width: "100%",
        borderRadius: 10,
        height: 48,
        position: "absolute",
        bottom: 10
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
});
