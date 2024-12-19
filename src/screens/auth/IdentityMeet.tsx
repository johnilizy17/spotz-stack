import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Switch, Text, List } from 'react-native-paper';
import { COLORS, FONTS } from '../../constants/theme';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { useDispatch, useSelector } from 'react-redux';
import { onboarding, storingInterest } from '../../features/slice/userSlice';
import { showMessage } from 'react-native-flash-message';
import Header from '../../constants/Layout/Header';
import Button from '../../constants/Button';
import { getInterest } from '../../service/url/auth/interest';

const genderOptions = [
    { label: 'Male', value: 'MALE' },
    { label: 'Female', value: 'FEMALE' },
    { label: 'Non-Binary', value: 'NON_BINARY' },
];

const IdentityMeet = () => {
    const navigation = useNavigation();
    const [selectedGenders, setSelectedGenders] = React.useState<string>("");

    const isSwitchOn = genderOptions.every(option =>
        selectedGenders.includes(option.value),
    );
    const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)
    const dispatch = useDispatch()
    const HeightSubmit = () => {
        if (selectedGenders.length < 1) {
            showMessage({
                message: "Gender",
                description: `Kindly select a gender`,
                type: "warning",
            });
        } else {
            dispatch(onboarding({
                ...onboardingData,
                gender: selectedGenders
            }))
            navigation.navigate("SelectInerest" as never)
        }
    }

    async function FetchInterest() {
        try {
            const result: any = await getInterest()
            if (result.data) {
                dispatch(storingInterest(result.data.MISCELLANEOUS))
            }
        } catch (err) {
            console.log(err, "STRINGs")
        }
    }

    useEffect(() => {
        console.log("result")
        FetchInterest()
    }, [])

    return (
        <WithNoAuth>
            <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                <Header title="6/8" textColor={COLORS.white} />
            </View>
            <SafeAreaView style={styles.container}>
                <View>
                    <Text variant="titleLarge" style={styles.title}>
                        What do you identify as?
                    </Text>
                    <Text variant="bodyLarge" style={styles.subtitle}>
                        Choose your gender
                    </Text>
                    <List.Section>
                        {genderOptions.map(option => {
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
                                        setSelectedGenders(option.value);
                                    }}
                                />
                            );
                        })}
                    </List.Section>
                </View>

                <Button title="Continue" onPress={HeightSubmit} containerStyle={selectedGenders.length > 0 ? styles.button2 : styles.button} textStyle={{ color: COLORS.white, fontFamily: FONTS._500Medium.fontFamily, fontWeight: "600" }} />

            </SafeAreaView>
        </WithNoAuth>
    );
};

export default IdentityMeet;

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
        marginTop: 10,
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
});
