// App.tsx

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideBarContent from '../components/SideBarContent/SideBarContent';
import Home from '../screens/Home/Home';
import {StatusBar} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Drawer.Navigator
        screenOptions={{
          headerTitle: 'Agile Safe',
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'lightgray'},
        }}
        drawerContent={props => <SideBarContent {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerRoutes;
