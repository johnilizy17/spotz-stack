import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";
import { COLORS } from "./theme";

export default function Button({
    title,
    containerStyle,
    textColor,
    onPress,
    textStyle,
    loading,
    leftIcon
}: {
    title: string,
    containerStyle?: any,
    textColor?: string,
    onPress?: any,
    loading?: boolean,
    textStyle?: any,
    leftIcon?: any
}) {
    return (
        <TouchableOpacity
            style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.magenta_pink,
                ...containerStyle,
                zIndex: 1,
            }}
            onPress={()=>!loading ? onPress():{}}
        >
            {loading ?
                <ActivityIndicator size="large" color={COLORS.white} />
                :
                <>
                    {leftIcon && leftIcon}
                    <Text
                        style={{color:COLORS.white, ...textStyle}}
                    >
                        {title}
                    </Text>
                </>
            }
        </TouchableOpacity>
    );
}
