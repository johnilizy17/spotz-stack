import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PenFilled from '../../../../assets/svg/user/pen_filled_star';
import { COLORS } from '../../../../constants/theme';
import Copy from '../../../../assets/svg/user/copy';
import { showMessage } from 'react-native-flash-message';
import Redo from '../../../../assets/svg/ice_breaker/redo';
import Cancel from '../../../../assets/svg/nav/cancel';

const MatchDetails = ({ setMatchPage }: { setMatchPage: any }) => {
    const [question, setQuestion] = useState(
        "If you could instantly master any skill, talent, or hobby, what would you choose and why?"
    );

    const regenerateQuestion = () => {
        // Replace this array with a list of your own questions
        const questions = [
            "What is one thing you've always wanted to try but haven't yet?",
            "If you could travel anywhere in the world right now, where would you go?",
            "What is the most interesting fact you know?",
            "What is your favorite way to spend a weekend?",
        ];
        const randomIndex = Math.floor(Math.random() * questions.length);
        setQuestion(questions[randomIndex]);
    };

    const alertIceMessage = () => {
        showMessage({
            message: "Copy",
            description: `Text Successfully Copied`,
            type: "success",
        });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>setMatchPage()} style={{ position: "absolute", top: -30, left: 0 }}>
                <Cancel />
            </TouchableOpacity>
            <View style={styles.containerTitle}>
                <PenFilled />
                <Text style={styles.title}>Ice Breaker Question</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.questionTitle}>Ask a question for you both to answer</Text>
                <Text style={styles.question}>{question}</Text>
                <View style={styles.cardCopy}>
                    <TouchableOpacity onPress={alertIceMessage}>
                        <View style={styles.cardCopyButton}>
                            <Copy />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={regenerateQuestion}>
                <Text style={styles.buttonText}>Regenerate Ice Breaker</Text>
                <Redo color={COLORS.white} />
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
    }
});

export default MatchDetails;