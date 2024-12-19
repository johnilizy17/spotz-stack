import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS } from '../../../../constants/theme';
import calculatePercentages from '../../../../service/url/variable/objectPercentage';

const AboutMeSection = ({ item }: { item: any }) => {

  const choose = item.preference.gender.length < 1.1 ? item.preference.gender[0] : `${item.preference.gender[0]},${item.preference.gender[1]}`
  const date = item.dateofBirth ? calculatePercentages(item.dateofBirth) : 25
  const tags = [
    { icon: "♀ ", text: item.pronoun },
    { icon: '👩‍🦳', text: choose },
    { icon: '👫', text: item.gender },
    { icon: '📏', text: item.height.feet },
    { icon: '🎈', text: date }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About me</Text>
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>
              {tag.icon} {tag.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  heading: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: FONTS._400Regular.fontFamily,
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    backgroundColor: COLORS.black_card,
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
    marginBottom: 10
  },
  tagText: {
    color: COLORS.white,
    fontFamily: FONTS._400Regular.fontFamily,
    fontSize: 14,
  },
});

export default AboutMeSection;
