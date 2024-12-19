import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DashboardAuth from "../../constants/HOC/DashboardAuth";

const Chat = () => {
  const [isRecentConnectionsOpen, setIsRecentConnectionsOpen] = useState(true);
  const [isChatEmpty, setIsChatEmpty] = useState(false);
  const navigation = useNavigation();

  const toggleRecentConnections = () => {
    setIsRecentConnectionsOpen(!isRecentConnectionsOpen);
  };
  const handleChatPress = (userName: string) => {
    navigation.navigate('Message', { userName });
  };

  return (
    <DashboardAuth>
      <ScrollView style={styles.frameParent}>
        {isChatEmpty ? (
          <View style={styles.frameGroup}>
            <View style={styles.frameGroup}>
              <Text style={[styles.title, styles.hiiTypo]}>Chats</Text>
            </View>
            <View style={styles.frameParent1}>
              <Image
                style={[styles.frameChild1]}
                resizeMode="cover"
                source={require("../../assets/image/Chat-Image-2.png")}
              />
              <Image
                style={[styles.frameItem1, styles.frameLayout]}
                resizeMode="cover"
                source={require("../../assets/image/Chat-Image.png")}
              />
              <Image
                style={[styles.frameInner, styles.frameLayout]}
                resizeMode="cover"
                source={require("../../assets/image/Chat-Image-3.png")}
              />
            </View>
            <View style={styles.frameParent2}>
              <View style={styles.connectionsStartHereParent}>
                <Text style={[styles.connectionsStartHere, styles.button1Typo]}>
                  Connections start here
                </Text>
                <Text
                  style={[styles.whenYouBoth, styles.button1Typo, { marginBottom: 16 }]}
                >{`When you both swipe right on each other, you’ll match.
Here’s where you can chat`}</Text>
              </View>
              <View style={styles.buttonParent}>
                <View style={[styles.button, styles.buttonFlexBox]}>
                  <Text style={[styles.button1, styles.button1Typo]}>
                    Check-in to a Location
                  </Text>
                </View>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <Text style={[styles.button1, styles.button1Typo]}>
                    Try a Spotlight
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <>
            <View style={styles.frameGroup}>
              <View style={styles.frameGroup}>
                <Text style={[styles.title, styles.hiiTypo]}>Chats</Text>
                <View style={[styles.descriptionWrapper]}>
                  <TextInput
                    style={styles.description}
                    placeholder="Search"
                    placeholderTextColor={styles.description.color}
                  />
                </View>
              </View>
              <View
                style={[
                  styles.frameWrapper,
                  { height: isRecentConnectionsOpen ? 198 : 50 },
                ]}
              >
                <ScrollView
                  style={styles.frameContainer}
                  contentContainerStyle={styles.frameFlexBox}
                >
                  <Pressable
                    style={[
                      styles.recentConnectionsParent,
                      styles.parentFlexBox1,
                    ]}
                    onPress={toggleRecentConnections}
                  >
                    <Text style={[styles.recentConnections, styles.hiiLayout]}>
                      Recent Connections
                    </Text>
                    <Pressable
                      style={styles.riarrowDropDownLine}
                      onPress={toggleRecentConnections}
                    >
                      <Ionicons
                        name={
                          isRecentConnectionsOpen
                            ? "chevron-down-outline"
                            : "chevron-forward-outline"
                        }
                        size={24}
                        color="#fff"
                      />
                    </Pressable>
                  </Pressable>
                  {isRecentConnectionsOpen && (
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.frameFlexBox2}
                    >
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <View style={styles.cynthiaParent}>
                          <Text style={[styles.cynthia, styles.pmTypo]}>
                            Cynthia
                          </Text>
                          <View
                            style={[styles.activeParent, styles.parentFlexBox]}
                          >
                            <Text style={[styles.active, styles.textLayout]}>
                              Active
                            </Text>
                            {/* <Image style={styles.frameItem} resizeMode="cover" source="Ellipse 269.png" /> */}
                          </View>
                        </View>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>Sasha</Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>
                          Loveth
                        </Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>
                          Jolene
                        </Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <View style={styles.cynthiaParent}>
                          <Text style={[styles.cynthia, styles.pmTypo]}>
                            Cynthia
                          </Text>
                          <View
                            style={[styles.activeParent, styles.parentFlexBox]}
                          >
                            <Text style={[styles.active, styles.textLayout]}>
                              Active
                            </Text>
                            {/* <Image style={styles.frameItem} resizeMode="cover" source="Ellipse 269.png" /> */}
                          </View>
                        </View>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>Sasha</Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>
                          Loveth
                        </Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>
                          Jolene
                        </Text>
                      </View>
                      <View style={styles.frameView}>
                        <Image
                          style={styles.frameChild}
                          resizeMode="cover"
                          source={require("../../assets/image/Woman-placeholder.png")}
                        />
                        <Text style={[styles.cynthia, styles.pmTypo]}>
                          Loveth
                        </Text>
                      </View>
                    </ScrollView>
                  )}
                </ScrollView>
              </View>
              <View style={[styles.frameParent10, styles.frameFlexBox3]}>
                <View style={[styles.frameWrapper1, styles.unreadParentFlexBox]}>
                  <View style={[styles.allParent, styles.parentFlexBox]}>
                    <Text style={[styles.all, styles.allTypo]}>All</Text>
                    <View style={[styles.wrapper, styles.parentFlexBox]}>
                      <Text style={[styles.text, styles.textTypo]}>5 +</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.unreadParent, styles.unreadParentFlexBox]}>
                  <Text style={[styles.unread, styles.allTypo]}>Unread</Text>
                  <View style={[styles.wrapper, styles.parentFlexBox]}>
                    <Text style={[styles.text1, styles.textLayout]}>5 +</Text>
                  </View>
                </View>
                <View style={[styles.unreadParent, styles.unreadParentFlexBox]}>
                  <Text style={[styles.unread, styles.allTypo]}>Favourites</Text>
                  <View style={[styles.wrapper, styles.parentFlexBox]}>
                    <Text style={[styles.text2, styles.textTypo]}>1</Text>
                  </View>
                </View>
                <View style={[styles.unreadParent, styles.unreadParentFlexBox]}>
                  <Text style={[styles.unread, styles.allTypo]}>Archived</Text>
                  <View style={[styles.wrapper, styles.parentFlexBox]}>
                    <Text style={[styles.text2, styles.textTypo]}>0</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <Text style={[styles.messages, styles.hiiLayout]}>Messages</Text>
              <View style={styles.frameGroup}>
                <View
                  style={[styles.recentConnectionsParent, styles.parentFlexBox1]}
                >
                  <Image
                    style={styles.frameChild8}
                    resizeMode="cover"
                    source={require("../../assets/image/Woman-placeholder.png")}
                  />
                  <View style={styles.frameParent13}>
                    <View style={styles.parentFlexBox1}>
                      <Text style={[styles.jessicaCampbell, styles.pmTypo]}>
                        Jessicas Campbell
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>13:28 pm</Text>
                    </View>
                    <Text style={[styles.hii, styles.hiiLayout]}>Hii</Text>
                  </View>
                </View>
                <Pressable style={[styles.recentConnectionsParent, styles.parentFlexBox1]}
                  onPress={() => handleChatPress("Jessica Campbell")}
                >
                  <Image
                    style={styles.frameChild8}
                    resizeMode="cover"
                    source={require("../../assets/image/Woman-placeholder.png")}
                  />
                  <View style={styles.frameParent13}>
                    <View style={styles.parentFlexBox1}>
                      <Text style={[styles.jessicaCampbell, styles.pmTypo]}>
                        Jessica Campbell
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>13:28 pm</Text>
                    </View>
                    <View
                      style={[
                        styles.recentConnectionsParent,
                        styles.parentFlexBox1,
                      ]}
                    >
                      <Text style={[styles.niceToMeet, styles.hiiLayout]}>
                        Nice to meet you!!
                      </Text>
                      <View
                        style={{
                          borderRadius: 100,
                          backgroundColor: "#FF2D89",
                          width: 12,
                          height: 12,
                        }}
                      ></View>
                    </View>
                  </View>
                </Pressable>
                <Pressable
                  style={[styles.recentConnectionsParent, styles.parentFlexBox1]}
                  onPress={() => { }}
                >
                  <Image
                    style={styles.frameChild8}
                    resizeMode="cover"
                    source={require("../../assets/image/Woman-placeholder.png")}
                  />
                  <View style={styles.frameParent13}>
                    <View style={styles.parentFlexBox1}>
                      <Text style={[styles.jessicaCampbell, styles.pmTypo]}>
                        Jessica Campbell
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>13:28 pm</Text>
                    </View>
                    <View
                      style={[
                        styles.recentConnectionsParent,
                        styles.parentFlexBox1,
                      ]}
                    >
                      <Text style={[styles.hii1, styles.hiiLayout]}>Hii</Text>
                      {/* <Image style={styles.iconcheckCheck} resizeMode="cover" source="icon/check-check.png" /> */}
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </DashboardAuth>

  );
};

