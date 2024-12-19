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
    { label: 'African', value: 'African' },
    { label: 'African American', value: 'African American' },
    { label: 'White/Caucasian', value: 'White/Caucasian' },
    { label: 'Latino/Hispanic', value: 'Latino/Hispanic' },
    { label: 'East Asian', value: 'East Asian' },
    { label: 'Southeast Asian', value: 'Southeast Asian' },
    { label: 'South Asian', value: 'South Asian' },
    { label: 'Middle Eastern', value: 'Middle Eastern' },
    { label: 'Native American', value: 'Native American' }
];

const EthnicityPop = ({ setProfilePop }: { setProfilePop: any }) => {
    const navigation = useNavigation();
    const [selectedGenders, setSelectedGenders] = React.useState<string>("");
    const [loading, setLoading] = useState(false)
    const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
    const dispatch = useDispatch()

    const isSwitchOn = pronounsData.every(option =>
        selectedGenders.includes(option.value),
    );

    const onSubmit = async () => {
        setLoading(true)
        if (selectedGenders.length > 0.5) {
            try {
                const result = await updateProfileService({ userId: user.userId, data: { ...onboardingData, ethnicity: selectedGenders } })
                showMessage({
                    message: "Ethnicity",
                    description: `Ethnicity successfully updated`,
                    type: "success"
                });
                dispatch(onboarding({ ...onboardingData, ethnicity: selectedGenders }))
                setProfilePop("")

            } catch (err) {
                showMessage({
                    message: "Ethnicity",
                    description: `Ethnicity failed to upload`,
                    type: "warning"
                });
                console.log(JSON.stringify(err))
            }
        } else {
            showMessage({
                message: "Ethnicity",
                description: `Select a ethnicity`,
                type: "warning"
            });
        }
        setLoading(false)
    };

    useEffect(() => {
        const pronounArray = onboardingData.ethnicity
        setSelectedGenders(pronounArray);
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="titleLarge" style={styles.title}>
                        What is your ethnicity?
                    </Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        Choose your ethnicity
                    </Text>
                    <ScrollView style={{ height: 320, marginTop: 20 }}>
                        <List.Section>
                            {pronounsData.map(option => {
                                const isSelected = selectedGenders == option.value ? true : false
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
                    </ScrollView>
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

export default EthnicityPop;

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
