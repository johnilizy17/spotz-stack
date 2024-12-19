import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Switch, Text, List } from 'react-native-paper';
import { COLORS, FONTS } from '../../constants/theme';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { useDispatch, useSelector } from 'react-redux';
import { onboarding } from '../../features/slice/userSlice';
import { showMessage } from 'react-native-flash-message';
import Button from '../../constants/Button';
import store from '../../features/store';
import Header from '../../constants/Layout/Header';

const genderOptions = [
    { label: 'He', value: 'He' },
    { label: 'Him', value: 'Him' },
    { label: 'His', value: 'His' },
    { label: 'She', value: 'She' },
    { label: 'Her', value: 'Her' },
    { label: 'Hers', value: 'Hers' },
    { label: 'They', value: 'They' },
    { label: 'Them', value: 'Them' }
];

const PronounsData = () => {
    const navigation = useNavigation();
    const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
    const { width } = Dimensions.get("window");

    const isSwitchOn = genderOptions.every(option => selectedGenders.includes(option.value),);

    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)
    const dispatch = useDispatch()
    const HeightSubmit = () => {
        if (selectedGenders.length < 3) {
            showMessage({
                message: "Pronouns",
                description: `Kindly select a 3 Pronouns`,
                type: "warning",
            });
        } else {
            dispatch(onboarding({
                ...onboardingData, pronoun: `${selectedGenders[0]}/${selectedGenders[1]}/${selectedGenders[2]}`
            }))
            navigation.navigate("Ethnicity" as never)
        }
    }

    const onToggleSwitch = () => {
        if (isSwitchOn) {
            setSelectedGenders([]);
        } else {
            setSelectedGenders(genderOptions.map(option => option.value));
        }
    };

    const onSubmit = () => {
        setTimeout(() => {
            navigation.navigate('LoggedOut', { screen: 'SelectInerest' });
        }, 0);
    };
    return (
        <WithNoAuth>
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                <Header title="4/8" textColor={COLORS.white} />
            </View>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="titleLarge" style={styles.title}>
                        What are your pronouns?
                    </Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        You can select up to 3
                    </Text>
                    <ScrollView>

                        <List.Section>
                            {genderOptions.map(option => {
                                const isSelected = selectedGenders.includes(option.value);
                                return (
                                    <List.Item
                                        key={option.value}
                                        title={option.label}
                                        style={styles.optionContainer}
                                        // eslint-disable-next-line react/no-unstable-nested-components
                                        right={props => (
                                            <List.Icon
                                                {...props}
                                                icon="check"
                                                color={isSelected ? COLORS.check_green : 'transparent'}
                                            />
                                        )}
                                        onPress={() => {
                                            if (isSelected) {
                                                setSelectedGenders(selected =>
                                                    selected.filter(g => g !== option.value),
                                                );
                                            } else {
                                                setSelectedGenders(selected => [...selected, option.value]);
                                            }
                                        }}
                                    />
                                );
                            })}
                        </List.Section>
                        <View style={{ height: 150 }} />
                    </ScrollView>
                </View>
                <View style={{ width: width, left: 0, paddingHorizontal: 16, position: "absolute", justifyContent: "center", alignItems: "center", bottom: 16 }}>
                    <Button onPress={HeightSubmit} containerStyle={selectedGenders.length > 2 ? styles.button2 : styles.button} textStyle={styles.buttonText} title="Continue" />
                </View>
            </SafeAreaView>
        </WithNoAuth >
    );
};

export default PronounsData;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 8,
    },
    subtitle: {
        color: COLORS.silver_gray,
    },
    optionContainer: {
        backgroundColor: COLORS.charcoal_black,
        marginBottom: 8,
        borderRadius: 10,
    },
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    backgroundContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginTop: 20,
        marginBottom: 32,
    },
    button: {
        backgroundColor: COLORS.charcoal_black,
        width: "100%"
    },
    button2: {
        backgroundColor: COLORS.magenta_pink,
        width: "100%"
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: FONTS._700Bold.fontFamily,
        fontWeight: "bold",
    }
});
