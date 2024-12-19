import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../../../../constants/theme";
import { FlatList } from "react-native-gesture-handler";
import { getSubService } from "../../../../service/url/sub/subscribtion";
import { useSelector } from "react-redux";

const data = [
  { id: '1', label: "Mega", price: 300, isBestOffer: true },
  { id: '2', label: "Mega", price: 300, isBestOffer: false },
  { id: '3', label: "Mega", price: 300, isBestOffer: false },
  { id: '4', label: "Mega", price: 300, isBestOffer: false },
];

const SubPrice = ({ setSubPage }: { setSubPage: any }) => {
  const [data, setData] = useState([{ "duration": 30, "id": "675d65b9e9c7815e9f46a95a", "price": 100.89, "title": "Premium Paid Features" }])
  const { user } = useSelector((a: { user: { user: any } }) => a.user)

  async function FetchSubscribtion() {
    const result = await getSubService()
    setData(result.data.data)
  }

  useEffect(() => {
    FetchSubscribtion()
  }, [])


  const SubscriptionCard = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={() => setSubPage(item)}
      >
        <LinearGradient
          colors={['#320000', '#000000']} // Adjust these colors to match the gradient
          style={[styles.card, item.isBestOffer && styles.bestOfferCard]}
        >
          {item.isBestOffer && <Text style={styles.bestOfferLabel}>Best offer</Text>}
          <View style={styles.priceContainer}>
            <Text style={styles.duration}>{item.duration > 29 ? item.duration / 30 : item.duration} {item.duration > 29 ? "months" : "days"}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
          <Text style={styles.features}>{item.title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data} // Array of data
      renderItem={SubscriptionCard} // Function to render each item
      horizontal={true}  // Enable horizontal scrolling
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false} // Hide the scroll bar
      keyExtractor={(item) => item.id} // Unique key for each item
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    height: 240
  },
  priceContainer: {
    backgroundColor: COLORS.pink_black,
    justifyContent: "center",
    marginBottom: 25,
    alignItems: "center",
    width: 114,
    borderRadius: 8,
    height: 96
  },
  card: {
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 196,
    marginBottom: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginRight: 20
  },
  bestOfferCard: {
    borderColor: "#ff007f",
    borderWidth: 2,
  },
  bestOfferLabel: {
    backgroundColor: "#ff007f",
    fontFamily: FONTS._500Medium.fontFamily,
    color: "#fff",
    paddingHorizontal: 8,
    position: "absolute",
    top: -12,
    paddingVertical: 4,
    borderRadius: 5,
    fontSize: 12,
  },
  duration: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 5,
    fontFamily: FONTS._500Medium.fontFamily
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  features: {
    fontSize: 14,
    color: COLORS.silver_gray,
    fontFamily: FONTS._500Medium.fontFamily,
    textAlign: "center",
  },
});

export default SubPrice;
