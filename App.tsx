/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {Router} from '@app/config/router';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Router />;
};

export default App;
