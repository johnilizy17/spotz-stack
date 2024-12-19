import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native-paper';
import MaskedView from '@react-native-masked-view/masked-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CameraView, CameraType, FlashMode, Camera } from 'expo-camera';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Dimensions, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import CameraButton from '../../assets/svg/camera/camera_button';
import { FONTS } from '../../constants/theme';

const { width, height } = Dimensions.get('window');
const CameraScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [permission, setPermission] = useState<boolean | null>(null);
  const cameraRef = useRef<CameraView>(null);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);

  const toggleFlash = () => setFlash(prev => !prev);

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const photo = await cameraRef.current.takePictureAsync();
        navigation.navigate('LoggedOut', {
          screen: 'CheckInSelfie',
          params: { selfie: photo?.uri },
        });
      }
    } catch (error) {
      console.error('Failed to take photo:', error);
    }
  };

  if (!permission) {
    return (
      <View>
        <Text variant="titleLarge" >
          Camera permission not granted
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.camera}
        facing="front"
        enableTorch={flash}
      />

      <ImageBackground
        source={require("../../assets/image/user/cameraCenter.png")}
        resizeMode="cover"
        style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Text variant="titleLarge" style={styles.titleText}>
            Center your face
          </Text>
          <Text variant="bodyLarge" style={styles.bodyText}>
            Align your face to the center of the selfie area
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CameraButton onPress={takePhoto} />
          <Pressable onPress={toggleFlash} style={styles.flashButton}>
            <Ionicons name={flash ? 'flash' : 'flash-off'} size={24} color="#fff" />
          </Pressable>
        </View>
      </ImageBackground>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    height: height+100,
    width: "100%",
    top: 0,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  overlayBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleGuide: {
    width: width - 60,
    height: width - 60,
    borderRadius: (width - 60) / 2,
    backgroundColor: 'transparent',
  },
  circleBorder: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: (width - 60) / 2,
    borderWidth: 2,
    borderColor: 'white',
  },
  contentContainer: {
    position: "absolute",
    bottom: 220,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  titleText: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS._600Medium.fontFamily,
    marginBottom: 8,
  },
  bodyText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: FONTS._600Medium.fontFamily,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 120,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  flashButton: {
    backgroundColor: '#181C23',
    padding: 12,
    borderRadius: 999,
  },
});

export default CameraScreen;
