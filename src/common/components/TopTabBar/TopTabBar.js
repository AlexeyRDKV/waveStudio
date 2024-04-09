import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AnswersScreen from 'src/screens/components/AnswersScreen';
import SpecialistsScreen from 'src/screens/components/SpecialistsScreen';

import styles from './styles';

const Tab = createMaterialTopTabNavigator();

function tabBarLabel(focused, label) {
  return (
    <Text
      style={[
        styles.tabLabel,
        focused ? styles.focusedLabelText : styles.labelText,
      ]}>
      {label}
    </Text>
  );
}

function TopTabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="SpecialistsScreen"
        component={SpecialistsScreen}
        options={{
          tabBarLabel: ({ focused }) => tabBarLabel(focused, 'Специалисты'),
          tabBarIndicatorStyle: {
            backgroundColor: '#5D3FD3',
          },
          tabBarActiveTintColor: '#5D3FD3',
          tabBarInactiveTintColor: '#303030',
        }}
      />
      <Tab.Screen
        name="AnswersScreen"
        component={AnswersScreen}
        options={{
          tabBarLabel: ({ focused }) => tabBarLabel(focused, 'Ответы'),

          tabBarIndicatorStyle: {
            backgroundColor: '#5D3FD3',
          },
          tabBarActiveTintColor: '#5D3FD3',
          tabBarInactiveTintColor: '#303030',
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabBar;
