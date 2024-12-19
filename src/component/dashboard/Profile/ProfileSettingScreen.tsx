import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderSettingProfile } from '../component/Header';
import { COLORS, FONTS } from '../../../constants/theme';
import ProfileSettingCirlce from '../component/profile/ProfileCirlce';
import CheckInPhoto from '../component/profile/CheckInPhoto';
import PhotoContainer from '../component/profile/PhotoContainer';
import AddImage from '../../../assets/svg/camera/add_image';
import ProfileDetails from '../component/profile/Gender';
import GenderPop from '../component/profile/Pop/GenderPop';
import TypePop from '../component/profile/Pop/TypePop';
import SexPop from '../component/profile/Pop/SexPop';
import HeightPop from '../component/profile/Pop/HeightPop';
import InterestProfile from '../component/profile/InterestProfile';
import SelectPop from '../component/profile/Pop/SelectPop';
import PromptsProfile from '../component/profile/PromptsProfile';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import calculatePercentages from '../../../service/url/variable/objectPercentage';
import Ethnicity from '../component/profile/Pop/Ethnicity';
import { uploadImageService } from '../../../service/url/image/ImageUpload';
import { handleApiError } from '../../../service/url/variable/handle';
import { getProfileService, updateProfileService } from '../../../service/url/auth/profile';
import { onboarding } from '../../../features/slice/userSlice';
import { showMessage } from 'react-native-flash-message';

const ProfileSettingScreen = ({ setActiveTab }: { setActiveTab: any }) => {

  const [profilePop, setProfilePop] = useState("")
  const [imageUri, setImageUri] = React.useState<any>(null);
  const { onboardingData, user } = useSelector((a: { user: { onboardingData: any, user: any } }) => a.user)
  const dispatch = useDispatch();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', "livePhotos"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  async function imageUpload() {
    try {
      const result = await uploadImageService({ userId: user.userId, image: imageUri })
      const imageSearch = onboardingData.selfieUrls ? onboardingData.selfieUrls : []
      const profile = await updateProfileService({
        userId: user.userId, data: {
          ...onboardingData, selfieUrls: [...imageSearch, result.data]
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
      showMessage({
        message: "Image Upload",
        description: `Image failed to upload`,
        type: "warning",
      });
      handleApiError(err)
    }
  }

  useEffect(() => {
    if (imageUri) {
      imageUpload()
    }
  }, [imageUri])

  return (
    <View style={styles.container}>
      {profilePop != "" && <GenderPop profilePop={profilePop} setProfilePop={setProfilePop} />}
      {profilePop != "" && <TypePop profilePop={profilePop} setProfilePop={setProfilePop} />}
      {profilePop != "" && <SexPop profilePop={profilePop} setProfilePop={setProfilePop} />}
      {profilePop != "" && <HeightPop profilePop={profilePop} setProfilePop={setProfilePop} />}
      {profilePop != "" && <SelectPop profilePop={profilePop} setProfilePop={setProfilePop} />}
      {profilePop != "" && <Ethnicity profilePop={profilePop} setProfilePop={setProfilePop} />}

      {/* Header Section */}
      <HeaderSettingProfile setActiveTab={setActiveTab} />
      <ScrollView nestedScrollEnabled={true} style={styles.settingsContainer}>
        <View style={styles.header}>
          <ProfileSettingCirlce />
          <View style={{ marginLeft: 17 }}>
            <Text style={styles.profileStrengthText}>Profile Strength: {calculatePercentages(onboardingData)}%</Text>
            <Text style={styles.profileStatus}>Update profile information</Text>
          </View>
        </View>

        {/* Check-in Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Check-in Photo & Poses</Text>
          <Text style={styles.sectionSubtitle}>
            Boost profile strength and upload photos you think show the best of you.
          </Text>
        </View>
        <View>
          <CheckInPhoto />
          <Text style={styles.sectionTitle}>Photos</Text>
        </View>
        {/* Photos Section */}
        <View style={styles.photosContainer}>
          {onboardingData.selfieUrls && onboardingData.selfieUrls.map((a: string, b: number) => {
            return (
              <View key={b} style={b > 1 ? { display: "flex", marginLeft: 10 } : b > 0.5 ? { display: "flex" } : { display: "none" }}>
                <PhotoContainer url={a} />
              </View>
            )
          }
          )}
          <TouchableOpacity onPress={pickImage} style={styles.addPhoto}>
            <AddImage />
          </TouchableOpacity>
        </View>

        {/* About Me Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.sectionSubtitle}>
            Update your "About Me" and upload photos you think show the best of you.
          </Text>
        </View>

        {/* Social Media Links */}
        <View style={styles.socialLinks}>
          <ProfileDetails setProfilePop={setProfilePop} />
        </View>

        {/* Interests Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.sectionSubtitle}>
            Update your cover photo and upload photos you think show the real you.
          </Text>
        </View>
        <InterestProfile setProfilePop={setProfilePop} />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pompts</Text>
          <Text style={styles.sectionSubtitle}>
            Update your cover photo and upload photos you think show the real you.
          </Text>
        </View>
        <PromptsProfile />
      </ScrollView >
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  settingsContainer: {
    padding: 16,
    flex: 1
  },
  header: {
    backgroundColor: COLORS.charcoal_black,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 25,
    borderRadius: 8,
    height: 106,
    marginBottom: 16,
  },
  profileStrengthText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS._700Bold.fontFamily,
    fontWeight: '700',
  },
  profileStatus: {
    color: COLORS.black_white,
    marginTop: 4,
    fontSize: 14,
    fontFamily: FONTS._400Regular.fontFamily
  },
  section: {
    marginBottom: 16,
    marginTop: 20
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: COLORS.silver_gray,
    fontSize: 14,
  },
  photosContainer: {
    flexDirection: 'row',
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "wrap"
  },
  addPhoto: {
    width: 113.67,
    height: 141,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: COLORS.magenta_pink,
    borderStyle: "dashed",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoText: {
    color: '#bbb',
    fontSize: 24,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  socialLink: {
    color: '#fff',
    fontSize: 24,
  },
});

export default ProfileSettingScreen;
