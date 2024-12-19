import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../../../../constants/theme';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImageService } from '../../../../service/url/image/ImageUpload';
import { handleApiError } from '../../../../service/url/variable/handle';
import { showMessage } from 'react-native-flash-message';
import { getProfileService, updateProfileService } from '../../../../service/url/auth/profile';
import { onboarding } from '../../../../features/slice/userSlice';

const CheckInPhoto = () => {


  const [imageUri, setImageUri] = React.useState<any>(null);
  const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
  const dispatch = useDispatch()
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', "livePhotos"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      console.log(result.assets)
      setImageUri(result.assets[0].uri);
    }
  };

  async function imageUpload() {
    try {
      const result = await uploadImageService({ userId: user.userId, image: imageUri })
      const imageSearch = onboardingData.selfieUrls ? onboardingData.selfieUrls : []
      const profile = await updateProfileService({
        userId: user.userId, data: {
          ...onboardingData, selfieUrls: [result.data, ...imageSearch]
        }
      })
      const userProfile = await getProfileService({ userId: user.userId })
      dispatch(onboarding(userProfile.data))
      showMessage({
        message: "Image Upload",
        description: `Image successfully uploaded`,
        type: "success",
      });
    } catch (err) {
      handleApiError(err)
      showMessage({
        message: "Image Upload",
        description: `Image failed to upload`,
        type: "warning",
      });
    }
  }
  useEffect(() => {
    if (imageUri) {
      imageUpload()
    }
  }, [imageUri])
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUri ?
          <Image source={{ uri: imageUri }} style={styles.image} />
          :
          <Image
            source={onboardingData.selfieUrls && onboardingData.selfieUrls[0] ? { uri: onboardingData.selfieUrls[0] } : require("../../../../assets/image/Demo/demo_profile.png")} // Replace with your image URL
            style={styles.image}
          />
        }
      </View>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Check-ins photo</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: 110,
    position: "relative"
  },
  imageContainer: {
    width: 110,
    height: 130,
    borderRadius: 3.63,
    overflow: 'hidden'
  },
  image: {
    width: '120%',
    height: '120%',
  },
  labelContainer: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "400",
    color: COLORS.magenta_pink,
    height: 26,
    width: 97,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    position: "absolute",
    bottom: 10,
    backgroundColor: COLORS.charcoal_black,
    borderRadius: 4.41,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    fontFamily: FONTS._600Medium.fontFamily,
    color: COLORS.magenta_pink
  }
});

export default CheckInPhoto;
