/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';
import Main from '@src/index';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Main />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
