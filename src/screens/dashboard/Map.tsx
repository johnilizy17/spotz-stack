import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  PanResponder,
  TextInput,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { COLORS } from "../../constants/theme";
import "react-native-get-random-values";
import CheckInIcon from "../../assets/svg/menu/check_in";
import Eye from "../../assets/svg/user/eye";
import Time from "../../assets/svg/checkIn/time";
import Star from "../../assets/svg/checkIn/star";
import { getNearbySpots } from "../../service/url/map";
import { showMessage } from "react-native-flash-message";
import MapDirection from "../../assets/svg/map/map_direction";
import { searchSpotsByNameAndLocation } from "../../service/url/map";

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

// Add this helper function at the top of your file

// Add this custom map style array outside your component
const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#212121",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "administrative.country",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#181818",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1b1b1b",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#2c2c2c",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#8a8a8a",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#373737",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#3c3c3c",
      },
    ],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "geometry",
    stylers: [
      {
        color: "#4e4e4e",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d",
      },
    ],
  },
];

const Map = () => {
  const [userLocation, setUserLocation] = useState<Region | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<Spotz | null>(null);
  const [allSpots, setAllSpots] = useState<Spotz[]>([]); // Add this state
  const mapRef = React.useRef<MapView>(null);
  const slideAnim = React.useRef(new Animated.Value(1000)).current;
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          slideAnim.setValue(300 + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          setSelectedSpot(null); // Set to null immediately
          Animated.spring(slideAnim, {
            toValue: 1000,
            useNativeDriver: true,
            tension: 50,
            friction: 7,
          }).start();
        } else {
          Animated.spring(slideAnim, {
            toValue: 300,
            useNativeDriver: true,
            tension: 50,
            friction: 7,
          }).start();
        }
      },
    })
  ).current;

  const handleRegionChange = async (region: Region) => {
    try {
      const payload = {
        latitude: region.latitude,
        longitude: region.longitude,
        maxDistance: 5000, // 5km radius, adjust as needed
        limit: 10, // maximum number of spots to fetch
        userId: "your-user-id", // replace with actual user ID if needed
      };

      const response = await getNearbySpots(payload);
      setAllSpots(response.data);
    } catch (error) {
      console.error("Error fetching nearby spots:", error);
      showMessage({
        message: "Error",
        description: "Failed to fetch nearby spots",
        type: "danger",
      });
    }
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        
        const newRegion = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        };
        setUserLocation(newRegion);
      } catch (error) {
        console.error("Error getting location:", error);
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedSpot) {
      Animated.spring(slideAnim, {
        toValue: 300,
        useNativeDriver: true,
        tension: 50,
        friction: 7,
      }).start();
    } else {
    }
  }, [selectedSpot]);


  const returnToUserLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.0012,
          longitudeDelta: 0.0011,
        },
        1000
      ); // 1000ms animation duration
    }
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim() || !userLocation) return;
    setIsSearching(true);
    try {
      const payload = {
        name: encodeURIComponent(searchQuery),
        latitude: userLocation.latitude,
        longitude: userLocation.longitude
      };
      
      const response = await searchSpotsByNameAndLocation(payload);
      setAllSpots(response.data);
      setSelectedSpot(response.data[0]);
      // If results found, center the map on the first result
      if (response.data.length > 0) {
        mapRef.current?.animateToRegion({
          latitude: response.data[0].location.coordinates[1],
          longitude: response.data[0].location.coordinates[0],
          latitudeDelta: 0.0122,
          longitudeDelta: 0.0121,
        }, 1000);
      } else {
        showMessage({
          message: "No Results",
          description: "No spots found with that name in your area",
          type: "info"
        });
      }
    } catch (error) {
      console.error("Search error:", error);
      showMessage({
        message: "Error",
        description: "Failed to search for spots",
        type: "danger"
      });
    } finally {
      setIsSearching(false);
    }
  };

  if (!userLocation) {
    return (
      <View style={styles.container}>
        <Text>Loading map...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search spots..."
          placeholderTextColor={COLORS.silver_gray}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {isSearching && (
          <ActivityIndicator 
            style={styles.searchLoader}
            color={COLORS.magenta_pink} 
          />
        )}
      </View>

      <MapView
        ref={mapRef}
        key="mainMap"
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={userLocation}
        customMapStyle={darkMapStyle}
        onRegionChangeComplete={handleRegionChange}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {/* User Location Marker */}
       
        {allSpots.map((spot) => (
          <Marker
            
            coordinate={{
              latitude: spot.location.coordinates[1],
              longitude: spot.location.coordinates[0],
            }}
            onPress={() => setSelectedSpot(spot)}
          >
            <Image
              source={require("../../assets/image/map/Map-pin.png")}
              style={{ width: 30, height: 29 }}
            />
            <View style={styles.peopleContainer}>
              <Text style={styles.text}>{spot.activeUserCount}</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={[styles.myLocationButton, { bottom: !selectedSpot ? 20 : 530 }]}
        onPress={returnToUserLocation}
      >
        <MapDirection />
      </TouchableOpacity>

      {/* Place Details Card */}

      {selectedSpot && (
        <Animated.View
          style={[
            styles.detailsCard,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styles.dragIndicator} />
          <Text style={styles.placeName}>{selectedSpot.name}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckInIcon color={COLORS.magenta_pink} width="16" height="16" />
              <Text style={styles.checkInText}>
                {selectedSpot.activeUserCount} users checked in
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row", marginRight: 8 }}>
                <Image
                  source={require("../../assets/image/user/woman.png")}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    position: "absolute",
                    right: 48,
                    borderWidth: 2,
                    borderColor: COLORS.black,
                    opacity: 0.5,
                    blurRadius: 5,
                  }}
                />
                <Image
                  source={require("../../assets/image/user/woman.png")}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    position: "absolute",
                    right: 32,
                    borderWidth: 2,
                    borderColor: COLORS.black,
                    opacity: 0.5,
                    blurRadius: 5,
                  }}
                />
                <Image
                  source={require("../../assets/image/user/woman.png")}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    position: "absolute",
                    right: 16,
                    borderWidth: 2,
                    borderColor: COLORS.black,
                    opacity: 0.5,
                    blurRadius: 5,
                  }}
                />
                <View
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    right: 6,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Eye width="16" height="16" color="white" />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.placeAddress}>{selectedSpot.address}</Text>
          <View style={styles.descriptionParent}>
            <Text style={styles.descriptionTypo}>
              {selectedSpot.location.type}
            </Text>
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 3,
                height: 3,
                borderRadius: 100,
                marginRight: 7,
                marginLeft: 7,
              }}
            ></View>
            <View style={styles.descriptionGroup}>
              <Text style={[styles.description1, styles.descriptionTypo]}>
                Open until 2 AM
              </Text>
              <View style={styles.mingcutetimeLineIcon}>
                <Time />
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 3,
                height: 3,
                borderRadius: 100,
                marginRight: 5,
                marginLeft: 5,
              }}
            ></View>
            <View style={styles.descriptionContainer}>
              <Text style={[styles.description1, styles.descriptionTypo]}>
                4.7 from 250 reviews
              </Text>
              <View style={styles.mingcutetimeLineIcon}>
                <Star />
              </View>
            </View>
          </View>
          <Text style={styles.placeDescription}>
            {selectedSpot.editorialSummary}
          </Text>
          {selectedSpot && selectedSpot.photoUrl && (
            <View
              style={{
                marginBottom: 38,
                marginTop: 16,
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                height: 180,
                width: "100%",
              }}
            >
              <Image
                source={{ uri: selectedSpot.photoUrl.split(",")[0] }}
                style={{ height: "100%", width: "50%" }}
              />

              <View
                style={{ marginLeft: 10, gap: 8, height: "100%", width: "45%" }}
              >
                <Image
                  source={{ uri: selectedSpot.photoUrl.split(",")[2] }}
                  style={{ height: "48%", width: "100%" }}
                />
                <Image
                  source={{ uri: selectedSpot.photoUrl.split(",")[1] }}
                  style={{ height: "48%", width: "100%" }}
                />
              </View>
            </View>
          )}

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedSpot(null)}
          >
            <Text style={styles.closeButtonText}>Check In</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  detailsCard: {
    position: "absolute",
    //left: 20,
    //right: 20,
    backgroundColor: COLORS.black,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
  },
  placeName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 13,
    color: COLORS.white,
    fontFamily: "SFPRODISPLAYREGULAR",
  },
  placeDescription: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 8,
    fontWeight: "400",
  },
  placeAddress: {
    fontSize: 16,
    color: COLORS.white,
    marginBottom: 8,
    marginTop: 8,
  },
  placeRating: {
    fontSize: 14,
    color: COLORS.silver_gray,
    marginBottom: 12,
  },
  closeButton: {
    backgroundColor: COLORS.magenta_pink,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeButtonText: {
    color: COLORS.white,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
  },
  searchContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  searchInput: {
    backgroundColor: COLORS.charcoal_black,
    color: COLORS.white,
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  checkInText: {
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "400",
  },
  descriptionTypo: {
    textAlign: "left",
    color: "#b6b7b8",
    fontFamily: "SF Pro Display",
    lineHeight: 18,
    fontSize: 14,
  },
  frameChild: {
    width: 3,
    height: 3,
  },
  description1: {
    top: 0,
    left: 20,
    position: "absolute",
  },
  mingcutetimeLineIcon: {
    top: 1,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  descriptionGroup: {
    width: 105,
    height: 18,
  },
  descriptionContainer: {
    width: 126,
    height: 18,
  },
  descriptionParent: {
    alignSelf: "stretch",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "space-between",
    marginBottom: 10,
    color: "#B6B7B8",
  },
  myLocationButton: {
    position: "absolute",
    right: 20,
    bottom: 20, // Adjust position based on whether detail card is shown
    backgroundColor: COLORS.black,
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  myLocationButtonText: {
    fontSize: 20,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    backgroundColor: "#ffffff50",
    borderRadius: 3,
    alignSelf: "center",
    marginBottom: 10,
  },
  peopleContainer: {
    position: "absolute",
    top: "59%",
    left: "75%",
    transform: [{ translateX: -8 }], // Half of the People icon width
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
    position: "absolute",
    top: -15,
  },
  searchLoader: {
    position: 'absolute',
    right: 15,
  },
});
