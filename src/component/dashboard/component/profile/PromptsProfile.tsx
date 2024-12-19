import React, { useState, useEffect } from 'react';
import { Text, Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FlatList, SafeAreaView, View, StyleSheet, TextInput, Keyboard, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { prompts } from '../../../../constants/common/prompts';
import { COLORS } from '../../../../constants/theme';
import { useSelector } from 'react-redux';

const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <List.Icon
    icon="chevron-right"
    style={{
      transform: [{ rotate: expanded ? '90deg' : '0deg' }]
    }}
  />
);

const { width } = Dimensions.get("window")
const ItemSeparatorComponent = () => <View style={styles.separator} />;

const WeekendAndLeisure = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [textInputValue, setTextInputValue] = useState('');
  const { onboardingData } = useSelector((a: { user: { onboardingData: any } }) => a.user)

  return (
    <View>
      {
        onboardingData.prompts.map((item: any, b) => {

          const isExpanded = expandedItem === item.question;

          return (
            <View key={b} style={[
              styles.listItemBig,
              isExpanded && styles.listItemExpanded
            ]}>
              <List.Item
                title={item.question}
                style={[styles.listItem, isExpanded && styles.expandedItem]}
                right={() => <ChevronIcon expanded={isExpanded} />}
                onPress={() => setExpandedItem(isExpanded ? null : item.question)}
              />
              {isExpanded && (
                <View
                  style={styles.textArea}
                >
                  <Text style={{ color: COLORS.white }}>
                    {item.answer}
                  </Text>
                </View>
              )}
            </View>
          )
        }
        )
      }
    </View>
  );
}

const PromptsProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <WeekendAndLeisure />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width
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
  },
  subtitle: {
    color: COLORS.silver_gray,
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
    backgroundColor: '#161A22',
    borderRadius: 10,
    marginBottom: 20,
    width: width - 32,
    overflow: 'hidden',
    height: 'auto',
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

export default PromptsProfile;
