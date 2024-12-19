import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import LeftArrow from '../../../../assets/svg/nav/left_arrow';
import { COLORS, FONTS } from '../../../../constants/theme';
import TabBorder from '../../../../assets/svg/menu/TabBorder';
import RightDropDown from '../../../../assets/svg/nav/right_dropdown';
import { Switch } from 'react-native-paper';

const NotificationsSetting = ({ setPage }: { setPage: any }) => {

  const [pushNotifications, setPushNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [emails, setEmails] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
        <TabBorder />
      </View>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setPage("")}>
            <View style={styles.containerIcon}>
              <LeftArrow />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Notification</Text>
          </View>
          <View>

          </View>
        </View>
        <Text style={styles.subHeader}>
          Turning these off might make you miss important alerts from your connections
        </Text>
        {/* Settings Options */}
        <View style={styles.option}>
          <Text style={styles.optionText}>Push notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF0080' }}
            thumbColor={'#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setPushNotifications(!pushNotifications)}
            value={pushNotifications}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Contact and FAQ</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF0080' }}
            thumbColor={'#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setInAppNotifications(!pushNotifications)}
            value={inAppNotifications}
          />
        </View>
        <View style={styles.option}>
          <Text style={styles.optionText}>Term & Conditions</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF0080' }}
            thumbColor={'#ffffff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setEmails(!emails)}
            value={emails}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 590,
    backgroundColor: COLORS.black,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  containerIcon: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white_60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  header: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: -30,
    fontFamily: FONTS._500Medium.fontFamily
  },
  option: {
    backgroundColor: COLORS.charcoal_black, // Dark gray background
    padding: 15,
    borderRadius: 10,
    height: 51,
    paddingRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS._500Medium.fontFamily
  },
  bottomOption: {
    backgroundColor: COLORS.charcoal_black,
    padding: 15,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 8,
  },
  bottomOptionText: {
    fontSize: 16,
    color: '#fff',
  },
  logoutText: {
    color: '#FF4B5C', // Red text for logout
  },
  subHeader: {
    color: COLORS.silver_gray,
    textAlign: "center",
    marginVertical: 24,
    fontSize: 14,
    marginBottom: 30,
  }
});

export default NotificationsSetting;