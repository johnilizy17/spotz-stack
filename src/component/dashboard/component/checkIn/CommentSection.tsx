import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install Expo icons or use other icon libraries
import { COLORS, FONTS } from '../../../../constants/theme';
import SmallLoveCircle from '../../../../assets/svg/user/SmallLoveCircle';

export default function CommentSection({ comment }: { comment: any }) {
  return (
    <ImageBackground
      source={require("../../../../assets/image/user/Banner.png")}
      resizeMode='cover'
      style={styles.container}>
      <Text style={styles.subtitle}>I can guarantee that...</Text>
      <Text style={styles.mainText}>I’ll definitely make fine babies</Text>
      <TouchableOpacity style={styles.heartButton}>
        <SmallLoveCircle />
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 19,
    marginBottom: 10,
    overflow: "hidden"
  },
  subtitle: {
    color: COLORS.white,
    fontSize: 16,
    fontStyle: 'italic',
    fontFamily: FONTS._400Regular.fontFamily,
    marginBottom: 10,
  },
  mainText: {
    color: COLORS.white,
    fontFamily: FONTS._400Regular.fontFamily,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  heartButton: {
    position: "absolute",
    right: 10,
    bottom: 0
  },
});
