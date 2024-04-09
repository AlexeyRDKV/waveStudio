import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import TopTabBar from '../TopTabBar';
import ChatScreen from 'src/screens/components/ChatScreen';
import QuestionScreen from 'src/screens/components/QuestionScreen';
import SpecialistProfileScreen from 'src/screens/components/SpecialistProfileScreen';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

export default function NavigatorProvider() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.TOP_TAB_BAR}
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        presentation: 'card',
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen
        options={{ headerShown: true, title: 'Консультация' }}
        name={ROUTES.TOP_TAB_BAR}
        component={TopTabBar}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.CHAT_SCREEN}
        component={ChatScreen}
      />
      <Stack.Screen
        name={ROUTES.SPECIALIST_PROFILE_SCREEN}
        component={SpecialistProfileScreen}
        options={{
          headerShown: true,
          title: 'Специалист',
          headerBackTitle: 'Назад',
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          gestureEnabled: true,
          gestureDirection: 'vertical',
        }}>
        <Stack.Screen
          name={ROUTES.QUESTION_SCREEN}
          component={QuestionScreen}
          options={{ title: 'Новый вопрос', headerBackTitle: 'Назад' }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
