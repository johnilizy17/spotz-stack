import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Camera from 'expo-camera';
import { StaticScreenProps, useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../../constants/theme';
import FaceIdIcon from '../../assets/svg/auth/face-id';
import RadialEllipse from '../../assets/svg/auth/radial-ellipse';
import CameraControl from '../../assets/svg/camera/camera-control';
import Button from '../../constants/common/Button';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import { useSelector } from 'react-redux';
import { convertImageToBase64 } from '../../service/url/variable/base64';
import { getProfileService, updateProfileService } from '../../service/url/auth/profile';
import { showMessage } from 'react-native-flash-message';
import { onboarding } from '../../features/slice/userSlice';
import { prompts } from '../../constants/common/prompts';

const { width } = Dimensions.get("window")

const CheckInSelfie = ({ route }: StaticScreenProps<{ selfie?: string }>) => {
  const navigation = useNavigation();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const selfie: any = route.params?.selfie;
  const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)

  const onTakeSelfie = async () => {
    if (!permission?.granted) {
      const permissionResult = await requestPermission();
      if (!permissionResult.granted) {
        return;
      }
    }
    navigation.navigate('LoggedOut', { screen: 'CameraScreen' });
  };

  async function ProfileUpated() {
    setLoading(true)
    const prompsArray = prompts.map((a:any)=>{
      return {answer:a.answer, question: a.question}
    })
    const data = { id:user.userId, ...onboardingData, "prompts":prompsArray, selfieUrls:[imageUrl]}
    try {
      const result = await updateProfileService({ userId: user.userId, data:data  })
      navigation.navigate('LoggedOut', { screen: 'SuccessScreen' });
      showMessage({
        message: "Profile",
        description: `Profile successfully update`,
        type: "success",
      });
    } catch (err) {
      console.log(err)
      showMessage({
        message: "Profile",
        description: `Details can not be update`,
        type: "danger",
      });
    }
    setLoading(false)
  }

  useEffect(() => {
    if (selfie) {
      const result = convertImageToBase64(selfie, setImageUrl)
    }
  }, [selfie])

  return (
    <WithNoAuth>
      <SafeAreaView style={styles.container}>
        <View>
          <Text variant="titleLarge" style={styles.title}>
            Set a check-in picture
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            This will be your selfie for check-ins, but you can update it anytime.
          </Text>

          {selfie ? (
            <View style={styles.selfieContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: selfie }}
                  style={styles.image}
                />
              </View>
              <Button
                mode="contained"
                onPress={onTakeSelfie}
                buttonColor={COLORS.charcoal_black}
                style={styles.roundedButton}>
                Retake Selfie
              </Button>
            </View>
          ) : (
            <View style={styles.placeholderContainer}>
              <FaceIdIcon />
              <Text variant="titleMedium" style={styles.placeholderTitle}>
                Check-In Selfie
              </Text>
              <Text variant="bodyMedium" style={styles.placeholderText}>
                Take a selfie when you're ready, make sure your face fits into the
                frame
              </Text>
              <Button
                onPress={onTakeSelfie}
                icon={CameraControl}
                style={styles.takeSelfieButton}
                labelStyle={styles.underlineLabel}>
                Take selfie
              </Button>
            </View>
          )}
        </View>

        <Button
          key={selfie || 'skip'}
          mode={selfie ? 'contained' : 'text'}
          onPress={() => ProfileUpated()}
          style={styles.roundedButton}>
          {loading ?
            <ActivityIndicator size="small" color={COLORS.white} />
            : selfie ? 'Proceed' : 'Skip'
          }
        </Button>
      </SafeAreaView>
    </WithNoAuth>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 50,
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
  },
  selfieContainer: {
    width: width,
    marginTop: 32
  },
  imageContainer: {
    backgroundColor: COLORS.black,
    width: width - 24,
    height: 250,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: COLORS.charcoal_black,
    height: 250,
    marginTop: 32,
    borderRadius: 8,
  },
  placeholderTitle: {
    marginTop: 8,
    marginBottom: 4,
  },
  placeholderText: {
    textAlign: 'center',
    width: 225,
    fontFamily: FONTS._500Medium.fontFamily
  },
  takeSelfieButton: {
    marginTop: 16,
  },
  underlineLabel: {
    textDecorationLine: 'underline',
  },
  roundedButton: {
    borderRadius: 10,
    width: width - 24
  },
});

export default CheckInSelfie;
