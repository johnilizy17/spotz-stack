import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../constants/theme";
import Call from "../../assets/svg/chat/call";
import Video from "../../assets/svg/chat/video";
import Ionicons from "@expo/vector-icons/Ionicons";
import Mark from "../../assets/svg/chat/mark";
import EmojiFilled from "../../assets/svg/chat/emoji_filled";
import MicFilled from "../../assets/svg/chat/mic_filled";
import { default as MessageIcon } from "../../assets/svg/chat/message";

const Message = () => {
  const route = useRoute();
  const { userName } = route.params as { userName: string };
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={{ backgroundColor: "#0c0f14", height: "100%" }}>
      <View style={[styles.controlsButtonBackParent, styles.parentFlexBox1]}>
        <Pressable
          style={styles.controlsButtonBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </Pressable>
        <View style={[styles.frameParent, styles.parentFlexBox]}>
          <Pressable style={styles.wrapper} onPress={() => {}}>
            <Image
              style={[styles.icon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../../assets/image/Woman-placeholder.png")}
            />
          </Pressable>
          <View style={styles.frameGroup}>
            <View style={[styles.jessicaCampbellParent, styles.parentFlexBox]}>
              <Text style={[styles.jessicaCampbell, styles.pmTypo]}>
                {userName}
              </Text>
              <View
                style={[styles.fluentcall12FilledParent, styles.parentFlexBox1]}
              >
                <View style={styles.fluentcall12FilledIcon}>
                  <Call />
                </View>
                <View>
                  <Video />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 18,
          fontFamily: "SF Pro Display",
          color: "#b6b7b8",
          textAlign: "center",
          marginTop: 30,
          marginBottom: 24,
        }}
      >
        19 August
      </Text>
      <View style={styles.chatBubbleContainer}>
        <View style={styles.chatBubble}>
          <Text style={[styles.message, { color: "white" }]}>
            Hi there, it's really nice to meet you Jessica
          </Text>
          <Text style={styles.timestamp}>11:25</Text>
        </View>
      </View>
      <View style={styles.replyContainer}>
        <Image
          style={styles.replyImage}
          resizeMode="cover"
          source={require("../../assets/image/Woman-placeholder.png")}
        />
        <View style={styles.replyBubble}>
          <Text style={[styles.message2, { color: "white" }]}>
            Hello my dear Emmanuel, it’s nice to meet you too, looking forward
            to knowing more about you
          </Text>
          <View style={styles.replyTimestampContainer}>
            <Text style={styles.timestamp}>10:25</Text>
            <View style={styles.checks} />
          </View>
        </View>
      </View>
      <View style={styles.commentSection}>
        <ScrollView style={styles.commentTab} >
          <View style={[styles.commentTab1, styles.commentTab1FlexBox]}>
            <View style={[styles.tab, styles.tabBorder]}>
              <Text style={styles.label}>Well said!</Text>
            </View>
            <View style={[styles.tab, styles.tabBorder]}>
              <Text style={styles.label}>Thought so</Text>
            </View>
            <View style={[styles.tab, styles.tabBorder]}>
              <Text style={styles.label}>Thank you</Text>
            </View>
            <View style={[styles.tab, styles.tabBorder]}>
              <Text style={styles.label}>You’re welcome</Text>
            </View>
            <View style={[styles.tab4, styles.tabBorder]}>
              <Text style={styles.label}>When will this be done</Text>
            </View>
            <View style={[styles.tab4, styles.tabBorder]}>
              <Text style={styles.label}>Okay!</Text>
            </View>
          </View>
        </ScrollView>
        <View style={[styles.frameParent3, styles.commentTab1FlexBox]}>
          <View style={styles.frameWrapper}>
            <View style={[styles.frameGroup3, styles.frameGroupFlexBox]}>
              <View style={[styles.mdiemojiParent, styles.frameGroupFlexBox]}>
                <View style={styles.frameChildLayout}>
                    <EmojiFilled />
                </View>
                <Text style={styles.leaveAMessage}>{`Leave a message `}</Text>
              </View>
             <MicFilled />
            </View>
          </View>
          <View style={{backgroundColor: COLORS.magenta_pink, borderRadius: 100, height: 40, width: 40, justifyContent: "center", alignItems: "center"}}>
             <MessageIcon />
          </View>
        
        </View>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  parentFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  pmTypo: {
    textAlign: "center",
    fontFamily: "SF Pro Display",
  },
  controlsButtonBack: {
    width: 24,
    height: 24,
  },
  icon1: {
    borderRadius: 877,
    overflow: "hidden",
  },
  wrapper: {
    width: 36,
    height: 36,
  },
  jessicaCampbell: {
    fontWeight: "600",
    color: "#fff",
    lineHeight: 20,
    fontSize: 16,
    textAlign: "center",
  },
  pm: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "500",
    color: "#6b7280",
    display: "none",
  },
  fluentcall12FilledIcon: {
    width: 21,
    height: 21,
  },
  fluentcall12FilledParent: {
    gap: 14,
    alignItems: "center",
  },
  jessicaCampbellParent: {
    justifyContent: "space-between",
  },
  lastSeen1328pm: {
    fontWeight: "300",
    color: "#b6b7b8",
    textAlign: "left",
    fontFamily: "SF Pro Display",
    lineHeight: 20,
    fontSize: 16,
  },
  iconcheckCheck: {
    width: 18,
    height: 18,
    opacity: 0,
    overflow: "hidden",
  },
  lastSeen1328pmParent: {
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
  },
  frameGroup: {
    justifyContent: "space-between",
    height: 24,
    flex: 1,
  },
  frameParent: {
    gap: 10,
    alignItems: "center",
    flex: 1,
  },
  controlsButtonBackParent: {
    gap: 8,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    marginTop: 60,
    paddingHorizontal: 16,
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    flex: 1,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  message: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "SF Pro Display",
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: "#b6b7b8",
  },
  frame1: {
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    borderRadius: 16,
    backgroundColor: "#1b1d22",
    overflow: "hidden",
    alignItems: "flex-end",
    padding: 12,
    gap: 4,
  },
  chatBubble: {
    maxWidth: "80%",
    backgroundColor: "#1b1d22",
    borderRadius: 16,
    padding: 12,
    gap: 4,
  },
  chatBubbleContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  timestamp: {
    color: "#b6b7b8",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "SF Pro Display",
    textAlign: "right",
  },
  textTypo2: {
    textAlign: "left",
    color: "#fff",
    fontFamily: "SF Pro Display",
  },
  componentChild: {
    borderRadius: 1267,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  message2: {
    alignSelf: "stretch",
    fontSize: 16,
    lineHeight: 20,
  },
  text2: {
    fontSize: 14,
    lineHeight: 18,
  },
  checks: {
    width: 16,
    height: 16,
    display: "none",
  },
  frame4: {
    alignItems: "center",
    gap: 4,
    flexDirection: "row",
  },
  frame3: {
    borderRadius: 8,
    backgroundColor: "#ff2d89",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 12,
    gap: 4,
    overflow: "hidden",
    flex: 1,
  },
  component: {
    width: "100%",
    gap: 8,
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
  },
  replyContainer: {
    width: "100%",
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 15,
  },
  replyImage: {
    borderRadius: 1267,
    width: 40,
    height: 40,
    overflow: "hidden",
    marginRight: 8,
  },
  replyBubble: {
    maxWidth: "80%",
    backgroundColor: "#ff2d89",
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  replyTimestampContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  commentTab1FlexBox: {
    gap: 12,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  tabBorder: {
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#374151",
    borderStyle: "solid",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  frameGroupFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    fontSize: 14,
    lineHeight: 18,
    color: "#fff",
    textAlign: "center",
    fontFamily: "SF Pro Display",
  },
  tab: {
    height: 34,
  },
  tab4: {
    height: 36,
  },
  commentTab1: {
    //top: "50%",
    left: 0,
    overflow: "scroll",
    width: "100%",
  },
  commentTab: {
    top: 16,
    height: 60,
   
    left: 16,
    //position: "absolute",
    width: "100%",
  },
  frameChildLayout: {
    height: 24,
    width: 24,
  },
  leaveAMessage: {
    fontSize: 16,
    lineHeight: 20,
    color: "#9ca3af",
    textAlign: "left",
    fontFamily: "SF Pro Display",
  },
  mdiemojiParent: {
    gap: 4,
  },
  frameGroup3: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  frameWrapper: {
    borderRadius: 10,
    backgroundColor: "#1b1d22",
    height: 48,
    paddingVertical: 9,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameItem: {
    borderRadius: 99,
    width: 40,
    height: 40,
    overflow: "hidden",
  },
  frameParent3: {
    top: 87,
    width: "100%",
    left: 16,
    paddingRight: 30,
  },
  commentSection: {
    backgroundColor: "#0c0f14",
    height: 177,
    overflow: "hidden",
    width: "100%",
    //flex: 1,
    alignSelf: "stretch",
    position: "absolute",
    bottom: 0,
  },
});
