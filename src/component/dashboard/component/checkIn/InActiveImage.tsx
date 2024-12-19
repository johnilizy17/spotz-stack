import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import Love from '../../../../assets/svg/user/love';
import { COLORS, FONTS } from '../../../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import LoveCircle from '../../../../assets/svg/user/LoveCircle';

const InActiveImage = ({ item }: { item: string }) => {

  const navigation = useNavigation()

  return (
    <ImageBackground
      source={{ uri: item }} // Replace with actual image URL
      style={styles.card}>
      {/* Profile Image */}

      {/* Heart Button */}
      <View style={styles.heartButton}>
        <TouchableOpacity onPress={() => navigation.navigate("Match" as never)}>
          <LoveCircle />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: "100%",
    height: 400,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
    resizeMode: 'cover',
    backgroundColor: '#000',
  },
  commonInterests: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: COLORS.frame_sliver,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 154,
    height: 38
  },
  commonText: {
    color: COLORS.white,
    fontFamily: FONTS._400Regular.fontFamily,
    fontSize: 14,
  },
  heartButton: {
    position: 'absolute',
    bottom: 20,
    right: 10
  }
});

export default InActiveImage
