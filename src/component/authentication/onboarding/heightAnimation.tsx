import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';

const HEIGHT_DATA = [
  { feet: "5'9", cm: '176cm' },
  { feet: "5'10", cm: '178cm' },
  { feet: "5'11", cm: '181cm' },
  { feet: "6'0", cm: '183cm' },
  { feet: "6'1", cm: '185cm' },
];

const ITEM_HEIGHT = 60; // Height of each item
const SCREEN_WIDTH = Dimensions.get('window').width;

const HeightSelector = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }:any) => {
    const inputRange = [
      (index - 1) * ITEM_HEIGHT,
      index * ITEM_HEIGHT,
      (index + 1) * ITEM_HEIGHT,
    ];

    // Interpolate the scale and opacity of the item
    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp',
    });

    const fontSize = scrollY.interpolate({
      inputRange,
      outputRange: [14, 20, 14],
      extrapolate: 'clamp',
    });

    const color = scrollY.interpolate({
      inputRange,
      outputRange: ['#aaa', '#fff', '#aaa'],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
        <Animated.Text
          style={[styles.itemText, { fontSize, color }]}
        >
          {item.feet} ({item.cm})
        </Animated.Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={HEIGHT_DATA}
        keyExtractor={(item) => item.feet}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        bounces={false}
        snapToInterval={ITEM_HEIGHT} // Snap to each item
        decelerationRate="fast"
        scrollEventThrottle={16} // Ensures smooth scrolling
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{
          paddingVertical: SCREEN_WIDTH / 2 - ITEM_HEIGHT / 2,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontWeight: 'bold',
  },
});

export default HeightSelector;
