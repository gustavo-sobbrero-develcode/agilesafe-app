// App.tsx

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import SideBarContent from '../components/SideBarContent/SideBarContent';
import Home from '../screens/Home/Home';
import { StatusBar } from 'react-native';
import SearchInstitutions from '../screens/SearchInstitutions/SearchInstitutions';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchInstitutions"
          component={SearchInstitutions}
          options={{
            headerStyle: { backgroundColor: 'lightgray' },
            headerTitleAlign: 'center',
            headerTitle: 'Instituições de Saúde',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const DrawerRoutes: React.FC = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: 'Agile Safe',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: 'lightgray' },
      }}
      drawerContent={props => <SideBarContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={Home} />
    </Drawer.Navigator>
  );
};

export default StackNav;
