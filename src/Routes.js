import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import CollaboratorsList from './screens/collaboratorsList';
import CollabDetails from './screens/collabDetails';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createSharedElementStackNavigator()

const Routes = () => {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="list"
          component={CollaboratorsList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="details"
          component={CollabDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;
