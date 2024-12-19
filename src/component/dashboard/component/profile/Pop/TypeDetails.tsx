import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Switch, Text, List } from 'react-native-paper';
import { COLORS, FONTS } from '../../../../../constants/theme';
import { updateProfileService } from '../../../../../service/url/auth/profile';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../../../constants/Button';
import { showMessage } from 'react-native-flash-message';
import { onboarding } from '../../../../../features/slice/userSlice';

const pronounsData = [
    { label: 'He', value: 'He' },
    { label: 'Him', value: 'Him' },
    { label: 'His', value: 'His' },
    { label: 'She', value: 'She' },
    { label: 'Her', value: 'Her' },
    { label: 'Hers', value: 'Hers' },
    { label: 'They', value: 'They' },
    { label: 'Them', value: 'Them' },
];

const TypeDetails = ({ setProfilePop }: { setProfilePop: any }) => {
    const navigation = useNavigation();
    const [selectedGenders, setSelectedGenders] = React.useState<string[]>([]);
    const [loading, setLoading] = useState(false)
    const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
    const dispatch = useDispatch()

    const isSwitchOn = pronounsData.every(option =>
        selectedGenders.includes(option.value),
    );

    const onToggleSwitch = () => {
        if (isSwitchOn) {
            setSelectedGenders([]);
        } else {
            setSelectedGenders(pronounsData.map(option => option.value));
        }
    };

    const onSubmit = async () => {
        setLoading(true)
        if (selectedGenders.length === 3) {
            const change = `${selectedGenders[0]}/${selectedGenders[1]}/${selectedGenders[2]}`
            try {
                const result = await updateProfileService({ userId: user.userId, data: { ...onboardingData, pronoun: change } })
                showMessage({
                    message: "Pronouns",
                    description: `Pronouns successfully updated`,
                    type: "success"
                });
                dispatch(onboarding({ ...onboardingData, pronoun: change }))
                setProfilePop("")

            } catch (err) {
                showMessage({
                    message: "Pronouns",
                    description: `Select only 3 items`,
                    type: "warning"
                });
                console.log(JSON.stringify(err))
            }
        } else {
            showMessage({
                message: "Pronouns",
                description: `Select only 3 items`,
                type: "warning"
            });
        }
        setLoading(false)
    };

    useEffect(() => {
        const pronounArray = onboardingData.pronoun.split("/");
        setSelectedGenders(pronounArray);
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="titleLarge" style={styles.title}>
                        What are your pronouns?
                    </Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        You can select up to 3
                    </Text>
                    <ScrollView style={{ height: 320, marginTop: 20 }}>
                        <List.Section>
                            {pronounsData.map(option => {
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
                    </ScrollView>
                </View>

                <Button
                    containerStyle={selectedGenders.length === 3 ? styles.button : styles.button2}
                    textStyle={styles.buttonText}
                    loading={loading}
                    title='Continue'
                    onPress={onSubmit} />
            </SafeAreaView>
        </>
    );
};

export default TypeDetails;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 8,
        fontWeight: "800"
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
        paddingHorizontal: 16,
        paddingBottom: 20,
        paddingTop: 30,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: COLORS.black_card,
        height: 530,
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
        borderRadius: 10,
    },
    button2: {
        backgroundColor: COLORS.charcoal_black
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: "600",
        fontSize: 16,
        fontFamily: FONTS._500Medium.fontFamily
    }
});
