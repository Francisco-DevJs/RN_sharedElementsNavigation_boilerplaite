import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import CollaboratorsList from './screens/collaboratorsList';
import CollabDetails from './screens/collabDetails';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createSharedElementStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{cardOverlayEnabled: true}}>
        <Stack.Screen
          name="list"
          component={CollaboratorsList}
          options={navigation => ({
            header: () => null,
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
        <Stack.Screen
          name="details"
          component={CollabDetails}
          options={navigation => ({
            gestureDirection:'horizontal',
            gestureEnabled:true,
            header:() => <View style={{backgroundColor:'transparent', position:'absolute', flex:1}}><Text style={{color:'green', fontSize:40}}>{navigation.route.params.data.title}</Text></View>,
            // headerBackTitleVisible: true,
            title: navigation.route.params.data.title,
            cardStyleInterpolator: ({current: {progress}}) => {
              
              return {
                cardStyle: {
                  opacity:progress
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
