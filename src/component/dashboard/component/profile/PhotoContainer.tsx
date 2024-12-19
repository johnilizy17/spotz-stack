import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import CancelButton from "../../../../assets/svg/camera/cancel";
import { COLORS } from "../../../../constants/theme";

export default function PhotoContainer({ url }: { url: string }) {

    const styles = StyleSheet.create({
        photo: {
            width: 113.67,
            height: 141,
            borderRadius: 8,
            marginBottom:10,
            overflow: "hidden",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
        },
        cancel: {
            width: 28,
            height: 28,
            borderRadius: 25,
            position: "absolute",
            right: -3,
            borderColor: COLORS.black,
            borderWidth: 3,
            top: -3,
            zIndex: 100,
            backgroundColor: COLORS.silver_white,
            alignItems: "center",
            justifyContent: "center"
        }
    })

    return (
        <View style={styles.photo}>
            <Image
                source={{ uri: url }} // Replace with actual image URLs
                style={{ width: "110%", height: "110%" }}
            />
            <TouchableOpacity style={styles.cancel}>
                <CancelButton />
            </TouchableOpacity>
        </View >
    )


}