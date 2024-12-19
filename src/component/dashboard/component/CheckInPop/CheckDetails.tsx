import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import PenFilled from '../../../../assets/svg/user/pen_filled_star';
import { COLORS } from '../../../../constants/theme';
import Copy from '../../../../assets/svg/user/copy';
import { showMessage } from 'react-native-flash-message';
import Redo from '../../../../assets/svg/ice_breaker/redo';
import Cancel from '../../../../assets/svg/nav/cancel';
import TabBorder from '../../../../assets/svg/menu/TabBorder';
import { prompts } from "../../../../constants/common/prompts";

const CheckDetails = ({ setMatchPage, CheckinPop, selectedQuestion }: { setMatchPage: any, CheckinPop: string, selectedQuestion: number }) => {

    const [value, setValue] = useState(prompts[selectedQuestion].answer)
    const AnswerCheck = () => {
        console.log(prompts[selectedQuestion],"result")
        setMatchPage()
    };

    const alertIceMessage = () => {
        showMessage({
            message: "Copy",
            description: `Text Successfully Copied`,
            type: "success",
        });
    }

    useEffect(()=>{
        setValue(prompts[selectedQuestion].answer)
    },[CheckinPop])

    return (
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <TabBorder />
            </View>
            <View style={{ width: "100%" }}>
                <Text style={styles.questionTitle}>{CheckinPop}</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholderTextColor={COLORS.silver_white}
                value={value}
                onChangeText={(e) => {
                    const result = prompts[selectedQuestion]
                    result.answer = e
                    setValue(e)
                }}
                placeholder="Type something..."
                multiline={true} // Allows multiple lines of text
                numberOfLines={5} // Suggests height based on number of lines
                textAlignVertical="top" // Ensures text starts from the top
            />
            <TouchableOpacity style={styles.button} onPress={AnswerCheck}>
                <Text style={styles.buttonText}>Answer</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.black,
        padding: 20,
        paddingTop: 10
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
        height: 135,
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
        textAlign: 'left',
        color: COLORS.white,
        fontSize: 16,
        marginBottom: 26
    },
    button: {
        backgroundColor: '#ff3366',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        flexDirection: "row"
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
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
    },
    input: {
        width: '100%',
        fontSize: 16,
        color: COLORS.white,
        backgroundColor: COLORS.charcoal_black,
        padding: 20,
        borderRadius: 10,
        height: 135,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        marginBottom: 43
    },
});

export default CheckDetails;