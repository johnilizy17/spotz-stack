import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Ensure you have react-native-vector-icons installed

const App = () => {
  const categories = [
    { label: "Gaming", icon: "gamepad" },
    { label: "Music", icon: "music" },
    { label: "Book", icon: "book" },
    { label: "Gym", icon: "dumbbell" },
    { label: "Fashion", icon: "shopping-bag" },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Icon name={category.icon} size={20} color="#fff" style={styles.icon} />
          <Text style={styles.label}>{category.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#1c1c1e",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    color: "#fff",
    fontSize: 14,
  },
});

export default App;
