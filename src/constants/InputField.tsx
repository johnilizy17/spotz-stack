import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS } from "./theme";

export default function InputField({
    contaynerStyle,
    placeholder,
    leftIcon,
    rightIcon,
    secureTextEntry,
    change,
    name,
    valueplace
}: {
    contaynerStyle?: any,
    placeholder: string,
    leftIcon?: any,
    rightIcon?: any,
    secureTextEntry?: boolean,
    change?: any,
    name?: string,
    valueplace?: string
}
) {

    const [visible, setvisible] = useState(false)

    return (
        <View
            style={{
                width: "100%",
                height: 50,
                backgroundColor: COLORS.charcoal_black,
                paddingHorizontal: 10,
                borderRadius: 10,
                alignItems: "center",
                flexDirection: "row",
                ...contaynerStyle,

            }}
        >
            {leftIcon && <View style={{ paddingRight: 14 }}>{leftIcon}</View>}
            {valueplace ? <TextInput
                style={{ flex: 1, height: 50, color: COLORS.white }}
                placeholder={placeholder}
                value={valueplace}
                placeholderTextColor={COLORS.silver_gray}
                onChangeText={(e) => { if (change) { change(e) } }}
                secureTextEntry={visible ? !visible : secureTextEntry}
            /> :
                <TextInput
                    style={{ flex: 1, height: 50, color: COLORS.white }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.silver_gray}
                    onChangeText={(e) => { if (change) { change(e) } }}
                    secureTextEntry={visible ? !visible : secureTextEntry}
                />
            }
            {secureTextEntry &&
                <View>
                    {
                        visible ?
                            <TouchableOpacity onPress={() => setvisible(!visible)}>
                                <Text>sd</Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={() => setvisible(!visible)}>
                                <Text>sd</Text>
                            </TouchableOpacity>
                    }
                </View>
            }
        </View>
    );
}                                       