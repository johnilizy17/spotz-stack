import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Switch, Text, List } from 'react-native-paper';
import { COLORS, FONTS } from '../../../../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfileService } from '../../../../../service/url/auth/profile';
import { showMessage } from 'react-native-flash-message';
import { onboarding } from '../../../../../features/slice/userSlice';
import Button from '../../../../../constants/Button';

const sexData = [
    { label: 'Male', value: 'MALE' },
    { label: 'Female', value: 'FEMALE' },
    { label: 'Non-Binary', value: 'NON_BINARY' },
];

const SexDetails = ({ setProfilePop }: { setProfilePop: any }) => {
    const navigation = useNavigation();
    const [selectedGenders, setSelectedGenders] = React.useState<string>("");
    const [loading, setLoading] = useState(false)
    const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
    const dispatch = useDispatch()

    const onSubmit = async () => {
        setLoading(true)
        if (selectedGenders.length > 0.5) {
            try {
                const result = await updateProfileService({
                    userId: user.userId, data: {
                        ...onboardingData,
                        gender: selectedGenders
                    }
                })
                showMessage({
                    message: "Gender",
                    description: `Gender successfully updated`,
                    type: "success"
                });
                dispatch(onboarding({
                    ...onboardingData,
                    gender: selectedGenders

                }))
                setProfilePop("")

            } catch (err) {
                showMessage({
                    message: "Gender",
                    description: `Gender failed to update`,
                    type: "warning"
                });
                console.log(JSON.stringify(err))
            }
        } else {
            showMessage({
                message: "Gender",
                description: `Select a Gender`,
                type: "warning"
            });
        }
        setLoading(false)
    };

    useEffect(() => {
        const pronounArray = onboardingData.gender
        setSelectedGenders(pronounArray);
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="titleLarge" style={styles.title}>
                        What do you identify as?
                    </Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        Choose your gender
                    </Text>
                    <List.Section>
                        {sexData.map(option => {
                            const isSelected = selectedGenders === option.value ? true : false;

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
                                        setSelectedGenders(option.value)
                                    }}
                                />
                            );
                        })}
                    </List.Section>
                </View>

                <Button
                    containerStyle={selectedGenders.length > 0.5 ? styles.button : styles.button2}
                    textStyle={styles.buttonText}
                    loading={loading}
                    title='Continue'
                    onPress={onSubmit} />
            </SafeAreaView>
        </>
    );
};

export default SexDetails;

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        marginBottom: 8,
        fontWeight: "800",
        fontFamily: FONTS._500Medium.fontFamily,
        textAlign: "center"
    },
    subtitle: {
        color: COLORS.silver_gray,
        fontFamily: FONTS._500Medium.fontFamily,
        textAlign: "center"
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
