import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import LeftArrow from '../../../../assets/svg/nav/left_arrow';
import { COLORS, FONTS } from '../../../../constants/theme';
import TabBorder from '../../../../assets/svg/menu/TabBorder';
import RightDropDown from '../../../../assets/svg/nav/right_dropdown';

const SettingsScreen = ({ setMatchPage, CheckinPop, setPage }: { setMatchPage: any, CheckinPop: any, setPage: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 16 }}>
        <TabBorder />
      </View>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMatchPage(false)}>
            <View style={styles.containerIcon}>
              <LeftArrow />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.headerText}>Settings</Text>
          </View>
          <View>

          </View>
        </View>
        {/* Settings Options */}
        <TouchableOpacity onPress={() => setPage("notification")} style={styles.option}>
          <Text style={styles.optionText}>Notification Settings</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("security")} style={styles.option}>
          <Text style={styles.optionText}>Security and Privacy</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("contact")} style={styles.option}>
          <Text style={styles.optionText}>Contact and FAQ</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("term")} style={styles.option}>
          <Text style={styles.optionText}>Term & Conditions</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("restore")} style={styles.option}>
          <Text style={styles.optionText}>Restore purchases</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>

        {/* Bottom Options */}
        <View style={{ height: 30 }} />
        <TouchableOpacity onPress={() => setPage("delete")} style={styles.bottomOption}>
          <Text style={styles.bottomOptionText}>Delete account</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage("logout")} style={styles.bottomOption}>
          <Text style={[styles.bottomOptionText, styles.logoutText]}>Log out</Text>
          <RightDropDown color={COLORS.white} height='20' width='20' />
        </TouchableOpacity>
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
    justifyContent: "space-between",
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    color: COLORS.white,
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
});

export default SettingsScreen;