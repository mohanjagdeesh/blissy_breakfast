import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../utils/DrawerContent';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#e6e6e6',
          width: 240,
        },
      }}
    >
        <Drawer.Screen
          name="Main"
          component={StackNavigation}
          options={{ headerShown: false }}
        />

    </Drawer.Navigator>
  );
};

export default DrawerNavigation;