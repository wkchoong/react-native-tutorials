import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootNavigatorParams } from '@src/types/index';

import Home from '@modules/Home/pages/Home';
import Page1 from './modules/Home/pages/Page1';
import Page2 from './modules/Home/pages/Page2';

const RootStack = createNativeStackNavigator<RootNavigatorParams>();

const Route = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Page1" component={Page1} />
        <RootStack.Screen name="Page2" component={Page2} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
