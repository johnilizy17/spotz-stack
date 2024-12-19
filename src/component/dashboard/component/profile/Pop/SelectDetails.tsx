import React, { useEffect, useState } from 'react';
import { Text, Icon, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { COLORS, FONTS } from '../../../../../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../../../../constants/Button';
import { updateProfileService } from '../../../../../service/url/auth/profile';
import { showMessage } from 'react-native-flash-message';
import { onboarding } from '../../../../../features/slice/userSlice';

const ItemSeparatorComponent = () => <View style={styles.separator} />;

const SelectDetails = ({ setProfilePop }: { setProfilePop: any }) => {
  const navigation = useNavigation();
  const [selectedInterests, setSelectedInterests] = React.useState<string[]>(
    [],
  );
  const { interest, onboardingData, user } = useSelector((a: { user: { interest: any, onboardingData: any, user: any } }) => a.user)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onSubmit = async () => {
    if(selectedInterests.length > 4.5){
    try {
      const result = await updateProfileService({
        userId: user.userId, data: {
          ...onboardingData,
          interests: selectedInterests
        }
      })
      showMessage({
        message: "Interest",
        description: `Interest successfully updated`,
        type: "success"
      });
      dispatch(onboarding({
        ...onboardingData,
        interests: selectedInterests

      }))
      setProfilePop("")

    } catch (err) {
      showMessage({
        message: "Interest",
        description: `Interest failed to update`,
        type: "warning"
      });
      console.log(JSON.stringify(err))
    }
  }else{
    showMessage({
      message: "Interest",
      description: `Add more than 4 items`,
      type: "warning"
    });
  }
  };

  useEffect(() => {
    setSelectedInterests(onboardingData.interests)
  }, [])

  return (
    <>
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
              const title = item
              return (
                <Button
                  textColor='white'
                  style={[
                    styles.interestButton,
                    {
                      borderColor: isSelected ? COLORS.magenta_pink : '#FFFFFF14',
                    },
                  ]}
                  buttonColor="#161A22"
                  key={isSelected ? `${item}-selected` : `${item}-unselected`}
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
                  )}
                  {title}
                </Button>
              );
            }}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <CustomButton loading={loading} title="Continue" loading={loading} onPress={onSubmit} containerStyle={selectedInterests.length > 4.5 ? styles.continueButton : styles.continueButton2} textStyle={styles.continueButtonText} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SelectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    overflow: 'hidden',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    fontWeight: "800"
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
    color: COLORS.white,
    flex: 1,
    maxWidth: '33%',
  },
  continueButton: {
    borderRadius: 10,
    marginBottom: 16,
  },
  continueButton2: {
    borderRadius: 10,
    backgroundColor: COLORS.charcoal_black,
    marginBottom: 16,
  },
  continueButtonText: {
    color: COLORS.white,
    fontFamily: FONTS._500Medium.fontFamily,
    fontWeight: "600"
  },
  separator: {
    height: 8,
  },
});
