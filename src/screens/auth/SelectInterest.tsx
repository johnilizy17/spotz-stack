import React from 'react';
import { Text, Icon, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import { COLORS, FONTS } from '../../constants/theme';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from 'react-native-flash-message';
import { onboarding } from '../../features/slice/userSlice';
import Header from '../../constants/Layout/Header';


const ItemSeparatorComponent = () => <View style={styles.separator} />;

const SelectInerest = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { interest, onboardingData } = useSelector((a: { user: { interest: any, onboardingData: any } }) => a.user)
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    [],
  );

  const onSubmit = () => {
    if (selectedInterests.length < 4.5) {
      showMessage({
        message: "interest",
        description: `Kindly select a 5 interest`,
        type: "warning",
      });
    } else {
      dispatch(onboarding({
        ...onboardingData, interests: selectedInterests
      }))
      navigation.navigate("SelectPrompts" as never)
    }
  };

  return (
    <WithNoAuth>
      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <Header title="7/8" textColor={COLORS.white} />
      </View>
      <SafeAreaView style={styles.container}>
        <View>
          <Text variant="titleLarge" style={styles.title}>
            Tell us what you love
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            Discover amazing connections by sharing up to 5 likes and passion with
            others
          </Text>
          <FlatList
            key={'3-columns'}
            data={interest}
            keyExtractor={item => item}
            numColumns={3}
            ItemSeparatorComponent={ItemSeparatorComponent}
            extraData={selectedInterests}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={({ item }) => {
              const isSelected = selectedInterests.includes(item);
              return (
                <Button
                  style={[
                    styles.interestButton,
                    {
                      borderColor: isSelected ? COLORS.magenta_pink : '#FFFFFF14',
                    },
                  ]}
                  buttonColor="#161A22"
                  key={isSelected ? `${item}-selected` : `${item}-unselected`}
                  textColor="white"
                  onPress={() => {
                    if (isSelected) {
                      setSelectedInterests(selected =>
                        selected.filter(g => g !== item),
                      );
                    } else {
                      setSelectedInterests(selected => {
                        if (selected.length < 30) {
                          return [...selected, item];
                        }
                        return selected;
                      });
                    }
                  }}>
                  {isSelected && (
                    <Icon
                      source="check"
                      size={20}
                      color={isSelected ? COLORS.check_green : 'transparent'}
                    />
                  ) }
                  {item}
                </Button>
              );
            }}
          />
        </View>

        <View>
          <Button
            mode="contained"
            textColor="white"
            disabled={!selectedInterests.length}
            key={selectedInterests.length > 4.5 ? 'disabled' : 'enabled'}
            style={styles.continueButton}
            buttonColor={
              selectedInterests.length > 4.5
                ? COLORS.magenta_pink
                : COLORS.charcoal_black
            }
            onPress={onSubmit}>
            Continue
          </Button>
          <Button onPress={onSubmit}>Skip</Button>
        </View>
      </SafeAreaView>
    </WithNoAuth>
  );
};

export default SelectInerest;

const styles = StyleSheet.create({
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
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.silver_gray,
    marginBottom: 45,
  },
  columnWrapper: {
    gap: 8,
    width: '100%',
  },
  interestButton: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent:"center",
    alignItems:"center",
    flex: 1,
    maxWidth: '33%',
  },
  continueButton: {
    borderRadius: 10,
    height: 50,
    marginBottom: 16,
  },
  separator: {
    height: 8,
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
