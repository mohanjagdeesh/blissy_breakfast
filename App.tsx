import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from './src/navigations/DrawerNavigation';
import SplashScreen from "react-native-splash-screen";
import { navigationRef } from './src/utils/NavigationType';

const App = () => {

  useEffect(() => {
      setTimeout(() => {
        SplashScreen.hide();
      }, 500);
  }, []);


  return(
    <NavigationContainer ref={navigationRef}>
      <DrawerNavigation />
    </NavigationContainer>
  )
};

export default App;
