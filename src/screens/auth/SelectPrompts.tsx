import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "react-native-paper";
import { COLORS, FONTS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import WithNoAuth from "../../constants/HOC/withNoAuth";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../../constants/Layout/Header";
import { ScrollView } from "react-native-gesture-handler";
import { prompts } from "../../constants/common/prompts";
import RightArrow from "../../assets/svg/user/RightArrow";
import CheckinPop from "../../component/dashboard/component/CheckInPop/checkinPop";
import Button2 from "../../constants/Button";

export default function SelectPrompts() {

  const navigation = useNavigation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  const onSubmit = () => {
    navigation.navigate('LoggedOut', { screen: 'CheckInSelfie', params: {} });
  };


  const Tab = createMaterialTopTabNavigator();

  const WeekendAndLeisure = () => {

    return (
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.black, paddingHorizontal: 16 }}>
        {
          prompts.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => {
                setSelectedQuestion(index)
                setExpandedItem(item.question)
              }}>
                <View style={
                  styles.listItemBig
                }>
                  <Text style={styles.listItemText}>{item.question}</Text>
                  <RightArrow />
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    )
  }

  return (
    <WithNoAuth>
      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <Header title="8/8" textColor={COLORS.white} />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>
          What will your opening move be?
        </Text>
        <Text style={styles.subtitle}>
          Choose a first message for all your new connects to reply to.
        </Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: "transparent", boxShadow: 'none' },
          tabBarIndicatorStyle: { backgroundColor: COLORS.magenta_pink },
          tabBarLabelStyle: { fontSize: 14 },
          tabBarActiveTintColor: COLORS.magenta_pink,
          tabBarInactiveTintColor: COLORS.silver_gray,
          tabBarScrollEnabled: true,
        }}>
        <Tab.Screen
          name="WeekendAndLeisure"
          component={WeekendAndLeisure}
          options={{ tabBarLabel: 'Weekend and Leisure' }}
        />
        <Tab.Screen
          name="MemorableMoments"
          component={WeekendAndLeisure}
          options={{ tabBarLabel: 'Memorable Moments' }}
        />
        <Tab.Screen
          name="FoodAndDrinksAdventures"
          component={WeekendAndLeisure}
          options={{ tabBarLabel: 'Food and Drinks Adventures' }}
        />
      </Tab.Navigator>

      <View style={styles.buttonContainer}>
        <Button2
          title="Continue"
          onPress={onSubmit}
          containerStyle={styles.button}
        />
        <Button onPress={onSubmit}>Skip</Button>
      </View>
      <KeyboardAvoidingView
        behavior="padding" // Adjust for header height if necessary
      >
        <CheckinPop selectedQuestion={selectedQuestion} setMatchPage={setExpandedItem} CheckinPop={expandedItem} />
      </KeyboardAvoidingView>
    </WithNoAuth>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
    paddingTop: 20,
    height: '100%',
  },
  backgroundContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  headerContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    color: COLORS.white,
    fontFamily: FONTS._500Medium.fontFamily
  },
  subtitle: {
    color: COLORS.silver_gray,
    fontFamily: FONTS._500Medium.fontFamily
  },
  listContent: {
    backgroundColor: '#0C0F14',
    paddingTop: 24,
    paddingBottom: 4,
    height: 600,
    paddingHorizontal: 16,
  },
  listItem: {
    borderRadius: 10,
  },
  button: {
    borderRadius: 10,
    marginVertical: 16,
    height: 50
  },
  separator: {
    height: 8
  },
  expandedItem: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  textArea: {
    borderColor: 'rgba(255,255,255,0.1)',
    borderWidth: 1,
    backgroundColor: '#1B1D22',
    color: 'white',
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 10,
    minHeight: 100,
  },
  listItemBig: {
    backgroundColor: COLORS.charcoal_black,
    height: 51,
    borderRadius: 10,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16
  },

  listItemText: {
    fontFamily: FONTS._500Medium.fontFamily,
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "400"
  },
  listItemExpanded: {
    height: 'auto',
    minHeight: 200,
  },
  flatList: {
    flex: 1,
    height: 'auto',
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});
