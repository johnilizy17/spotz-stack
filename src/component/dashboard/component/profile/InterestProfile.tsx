import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../../../constants/theme";
import Pen from "../../../../assets/svg/user/pen";
import { useSelector } from "react-redux";

const InterestProfile = ({ setProfilePop }: { setProfilePop: any }) => {
   
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)

    return (
        <View style={styles.container}>

            <View style={styles.containerButton}>
                <TouchableOpacity onPress={() => setProfilePop("select")}>
                    <View style={styles.header}>
                        <Text style={styles.editText}>Edit</Text>
                        <Pen />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.tagsContainer}>
                {onboardingData.interests.map((category:string, index:number) => (
                    <TouchableOpacity key={index} style={styles.tag}>
                        <Text style={styles.tagText}>{category}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    containerButton: {
        flexDirection: "row",
        justifyContent: "flex-end",
        width: "100%"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        backgroundColor: COLORS.charcoal_black,
        height: 40,
        padding: 10,
        borderRadius: 10
    },
    editText: {
        color: COLORS.white,
        fontSize: 14,
        marginRight: 10
    },
    tagsContainer: {
        flexDirection: "row",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white_60,
        marginTop: 10,
        alignItems: "center",
        padding: 10,
        flexWrap: "wrap"
    },
    tag: {
        backgroundColor: COLORS.charcoal_black,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 10,
        marginRight: 5,
        marginBottom: 10
    },
    tagText: {
        color: "#FFFFFF",
        fontSize: 14,
    },
});

export default InterestProfile;
