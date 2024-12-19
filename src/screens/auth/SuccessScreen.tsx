import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import RadialEllipse from '../../assets/svg/auth/radial-ellipse';
import SuccessBadgeIcon from '../../assets/svg/auth/success-badge';
import { COLORS } from '../../constants/theme';
import WithNoAuth from '../../constants/HOC/withNoAuth';
import Button from '../../constants/Button';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {

  const navigation = useNavigation()
  return (
    <WithNoAuth>
      <SafeAreaView style={styles.container}>
        <View />
        <View style={styles.contentContainer}>
          <SuccessBadgeIcon />
          <Text variant="titleLarge" style={styles.title}>
            Successful
          </Text>
          <Text variant="bodyLarge" style={styles.subtitle}>
            You have successfully added a new check-in selfie to your profile
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Proceed"
            onPress={() => navigation.navigate("Dashboard" as never)}
          />
        </View>
      </SafeAreaView>
    </WithNoAuth>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backgroundContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    marginBottom: 8,
    marginTop: 32,
  },
  subtitle: {
    color: COLORS.silver_gray,
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 32,
    width: '100%',
  },
  button: {
    borderRadius: 10,
  },
});

export default SuccessScreen;