const styles = StyleSheet.create({
  hiiTypo: {
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  frameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameFlexBox2: {
    flexDirection: "row",
    marginTop: 14,
    gap: 20,
    paddingRight: 20,
  },
  frameFlexBox3: {
    flexDirection: "row",
  },
  parentFlexBox1: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  hiiLayout: {
    lineHeight: 20,
    fontSize: 16,
  },
  pmTypo: {
    textAlign: "center",
    fontFamily: "SF Pro Display",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textLayout: {
    lineHeight: 13,
    fontSize: 10,
  },
  unreadParentFlexBox: {
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  allTypo: {
    lineHeight: 18,
    fontSize: 14,
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  textTypo: {
    width: 14,
    textAlign: "center",
    fontWeight: "700",
    fontFamily: "SF Pro Display",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "500",
    alignSelf: "stretch",
  },
  description: {
    lineHeight: 24,
    color: "#b6b7b8",
    fontWeight: "300",
    fontSize: 16,
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  descriptionWrapper: {
    borderRadius: 10,
    paddingHorizontal: 17,
    paddingVertical: 4,
    //alignItems: "center",
    backgroundColor: "#1b1d22",
  },
  frameGroup: {
    alignSelf: "stretch",
    gap: 24,
  },
  recentConnections: {
    textAlign: "left",
    fontFamily: "SF Pro Display",
    color: "#fff",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  riarrowDropDownLine: {
    width: 30,
    height: 30,
  },
  recentConnectionsParent: {
    alignItems: "center",
  },
  frameChild: {
    borderRadius: 9,
    width: 90,
    height: 102,
    overflow: "hidden",
  },
  cynthia: {
    fontWeight: "700",
    textAlign: "center",
    color: "#fff",
    lineHeight: 15,
    fontSize: 12,
    alignSelf: "stretch",
  },
  active: {
    color: "#22c55e",
    textAlign: "center",
    fontFamily: "SF Pro Display",
    fontWeight: "300",
  },
  frameItem: {
    width: 3,
    height: 3,
  },
  activeParent: {
    display: "none",
    gap: 2,
    alignSelf: "stretch",
  },
  cynthiaParent: {
    width: 43,
    gap: 2,
    alignItems: "center",
  },
  frameView: {
    gap: 8,
    alignItems: "center",
  },
  frameScrollview: {
    gap: 20,
    alignItems: "center",
    width: "100%",
  },
  frameContainer: {
    gap: 14,
    width: "100%",
    marginTop: 9,
  },
  frameWrapper: {
    backgroundColor: "#0c0f14",
    borderColor: "#282a30",
    borderWidth: 1,
    width: "100%",
    overflow: "hidden",
    borderStyle: "solid",
    borderRadius: 8,
    paddingHorizontal: 7,
  },
  all: {
    color: "#ff2d89",
  },
  text: {
    fontSize: 8,
    lineHeight: 10,
    color: "#ff2d89",
  },
  wrapper: {
    borderRadius: 569,
  },
  allParent: {
    gap: 2,
  },
  frameWrapper1: {
    borderColor: "#ff2d89",
    borderBottomWidth: 1,
    padding: 10,
    borderStyle: "solid",
    flex: 1,
  },
  unread: {
    color: "#fff",
  },
  text1: {
    width: 18,
    textAlign: "center",
    fontFamily: "SF Pro Display",
    fontWeight: "700",
    color: "#fff",
  },
  unreadParent: {
    flex: 0.8726,
    paddingHorizontal: 14,
    paddingVertical: 7,
    gap: 2,
    borderRadius: 8,
    backgroundColor: "#1b1d22",
  },
  text2: {
    lineHeight: 13,
    fontSize: 10,
    color: "#fff",
  },
  frameParent10: {
    gap: 10,
    alignItems: "center",
    marginTop: 10,
  },
  messages: {
    textAlign: "left",
    fontFamily: "SF Pro Display",
    color: "#fff",
    alignSelf: "stretch",
  },
  frameChild8: {
    borderRadius: 1267,
    width: 52,
    height: 52,
    overflow: "hidden",
  },
  jessicaCampbell: {
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 16,
    color: "#fff",
  },
  pm: {
    lineHeight: 15,
    fontSize: 12,
    color: "#b6b7b8",
    fontWeight: "500",
  },
  hii: {
    color: "#b6b7b8",
    fontWeight: "300",
    textAlign: "left",
    fontFamily: "SF Pro Display",
    alignSelf: "stretch",
  },
  frameParent13: {
    width: 298,
    gap: 4,
  },
  niceToMeet: {
    textAlign: "left",
    fontFamily: "SF Pro Display",
    color: "#fff",
    fontWeight: "500",
  },
  frameChild10: {
    width: 12,
    height: 12,
  },
  hii1: {
    color: "#b6b7b8",
    fontWeight: "300",
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  iconcheckCheck: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  frameParent: {
    gap: 24,
    width: "100%",
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 16,
  },
  frameParent2: {
    marginTop: 220,
  },
  frameLayout: {
    height: 202,
    width: 163,
    left: "50%",
    overflow: "hidden",
    borderRadius: 9,
    position: "absolute",
  },
  frameChild1: {
    left: 124,
    width: 121,
    height: 177,
    overflow: "hidden",
    borderRadius: 9,
    position: "absolute",
    top: 0,
  },
  frameItem1: {
    marginLeft: -180.5,
    top: 0,
    height: 202,
    width: 163,
    left: "50%",
  },
  frameInner: {
    marginLeft: 17.93,
    top: 2,
  },
  frameParent1: {
    flex: 1,
    width: "100%",
    height: 204,
    marginTop: 83,
  },
  button1Typo: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "SF Pro Display",
  },
  buttonFlexBox: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    flexDirection: "row",
    height: 48,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "stretch",
  },
  connectionsStartHere: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  whenYouBoth: {
    fontSize: 14,
    lineHeight: 18,
    alignSelf: "stretch",
  },
  connectionsStartHereParent: {
    alignItems: "center",
    alignSelf: "stretch",
    gap: 16,
  },
  button1: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#ff2d89",
  },
  button2: {
    backgroundColor: "#1b1d22",
  },
  buttonParent: {
    alignSelf: "stretch",
    gap: 16,
  },

});

export default Chat;
